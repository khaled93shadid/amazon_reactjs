import '../style/returns_order.css'
import SearchIcon from '@mui/icons-material/Search';
import MainProductsNav from './user/navBar'
import Footer from "./footer"


export default function Returns_order(){

return(
<>
<MainProductsNav />
<div className='return_order_container'>{/*return_order_container start */}


    <div className='return_order_horizontal'>{/*return_order_horizontal start*/ }
      <div> <p  className='return_order_p1'>Your Orders</p> </div>
      <div className='return_order_horizontal2'> 
       <div className='searchIcon_div'> <SearchIcon className='SearchIcon' /> </div> 
        <input className='return_order_search' type='text' placeholder='search all orders' /> 
        <button className='return_order_b1'>search orders</button>
      </div>
    </div>{/*return_order_horizontal end */ }

     <div className='return_order_horizontal3'>
       <button className='return_order_horizontal3_b'>Orders</button>
       <button className='return_order_horizontal3_b'> Buy Again</button>
       <button className='return_order_horizontal3_b'> Not Yet Shipped</button>
       <button className='return_order_horizontal3_b'> Digital Orders</button>
       <button className='return_order_horizontal3_b'> Amazon Pay</button>
       <button className='return_order_horizontal3_b'> Cancelled Orders</button>
     </div>
     <div className='return_order_body'>
         <div className='return_order_body_hor'>
                    <p className='return_order_body_p'>0 orders<span className='return_order_body_span'> placed in</span> </p>
                    <select className='return_order_body_select'>
                       <option>last 30 days</option>
                       <option>past 3 months</option>
                       <option>2025</option>
                       <option>Archived Orders</option>
                    </select>
         </div>
         <div className='return_order_body_div_p'>
                <p className='return_order_body_p2'> Looks like you haven't placed an order in the last 30 days.<span  className='return_order_body_span2'> View orders in past 3 months</span>  </p>
         </div>
    </div> 

</div>{/*return_order_container end */}

<div className='return_order_last'>
     <div className='return_order_last1'> <p className='return_order_last1_p'>After viewing product detail pages, look here to find an easy way to navigate back to pages you are interested in</p> </div>
  <div className='return_order_last2'>  <p className='return_order_last2_p'>›View or edit your browsing history</p> </div>
</div>

<Footer />
</>
)
}