const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter')
const categoryRouter = require('./router/categoryRouter')
const cartRouter=require('./router/cartRouter')
const orderRouter=require('./router/orderRouter')
const addressRouter=require('./router/addressRouter')
const connectdb = require('./config/db')
const express = require('express')
const dotenv = require ('dotenv')
const cors = require('cors')
dotenv.config();
connectdb()

const app =express()
app.use(express.json())
// app.use(cors());
app.use(cors({
  origin: "*",
  credentials: true,
  methods: "*",
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use('/uploads',express.static('uploads'))
app.use('/api/users',userRouter)
app.use('/api/users',productRouter)//api/product
app.use('/api/users',categoryRouter)//api/categories
app.use('/api/users',cartRouter)//api/cart
app.use('/api/users',orderRouter)//api/cart
app.use('/api/users',addressRouter)//api/cart



const port = process.env.PORT ||5050;
app.listen(port,()=>console.log(`server is running on port ${port}`))
