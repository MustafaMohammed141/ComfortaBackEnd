const User = require("../models/userschema");
const userschema = require("../models/userschema");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  const { name, email, password, phone, address, age, gender } = req.body;
  if (!name || !email || !password || !phone || !address || !age || !gender)
    return res
      .status(400)
      .json({ status: 400, data: { data: null, message: "missing data" } });

  const isUser = await User.findOne({ email });
  if (isUser) {
    res
      .status(400)
      .json({ status: 400, data: { data: null, message: "Existing User" } });
  }
  const passhash = await bcrypt.hash(password, 8);

  const user = await userschema(
    {
      name,
      email,
      password: passhash,
      phone,
      address,
      age,
      gender,
    },
    console.log(`isSaved`)
  );
  await user.save();
};

module.exports = { signup };
