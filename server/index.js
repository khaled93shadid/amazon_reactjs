const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter')
const categoryRouter = require('./router/categoryRouter')
const connectdb = require('./config/db')
const express = require('express')
const dotenv = require ('dotenv')
const cors = require('cors')
dotenv.config();
connectdb()

const app =express()
app.use(express.json())
app.use(cors());
app.use('/uploads',express.static('uploads'))
app.use('/api/users',userRouter)
app.use('/api/users',productRouter)
app.use('/api/users',categoryRouter)



const port = process.env.PORT ||5050;
app.listen(port,()=>console.log(`server is running on port ${port}`))
