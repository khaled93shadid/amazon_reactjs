import React from "react"
import { useNavigate } from "react-router-dom"
import '../../style/profileUser2.css'
import MainProductsNav from "./navBar"
import Footer from "../footer"


export default function ProfileUser(){

return(
<>
<MainProductsNav/>
<p className="p-txt">Your Account</p>
<div className="container_div">

  <div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png"/>
         </div>
         <div>
             <p className="item-continer-p1">Your Orders</p>
             <p className="item-continer-p2">Track, return, cancel an order, download invoice or buy again </p>
         </div>
         

     </div>

  </div>
  <a href="/InfoUser">
  <div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/security._CB659600413_.png"/>
         </div>
         <div>
             <p className="item-continer-p1"> Login & security</p>
             <p className="item-continer-p2">Edit login, name, and mobile number </p>
         </div>
         

     </div>

  </div>
</a>
   <div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime._CB433666831_.png"/>
         </div>
         <div>
             <p className="item-continer-p1">
                      
                       
                        Prime
                    
                     
                    </p>
             <p className="item-continer-p2">Manage your membership, view benefits, and payment settings</p>
         </div>
         

     </div>

  </div>

  <div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_address_book._CB613924977_.png"/>
         </div>
         <div>
             <p className="item-continer-p1">
                        Your Addresses</p>
             <p className="item-continer-p2"> Edit, remove or set default address</p>
         </div>
         

     </div>

  </div>
  <div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/contact-us/GiftCard_icon_01._CB660349069_.png"/>
         </div>
         <div>
             <p className="item-continer-p1">
                        Gift cards
                    </p>
             <p className="item-continer-p2">TView balance or redeem a card, and purchase a new Gift Card </p>
         </div>
         

     </div>

  </div>

   <div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/payment._CB660668735_.png"/>
         </div>
         <div>
             <p className="item-continer-p1">
                      
                       
                        Your Payments
                    
                     
                    </p>
             <p className="item-continer-p2">View all transactions, manage payment methods and settings</p>
         </div>
         

     </div>

  </div>

  <div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/account._CB660668669_.png"/>
         </div>
         <div>
             <p className="item-continer-p1">
                        Your Amazon Family
                    </p>
             <p className="item-continer-p2">Manage profiles, sharing, and permissions in one place </p>
         </div>
         

     </div>

  </div>
  <div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/digital_devices._CB660668735_.png"/>
         </div>
         <div>
             <p className="item-continer-p1">
                        Digital Services and Device Support
                    </p>
             <p className="item-continer-p2">Troubleshoot  device issues, manage or cancel digital subscriptions</p>
         </div>
         

     </div>

  </div>

<div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/10_archived_orders._CB654640573_.png"/>
         </div>
         <div>
             <p className="item-continer-p1">
                      
                       
                        Archived orders
                    
                     
                    </p>
             <p className="item-continer-p2">View and manage your archived orders</p>
         </div>
         

     </div>

  </div>

  <div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/11_lists._CB654640573_.png"/>
         </div>
         <div>
             <p className="item-continer-p1">
                     
                        Your Lists
                    
                    </p>
             <p className="item-continer-p2">View, modify, and share your lists, or create new ones</p>
         </div>
         

     </div>

  </div>
  <div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/contact_us._CB659962323_.png"/>
         </div>
         <div>
             <p className="item-continer-p1">
                      
                        Customer Service
                     
                    </p>
             <p className="item-continer-p2">Browse self service options, help articles or contact us</p>
         </div>
         

     </div>

  </div>


  
   
   <div className="item-continer">
     <div className="item-continer-horizontail">
         <div>
             <img className="item-continer-img" src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/9_messages._CB654640573_.jpg"/>
         </div>
         <div>
             <p className="item-continer-p1">
                      
                      
                        Your Messages
                    
                     
                    </p>
             <p className="item-continer-p2">View or respond to messages from Amazon, Sellers and Buyers </p>
         </div>
         

     </div>

  </div>
  



</div>

<div className="parent_div">

    <div className="child_div"> 
           <p className="child_div_p">Ordering and shopping preferences</p>
           <p> <a className="child_div_a">Your Addresses</a> </p>  
           <p> <a className="child_div_a">Your Payments</a> </p>  
           <p> <a className="child_div_a">Your Transactions</a> </p>  
           <p> <a className="child_div_a">Your Shopping preferences</a> </p>  
           <p> <a className="child_div_a">Your Content</a> </p>  
           <p> <a className="child_div_a">1-Click settings</a> </p>  
           <p> <a className="child_div_a">Amazon Key settings</a> </p>  
           <p> <a className="child_div_a">Whole Foods Market settings</a> </p>  
           <p> <a className="child_div_a">Language preferences</a> </p>  
           <p> <a className="child_div_a">Manage saved IDs</a> </p>  
           <p> <a className="child_div_a">Coupons</a> </p>  
           <p> <a className="child_div_a">Product Vouchers</a> </p>  
           <p> <a className="child_div_a">VAT registration number</a> </p>  
           <p> <a className="child_div_a">Recalls and Product Safety Alerts</a> </p>  

    </div>
    
    <div className="child_div"> 
           <p className="child_div_p">Digital content and devices</p>
           <p> <a className="child_div_a">All things Alexa</a> </p>  
           <p> <a className="child_div_a">Content Library</a> </p>  
           <p> <a className="child_div_a">Devices</a> </p>  
           <p> <a className="child_div_a">Manage Digital Delivery</a> </p>  
           <p> <a className="child_div_a">Your apps</a> </p>  
           <p> <a className="child_div_a">Prime Video settings</a> </p>  
           <p> <a className="child_div_a">Amazon Music settings</a> </p>  
           <p> <a className="child_div_a">Manage Amazon Drive and photos</a> </p>  
           <p> <a className="child_div_a">Twitch settings</a> </p>  
           <p> <a className="child_div_a">Audible settings</a> </p>  
           <p> <a className="child_div_a">Amazon Coins</a> </p>  
           <p> <a className="child_div_a">Digital gifts you've received</a> </p>  
           <p> <a className="child_div_a">Digital and device forum</a> </p>  
           <p> <a className="child_div_a">Comixology settings</a> </p>  
         
    </div>
    
    <div className="child_div"> 
           <p className="child_div_p">Memberships and subscriptions</p>
           <p> <a className="child_div_a">Kindle Unlimited</a> </p>  
           <p> <a className="child_div_a">Prime Video Channels</a> </p>  
           <p> <a className="child_div_a">Music Unlimited</a> </p>  
           <p> <a className="child_div_a">Subscribe & Save</a> </p>  
           <p> <a className="child_div_a">Amazon Kids+</a> </p>  
           <p> <a className="child_div_a">Audible membership</a> </p>  
           <p> <a className="child_div_a">Magazine subscriptions</a> </p>  
           <p> <a className="child_div_a">One Medical membership for Prime members</a> </p>  
           <p> <a className="child_div_a">Other subscriptions</a> </p>  
          
    </div>
    

</div>
<Footer/>
</>
) 
}