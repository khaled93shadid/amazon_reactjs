import '../../style/mainProduct.css'
import MainProductsNav from './navBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Footer from "../footer"



export default function MainProducts(){
const navigate= useNavigate();
const [productData,setproductData]=useState([])
const [categoryData,setcategoryData]=useState([])
  
useEffect(()=>{
const token = localStorage.getItem('token')
const abortController=new AbortController();
  const fetchdata = async ()=>{
 
try
{
await axios.get("http://127.0.0.1:5000/api/users/getAllProducts",  { headers:   {Authorization:`${token}`}   } 

).then(res=>setproductData(res.data))


await axios.get("http://127.0.0.1:5000/api/users/getAllCategory", { headers:   {Authorization:`${token}`}   } 
).then(res=>setcategoryData(res.data))



  }
 catch(error){console.log(error);navigate('/login')}


  } 
  
    
 
 fetchdata();
 return ()=>{ abortController.abort()}

  },[])

const addToCart =async(productId)=>{
  const token=localStorage.getItem('token')
 await axios.post('http://127.0.0.1:5000/api/users/addtocart',{productId,quantity:1},
    { headers:{'Authorization':`${token}`} }).then( window.dispatchEvent(new Event('cartUpdated'))).catch(err=>console.log(err))

      
} //add to cart

return(

<>
<MainProductsNav/>
<div className="all-products-container">
{productData.map((product)=>(


<div key={product._id} className="product-container">
<div className="vertical-first-div">
  <img className="product-img" src={product.image} />
  <p className="product-name">{product.name}
</p>
</div> 
  <div className="horizontal_star-rating">   
     <img className="product-rating-pic" src={product.stars}/> 
     <div>  <p className="product-rating-num"></p> </div>
  </div>
  
  <div className="vertical-last-div">
    <p className="product-price">{product.price}</p>
   <select className="horizontal_select">
        <option  defaultValue="1">1</option>
        <option  value="2">2</option>
        <option  value="3">3</option>
        <option  value="4">4</option>
        <option  value="5">5</option>
        <option  value="6">6</option>
        <option  value="7">7</option>
        <option  value="8">8</option>
        <option  value="9">9</option>
        <option  value="10">10</option>
    </select>
    <br/>
    <button className="button-add-to-cart" onClick={()=>addToCart(product._id)}>Add to Cart</button>
  </div>
  </div>         






))}

</div>

<Footer />
</>
)

}