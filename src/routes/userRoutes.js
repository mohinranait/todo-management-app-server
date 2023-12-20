const userRouter = require('express').Router();
const { createNewUser, getSignleUserByEmail, getAllUsers, updateUserByEmail, deleteUserByEmail } = require('../controllers/UserController');
const isAuth = require('../middleware/isAuth');



userRouter.post('/users', createNewUser )
userRouter.get('/user/:email', isAuth, getSignleUserByEmail )
userRouter.get('/users', isAuth,  getAllUsers );
userRouter.patch('/user/:email', isAuth, updateUserByEmail );
userRouter.delete('/user/:email', isAuth, deleteUserByEmail );

module.exports = userRouter