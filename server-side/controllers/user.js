import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const secret = 'test';

export const signin = async (req,res) => {
    const {email, username,password} = req.body;

    try {

        const username = email;
        const existingUser = await User.findOne({email});
        /*
        if (!existingUser) {
            await User.findOne({username});
        }
        */
        if (!existingUser) return res.status(404).json({message: "Email Address doesn't exist"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials"});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "24h"});

        res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(500).json({message: 'Something went wrong.'});

    }
}

export const signup = async (req,res) => {
    
    const {email, password, confirmPassword, username, firstName, lastName} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({message: "Email Address already exists."});
        const existingUsername = await User.findOne({username});

        if (existingUsername) return res.status(400).json({message: "Username already exists."})
        

        if(password !== confirmPassword) return res.status(400).json({message: "Passwords don't match."});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, username: `${username}`, name: `${firstName} ${lastName}` });

        const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "24h" } );

        res.status(201).json({ result, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    
        console.log(error);
    }

}
