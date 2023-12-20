const {model, Schema } = require("mongoose")

const userSchema = new Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        trim: true,
        lowercase: true,
    },
    mobile : {
        type : String,
    },
    avater : {
        type : String,
    },

},{timestamps:true});


const User = model("User", userSchema);

module.exports = User;