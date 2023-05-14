const db = require('../db');

const User = db.User;

exports.create = async (req, res) => {
    console.log(req.body); 
    const { textBox1 , textBox2 } = req.body;
    
    try {
        const user = new User({
            textBox1,
            textBox2
        });

        const savedUser = await user.save();

        res.status(201).json({
            message: 'User created successfully',
            healer: {
                id: savedUser._id,
            },
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


exports.findAll = async (req, res) => {
    try {
        
        const users = await User.find().sort({createdAT: -1});
        res.json(users);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


