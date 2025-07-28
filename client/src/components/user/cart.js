import '../../style/cart.css'
import MainProductsNav from './navBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Footer from "../footer"



export default function Cart(){
const[cart,setcart]=useState([])
const token=localStorage.getItem('token')
useEffect(()=>{

axios.get('http://127.0.0.1:5000/api/users/getcart',{ headers:{'Authorization':`${token}`,'Content-Type':'application/json'} }

).then(res=> setcart(res.data.items)).catch(err=>alert(err))

},[])
console.log(cart)


const removeCart=(productId)=>{
try{ const res= axios.delete(`http://127.0.0.1:5000/api/users/removefromcart2/${productId}`,
      { headers:{'Authorization':`${token}`,'Content-Type':'application/json'} })

      /*
const updatedCart = res.data.cart;
console.log(updatedCart)
setcart(updatedCart)
*/
 setcart(prevCart => prevCart.filter(item => item.product._id !== productId));
window.dispatchEvent(new Event('cartUpdated'));
window.location.reload()
console.log('Item removed successfully', /*updatedCart*/ );
alert('Item removed successfully');
}//try
catch(error){return error}
}



return(
<>
<MainProductsNav/>
<div className='bodycart'>
<p className="Review_your_order_p">Review your order</p>




<div className="checkout-continer"> {/*!--checkout-container start -->*/}
  <div className='forIterationProduct'> {/*div for iteration product start  */}
{cart.map((item)=>(
<div key={item._id} className="div_for_checkout_left ">{/*<!--div for checkout-left start -->*/}
             <p className="checkout-left-1-Delivery-date">Delivery date:Friday, August 1</p> 
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
   <div><p className="checkout-left-2-horizontal-date">Friday, August 1</p> <p className="checkout-left-2-horizontal-shipping">FREE Shipping</p> </div>
 
            <input  className="radioButton js-radio-buttons" type="radio"   ></input>
   <div><p className="checkout-left-2-horizontal-date"> 
Monday, July 28</p> <p className="checkout-left-2-horizontal-shipping">4.99 -Shipping</p> </div>
 
            <input  className="radioButton js-radio-buttons" type="radio"   ></input>
   <div><p className="checkout-left-2-horizontal-date">
Saturday, July 26</p> <p className="checkout-left-2-horizontal-shipping">9.99 -Shipping</p> </div>
 
                    
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
                  <p className="checkout-right-summary">items(1):</p>
                  <p className="checkout-right-summary">shipping&handling:</p>
                  <p className="checkout-right-summary">total before tax:</p>
                  <p className="checkout-right-summary">estimated tax(10%):</p>
                  <p className="ordertotal">Order total:</p>
                  
            </div>
            
            <div className="checkout-right-horizontal_2">
             
            </div>
      </div>    
      
      <button className="place_your_order">place your order</button>    

         
   </div>{/*-checkout-right end */}


</div>{/*-checkout-continer end  */}





</div>{/*-body cart end  */}
<Footer/>
</>
)
}