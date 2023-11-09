const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const createUser = async (email) => {
  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email });
    // const newUser = new User({
    //   email,
    //   password
    // });

    return await newUser.save();
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createPassword = async (email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.findOneAndUpdate({ email }, { password: hashedPassword });
    // const newUser = new User({
    //   email,
    //   password
    // });

    return await user.save();
  } catch (error) {
    res.status(500).json({ error });
  }
};

const logIn = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    if (await bcrypt.compare(password, user.password)) {
      return;
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  createUser,
  createPassword,
  logIn
};
