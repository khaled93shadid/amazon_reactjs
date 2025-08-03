import '../../style/cart.css'
import MainProductsNav from './navBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Footer from "../footer"
import logo from '../icons/amazon-checkout -logo.png'
import lock from '../icons/checkout-lock-icon.png'

import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import RadioGroup from '@mui/material/RadioGroup'
{/*DATE START */}
const today =dayjs();
const deliveryDate1=today.add(9,'days')
const deliveryDate1String=deliveryDate1.format('dddd,MMMM D')
const deliveryDate2=today.add(3,'days')
const deliveryDate2String=deliveryDate2.format('dddd,MMMM D')
const deliveryDate3=today.add(1,'days')
const deliveryDate3String=deliveryDate3.format('dddd,MMMM D')
console.log(deliveryDate1String,deliveryDate2String,deliveryDate3String)
{/*DATE END */}
export default function Cart(){
const navigate= useNavigate();      
const[cart,setcart]=useState([])
const[cartMoney,setCartMoney]=useState({})
const[cartQuantity,setCartQuantity]=useState()
const token=localStorage.getItem('token')
useEffect(()=>{
 const abortController = new AbortController();
 const fetchCart=async()=>{
await axios.get('http://127.0.0.1:5000/api/users/getcart',{ headers:{'Authorization':`${token}`} }
      ).then(res=> setcart(res.data.items)).catch(err=>alert(err))

await axios.get('http://127.0.0.1:5000/api/users/cartMoney',{ headers:{'Authorization':`${token}`} }
      ).then(res=> setCartMoney(res.data)).catch(err=>alert(err))
 

await axios.get("http://127.0.0.1:5000/api/users/cartQuantity",{headers:{"Authorization":`${token}` 
    }}).then(res=>{setCartQuantity(res.data||0);}).catch(error=>console.log(error))
    // end fetch cart quantity
      
 }//fetchCart 

 fetchCart()

const handelCartUpdate=()=>{fetchCart() }
window.addEventListener('cartUpdated', handelCartUpdate)

return () => { abortController.abort(); window.removeEventListener('cartUpdated', handelCartUpdate);};



},[])

useEffect(() => {
  console.log("Cart from cart.js:", cart);
}, [cart]);
useEffect(() => {
  console.log("Cart from cart.js:", cartMoney);
}, [cartMoney]);


const place_order=async()=>{
  await axios.post('http://127.0.0.1:5000/api/users/placeOrder',{},{ headers:{'Authorization':`${token}`} }
      ).catch(err=>alert(err))
      alert('order added successfuly')
      navigate('/order')
      

 
}


const removeCart=async(productId)=>{
const fetchCart=async()=>{
      await axios.get('http://127.0.0.1:5000/api/users/getcart',{ headers:{'Authorization':`${token}`} }
      ).then(res=> setcart(res.data.items)).catch(err=>alert(err))
       }//fetchCart 
       
 await axios.delete(`http://127.0.0.1:5000/api/users/removefromcart2/${productId}`, { headers:{'Authorization':`${token}`} }
 ).then(window.dispatchEvent(new Event('cartUpdated')),fetchCart() ).catch(err=>console.log(err))

//alert('Item removed successfully');

}



return(
<>

<div class="header-container">{/*--navbar start */}
    <div class="left_section"><a href="/productuser"><img class="left_section_logo" src={logo} /></a> </div>
    <div class="middle_section"><p class="middle_section_p">Checkout (<span class=" middle_section_span">{cartQuantity} items </span>)</p></div>
    <div class="right_section"><img class="right_section_img" src={lock} /> </div>

  </div>
  {/*--navbar finish */}


<div className='bodycart'>
<p className="Review_your_order_p">Review your order</p>




<div className="checkout-continer"> {/*!--checkout-container start -->*/}
  <div className='forIterationProduct'> {/*div for iteration product start  */}
{cart.map((item)=>(
<div key={item._id} className="div_for_checkout_left ">{/*<!--div for checkout-left start -->*/}
             <p className="checkout-left-1-Delivery-date">Delivery date:{deliveryDate1String}</p> 
    <div className="checkout-left ">{/*!--checkout-left start -->*/}
             
         <div className="checkout-left-1">
             
               <div className="checkout-left-1-horizontal">
                     <div> <img className="checkout-left-1-horizontal-img" src={item.product.image} alt="pic" /> </div>
                     <div class="checkout-left-1-horizontal-div">
                        <p className="checkout-left-1-horizontal-name">{item.product.name}</p> 
                        <p className="checkout-left-1-horizontal-price">{item.product.price}</p>
                        <div className="checkout-left-1-horizontal-quantity">Quantity:{item.quantity}<button className="checkout-left-1-horizontal-button-update">Update</button>  <button  onClick={()=>removeCart(item.product._id)} className="checkout-left-1-horizontal-button-delete">Delete</button> </div> 
                    </div>
               </div>
         </div>

         <div className="checkout-left-2">
          <p className="checkout-left-2-horizontal-name">Choose a delivery option:</p>
          <div className="radio_button_horizontail">  
           
            <input  className="radioButton js-radio-buttons" type="radio"   ></input>
   <div><p className="checkout-left-2-horizontal-date">{deliveryDate1String}</p> <p className="checkout-left-2-horizontal-shipping">FREE Shipping</p> </div>
 
            <input  className="radioButton js-radio-buttons" type="radio"   ></input>
   <div><p className="checkout-left-2-horizontal-date"> 
{deliveryDate2String}</p> <p className="checkout-left-2-horizontal-shipping">4.99 -Shipping</p> </div>
 
            <input  className="radioButton js-radio-buttons" type="radio"   ></input>
   <div><p className="checkout-left-2-horizontal-date">
{deliveryDate3String}</p> <p className="checkout-left-2-horizontal-shipping">9.99 -Shipping</p> </div>
 
                
          </div>       
      
         </div>

   </div>{/*<!--checkout-left end -->*/}

            
  </div> 
    

))}
    

</div>{/*div for iteration product end  */}
   <div className="checkout-right"> {/*<!--checkout-right start -->*/}
      <p className="checkout-right-p">Order Summary</p>    
      <div className="checkout-right-horizontal">
            <div className="checkout-right-horizontal_1">
                  <p className="checkout-right-summary">items({cartQuantity}):</p>
                  <p className="checkout-right-summary">shipping&handling:</p>
                  <p className="checkout-right-summary">total before tax:</p>
                  <p className="checkout-right-summary">estimated tax(10%):</p>
                  <p className="ordertotal">Order total:</p>
                  
            </div>
            
            <div className="checkout-right-horizontal_2">
               <p class="checkout-right-horizontal_2_p">${cartMoney.totalCents}</p>
                  <p class="checkout-right-horizontal_2_p">$0</p>
                  <p class="checkout-right-horizontal_2_p">${cartMoney.totalCents}</p>
                  <p class="checkout-right-horizontal_2_p">${cartMoney.estimatedTax}</p>
                  <p class="ordertotal">${cartMoney.totalTax}</p>
            </div>
      </div>    
      
    <button  onClick={()=>place_order()}  className="place_your_order">place your order</button> 

         
   </div>{/*-checkout-right end */}


</div>{/*-checkout-continer end  */}





</div>{/*-body cart end  */}
<Footer/>
</>
)
}