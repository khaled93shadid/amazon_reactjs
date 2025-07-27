import '../style/order.css'
import cart from './icons/cart-icon.png' 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from './footer.js'
import '../style/footer.css'
import logo from './icons/logo.png'

export default function Order(){

return(
<>
{/*navBar start */}
<div className='order_nav'>
    <div className='image_div_order'> <img className='order_logo' src='data:image/png;base64,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'/> </div>
    <div><p className='order_nav_bottom'> Secure checkout <KeyboardArrowDownIcon sx={{ color: 'white' }}/> </p> </div>
    <div className='right_header_order'>
         <div className="header-right-div2-img-p">
                          <img className="header-right-div2-img" src={cart}/> 
                         
                         
                    </div>
                     <a href='/cart' >  <p className="header-right-div2-p1">cart</p> </a>
    </div>

</div>
{/*navBar End */}

<div className='footer_div_1' ><a> <p className='footer_a1'>Back to top </p> </a> </div>
<div className='footer_div_3'>
   
    <div><img className='footer_div_3_logo' src={logo} /> </div>
    <div className='footer_div_3_2'>
        <p className='footer_div_3_p'>English</p>
        <p className='footer_div_3_p'>$ USD-U.S.dOLLAR</p>
        <p className='footer_div_3_p'>United States</p>
    </div>

</div>
<div className='copyRight'> 
  <br/>
  <p className='copy1'><span className='span_copy'> Conditions of Use </span> <span className='span_copy'> Privacy Notice</span> <span className='span_copy'>Consumer Health Data Privacy Disclosure</span> <span className='span_copy'>Your Ads Privacy Choices </span> </p>
<p className='copy2'>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
</div>


</>
)
}