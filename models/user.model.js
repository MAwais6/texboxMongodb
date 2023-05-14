module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        textbox1: {
            type: String,
            required: true,
        },
        textbox2: {
            type: String,
            required: true,
        },

        createdAT: {
            type: Date,
            default: Date.now,
        },
    });

    return mongoose.model('User', UserSchema);
};

