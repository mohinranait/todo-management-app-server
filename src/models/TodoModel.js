const {model, Schema, Types } = require("mongoose")

const todoSchema = new Schema({
    user : {
        type : Types.ObjectId,
        ref: "User"
    },
    userEmail : {
        type : String,
    },
    title : {
        type : String,
    },
    descriptions : {
        type : String,
    },
    deadlines : {
        type : String,
    },
    priority : {
        type : String, // low , moderate, high
    },
    status : {
        type : String, 
    },

},{timestamps:true});


const Todo = model("Todo", todoSchema);

module.exports = Todo;