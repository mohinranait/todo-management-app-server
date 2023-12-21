const Todo = require("../models/TodoModel");


// Create new todos
const createNewTodo = async (req, res) => {
    try {
        const email = req.query?.email;
        const tokenEmaill = req.user?.email;

        if(email !== tokenEmaill ){
            return res.status(403).send({
                success: false,
                message : "forbidden access",
            })
        }
        const todo = req.body;
        const result = await Todo.create(todo);
        res.status(200).send({
            success : true,
            message : "Todo created",
        })
    } catch (error) {
        res.status(500).send({
            success : false,
            message : "Somthing wrong",
        })
    }
}

// Get todos for author
const getAuthorWishTodo = async (req, res) => {
    try {
        const email = req.query?.email;
        const tokenEmaill = req.user?.email;

        if(email !== tokenEmaill ){
            return res.status(403).send({
                success: false,
                message : "forbidden access",
            })
        }
        const todos = await Todo.find({userEmail: email}).populate("user")
        console.log(todos);
        res.status(200).send({
            success : true,
            todos,
        })
    } catch (error) {
        res.status(500).send({
            success : false,
            message : "Somthing wrong",
        })
    }
}



// update todo by email
const updateTodoByUserEmail = async (req, res) => {
    try {
        const email = req.query?.email;
        const id = req.params?.id;
        const tokenEmaill = req.user?.email;
     
        if(email !== tokenEmaill ){
            return res.status(403).send({
                success: false,
                message : "forbidden access",
            })
        }

        const todoUpdateData = req.body;
        const todo = await Todo.findOneAndUpdate({_id:id}, todoUpdateData, {new:true, runValidators:true})
        if(!todo){
            return res.status(404).send({
                success:false,
                message: "Todo not found"
            })
        };

        res.send({
            success: true,
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message: error.message
        })
    }
}


// Delete todo by email
const deleteTodoByUserEmail = async (req, res) => {
    try {
        const id = req.params?.email;
        const email = req.query?.email;
        const tokenEmaill = req.user?.email;
     
        if(email !== tokenEmaill ){
            return res.status(403).send({
                success: false,
                message : "forbidden access",
            })
        }

        const todo = await Todo.findOneAndDelete(id)
        if(!todo){
            return res.status(404).send({
                success:false,
                message: "Todo not found"
            })
        };

        res.send({
            success: true,
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message: error.message
        })
    }
}



// Get signle todo by UserEmail
const getSignleTodoByUserEmail = async (req, res) => {
    try {
       
        const id = req.params?.id;
        const email = req.query?.email;
        const tokenEmaill = req.user?.email;

        if(email !== tokenEmaill ){
            return res.status(403).send({
                success: false,
                message : "forbidden access",
            })
        }
       
        const todo = await Todo.findById(id).populate('user');
        if(!todo){
            return res.status(404).send({
                success: false,
                message : "Todo notfound",
            })
        }
       
        res.send({
            success: true,
            todo,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message : error.message,
        })
    }
}




module.exports = {
    createNewTodo,
    getAuthorWishTodo,
    updateTodoByUserEmail,
    deleteTodoByUserEmail,
    getSignleTodoByUserEmail
}