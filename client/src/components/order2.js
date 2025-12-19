import '../style/order2.css'
import Footer from './footer.js'
import MainProductsNav from './user/navBar.js'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' 


export default function Order2(){
const [orders,setOrders]=useState([])
const [buyAgain,setBuyAgain]=useState({})

const handleBuyAgain=(productId)=>{
  setBuyAgain(prev =>({...prev,[productId]:true}) )
   setTimeout(() =>setBuyAgain(prev =>({...prev,[productId]:false}) ), 2000);
   
}

useEffect(()=>{
   const token = localStorage.getItem('token') 
   const fetchOrders=async()=>{
       
        await axios.get("http://127.0.0.1:5000/api/users/getAllOrders",{headers:{'Authorization':`${token}`}}
        ).then(res=>setOrders(res.data)).catch(err=>console.log(err))

   }; //fetch function  end 
   fetchOrders(); 
},[])//useEffect end

useEffect(()=>{console.log("orders",orders) },[orders])

return(
<>
<MainProductsNav />


<div className='order2_body'>{/*order2_body start */}
    <p className='order2_p1'>Your Orders</p>
     {orders.map((order)=>(
<div key={order._id} className='order2_container'>{/*order2_container start */}
            <div className='order2_container_top'>
                 <div> 
                    <p className='order2_container_top1'>Order Placed:</p>
                    <p className='order2_container_top2'>July 31</p>
                 </div>  
                 <div>
                    <p className='order2_container_top1'>Total:</p>
                    <p className='order2_container_top2'>{Math.round(order.total)}$</p>
                 </div>
              <div>
                    <p className='order2_container_top1'>Order ID:</p>
                    <p className='order2_container_top2'>{order._id}</p>  
              </div>
              
            </div> {/*order2_container_top end */}
               {order.items.map((item)=>(

                  <div key={item._id} className='order2_container_bottom'>
                     
                  <div className='order2_container_bottom_l'>
                      <div>
                          <img className='order2_container_bottom_l_img' src={item.product.image} />
                      </div>
                     
                      <div>
                         <p className='order2_container_bottom_l_p1'>{item.product.name}</p>                     
                         <p className='order2_container_bottom_l_p2'>Arriving on: August 11</p>                     
                         <p className='order2_container_bottom_l_p2'>Quantity: {item.quantity}</p> 
                         <button onClick={()=>handleBuyAgain(item.product._id)} className='order2_b1'><div className='order2_flex'><img className='order2_b1_img' src='	https://supersimple.dev/projects/amazon/images/icons/buy-again.png'/>  <span className='order2_span1'> {buyAgain[item.product._id]?'Added':'Buy it again'}</span></div>  </button>                    
                      </div> 

                  </div>
                  <div className='order2_container_bottom_R'>
                    <button className='track_B'>Track package</button>
                  </div>

            </div> 

               ))}
           
               
     </div> 
     

     ))}
      


</div>{/*order2_body end */}



<Footer/>
</>
)
}