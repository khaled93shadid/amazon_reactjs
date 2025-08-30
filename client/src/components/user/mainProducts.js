import '../../style/mainProduct.css'
import MainProductsNav from './navBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Footer from "../footer"
import { Product } from './product'



export default function MainProducts(){ 
const navigate= useNavigate();
const [productData,setproductData]=useState([])
const [categoryData,setcategoryData]=useState([])
const [addedToCart,setAddedToCart]=useState({})

useEffect(()=>{
const token = localStorage.getItem('token')
const abortController=new AbortController();
  const fetchdata = async ()=>{
 
try
{
await axios.get("http://127.0.0.1:5000/api/users/getAllProducts",  { headers:   {Authorization:token}   } 

).then(res=>setproductData(res.data))


await axios.get("http://127.0.0.1:5000/api/users/getAllCategory", { headers:   {Authorization:token}   } 
).then(res=>setcategoryData(res.data))



  }
 catch(error){console.log(error);navigate('/login')}


  } 
  
    
 
 fetchdata();
 return ()=>{ abortController.abort()}

  },[])

  
const handleAddedToCart=(productId)=>{
   setAddedToCart(prev=>({...prev,[productId]:true}));
  
   setTimeout(() =>  setAddedToCart(prev=>({...prev,[productId]:false})), 3000); 
  
            }  

const addToCart =async(productId,quantity)=>{
  const token=localStorage.getItem('token')
  await axios.post('http://127.0.0.1:5000/api/users/addtocart',{productId,quantity},{ headers:{'Authorization':`${token}`} }  
  ).then(res=>window.dispatchEvent(new Event('cartUpdated'))).catch(err=>console.log(err));
    
      
} //add to cart

return(

<>
<MainProductsNav/>
<div className="all-products-container">
{productData.map((product)=>(

<Product key={product._id} product={product} 
addToCart={addToCart} handleAddedToCart={handleAddedToCart} addedToCart={addedToCart} />






))}

</div>

<Footer />
</>
)

}