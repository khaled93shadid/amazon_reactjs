const User = require('../model/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();




exports.getAllUser = async (req, res) => {

    try {
        const users = await User.find().exec();
        res.status(200).json(users)

    }
    catch (error) { res.status(500).json({ message: error.message }) }

}








exports.getprofile = async (req, res) => {

    try {
        const user1 = await User.findById(req.user)
        res.json(user1)

    }
    catch (error) { res.status(500).json({ success: false, message: error.message }) }

}








exports.register = async (req, res) => {

    const { username, email, password, fullname, address, phone } = req.body
    if (!username || !email || !password) { return res.status(400).json({ message: 'Missing required fields' }); }

    try {

        //const image = req.file ? req.file.path : null;

        const existingUser = await User.findOne({ $or: [{ email: email }, { username: username }] }).exec();
        // const existingUser = await User.findOne({ email: email }).exec();
        if (existingUser) { return res.status(409).json({ message: 'Email already registered' }) }

        const hashedpass = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: hashedpass,
            fullname,
            address,
            phone,
        })

        await newUser.save();

        const token = jwt.sign(
            { id: newUser._id, email: newUser.email, role: newUser.role, username: newUser.username },
            process.env.JWT_SECRET, { expiresIn: '7d' })

        res.status(201).json({ token, user: newUser })

    }
    catch (error) { res.status(500).json({ success: false, message: error.message }) }


}










exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) { return res.status(400).json({ success: false, message: 'Email and password are required' }); }

    try {

        const userx = await User.findOne({ email });
        if (!userx) { return res.status(400).json({ message: 'invalid credintails' }) }

        const ismatch = await bcrypt.compare(password, userx.password)

        if (!ismatch) { return res.status(400).json({ message: 'invalid credintails' }) }

        const token = jwt.sign({ id: userx._id, role: userx.role }, process.env.JWT_SECRET, { expiresIn: '7d' })
        return res.status(200).json({ token, userx });

    }
    catch (error) { res.status(500).json({ message: error.message }) }

}




exports.changepassword = async (req, res) => {
    const { oldpassword, newpassword } = req.body;
    if (!oldpassword || !newpassword) { return res.status(400).json({ message: 'Both old and new passwords are required' }); }
    if (oldpassword === newpassword) { return res.status(400).json({ message: 'New password must be different from old password' }); }

    try {
        const user = await User.findById(req.user)
        if (!user) { return res.status(404).json({ message: 'User not found' }); }

        const ismatch = await bcrypt.compare(oldpassword, user.password);
        if (!ismatch) { return res.status(401).json({ message: 'wrong oldpassword' }) }

        const hashednewpassword = await bcrypt.hash(newpassword, 10)
        user.password = hashednewpassword;

        await user.save();

        res.status(200).json({ message: "password changed successfully" });



    }
    catch (error) { console.log(error); res.status(500).json({ message: 'Server error', error: error.message }) }




}

exports.updateUser = async (req, res) => {
    const { fullname, email, address, phone } = req.body
   

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {return res.status(400).json({ message: 'Email already in use' });}

        const user1 = await User.findByIdAndUpdate(req.user, { fullname, email, address, phone }, { new: true });
        if (!user1) { return res.status(400).json({ message: "user not found" }) }



        res.status(200).json({ message: 'user updated successufly' })

    }
    catch (error) { res.status(500).json({ message: error.message }) }


}
