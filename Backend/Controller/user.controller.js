import User from "../Model/user.modal.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "User already exist !" });

    const hashPassword = await bcryptjs.hash(password, 10);
    const createuser = new User({
      fullname,
      email,
      password: hashPassword,
    });

    createuser.save();

    res.status(201).json({
      message: " user created sucessfully !",
      user: {
        _id: createuser._id,
        fullname: createuser.fullname,
        email: createuser.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid username or password!" });

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid username or password!" });
    } else {
      res.status(200).json({
        message: "Login  Successfull !",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error" + error.message);

    res.status(500).json({ message: "Internal server error" });
  }
};
