const { createNewTodo, getSignleTodoByUserEmail, updateTodoByUserEmail, deleteTodoByUserEmail, getAuthorWishTodo } = require('../controllers/TodoController');
const isAuth = require('../middleware/isAuth');

const todoRouter = require('express').Router();


todoRouter.post("/todo", isAuth , createNewTodo)
todoRouter.get("/todos", isAuth , getAuthorWishTodo)
todoRouter.get("/todo/:id", isAuth , getSignleTodoByUserEmail)
todoRouter.patch("/todo/:id", isAuth , updateTodoByUserEmail)
todoRouter.delete("/todo/:id", isAuth , deleteTodoByUserEmail)


module.exports = todoRouter;