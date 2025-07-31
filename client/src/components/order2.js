import '../style/order2.css'
import Footer from './footer.js'
import MainProductsNav from './user/navBar.js'

export default function Order2(){

  
return(
<>
<MainProductsNav />


<div className='order2_body'>{/*order2_body start */}
    <p className='order2_p1'>Your Orders</p>
     
     <div className='order2_container'>{/*order2_container start */}
            <div className='order2_container_top'>
                 <div> 
                    <p className='order2_container_top1'>Order Placed:</p>
                    <p className='order2_container_top2'>July 31</p>
                 </div>  
                 <div>
                    <p className='order2_container_top1'>Total:</p>
                    <p className='order2_container_top2'>$46.09</p>
                 </div>
              <div>
                    <p className='order2_container_top1'>Order ID:</p>
                    <p className='order2_container_top2'>ce3bcda5-7a7a-9231-7266-4ce6e2c76444</p>  
              </div>
              
            </div> {/*order2_container_top end */}
               
            <div className='order2_container_bottom'>
                  <div className='order2_container_bottom_l'>
                      <div>
                          <img className='order2_container_bottom_l_img' src='https://supersimple.dev/projects/amazon/images/products/intermediate-composite-basketball.jpg' />
                      </div>

                      <div>
                         <p className='order2_container_bottom_l_p1'>Intermediate Size Basketball</p>                     
                         <p className='order2_container_bottom_l_p2'>Arriving on: August 11</p>                     
                         <p className='order2_container_bottom_l_p2'>Quantity: 2</p> 
                         <button className='order2_b1'><div className='order2_flex'><img className='order2_b1_img' src='	https://supersimple.dev/projects/amazon/images/icons/buy-again.png'/>  <span className='order2_span1'> Buy it again</span></div>  </button>                    
                      </div> 

                  </div>
                  <div className='order2_container_bottom_R'>
                    <button className='track_B'>Track package</button>
                  </div>

            </div> {/*order2_container_bottom end */}
               
     </div>{/*order2_container end */}
      


</div>{/*order2_body end */}



<Footer/>
</>
)
}