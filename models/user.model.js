module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        textBox1: {
            type: String,
            required: true,
        },
        textBox2: {
            type: String,
            required: true,
        },

        createdAT: {
            type: Date,
            default: Date.now,
        },
    });

    const User = mongoose.model('User', UserSchema);
    return User;
};

