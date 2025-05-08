const User = require("../models/userschema");
const userschema = require("../models/userschema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  const { name, email, password, phone, address, age, gender } = req.body;
  if (!name || !email || !password || !phone || !address || !age || !gender)
    return res
      .status(400)
      .json({ status: 400, data: { data: null, message: "missing data" } });

  const isUser = await User.findOne({ email });
  if (isUser) {
    return res
      .status(400)
      .json({ status: 400, data: { data: null, message: "Existing User" } });
  }
  const passhash = await bcrypt.hash(password, 8);

  const user = await userschema({
    name,
    email,
    password: passhash,
    phone,
    address,
    age,
    gender,
  });
  await user.save();

  return res.status(201).json({
    status: 201,
    data: { data: true, message: "Success" },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({
      status: 400,
      data: { data: null, message: "missing data" },
    });
  const isUser = await User.findOne({ email });
  if (!isUser)
    return res.status(400).json({
      status: 400,
      data: { data: null, message: "Recheck your data" },
    });
  const isPass = await bcrypt.compare(password, isUser.password);
  if (!isPass)
    return res.status(400).json({
      status: 400,
      data: { data: null, message: "Recheck your data" },
    });

  const data = jwt.sign(
    { id: isUser._id, name: isUser.name, email: isUser.email },
    process.env.TOKEN
  );

  return res.status(201).json({
    status: 201,
    data: { data: data, message: "Success" },
  });
};
module.exports = { signup, login };
