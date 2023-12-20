const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectMongoDb = require('./src/config/connectDatabase');
const { serverPort } = require('./src/services/envSecret');
const userRouter = require('./src/routes/userRoutes');
const todoRouter = require('./src/routes/todoRoutes');

connectMongoDb()

// Middleware
app.use(
    cors({
        origin: ['http://localhost:5173'],
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
    })
);
app.use(express.json());
app.use(cookieParser());




app.use('/api' , userRouter);
app.use('/api' , todoRouter);




app.get('/', (req, res, next) => {
    res.send("Server running")
})


app.all('*', (req, res, next) => {
    res.send("Page not found , 404")
})


app.listen( serverPort , ()  => {
    console.log(`Server is running at port http://localhost:${serverPort}`);
})