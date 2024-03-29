const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true  }, 
    password: { type: String, required: true }, 
    role: { type: Boolean, required: true, default: false }, 
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = User = mongoose.model("user", UserSchema);