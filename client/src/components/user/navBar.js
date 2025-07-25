import '../../style/mainProduct.css'
import logo from '../icons/logo.png'
import cart from '../icons/cart-icon.png'
import search from '../icons/search-icon.png'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function MainProductsNav(){

return(
<>
<div className="header-main"> 

     <div className="header-left"><a href="/productuser"><img className="header-logo"  src={logo} /></a> 
     <div className='location'>
      <div className='marginLogo'>   <LocationOnIcon className='location_logo'  sx={{ color: 'white' }} /> </div>
         <div>
         <div> <a className='location-a1'>Deliver to</a> </div>
         <div> <a className='location-a2'>Jordan</a></div>
         </div>
     </div>
  

  </div>

  <div className="header-middle">
    <input className="header-middle-search" type="text" placeholder="Search" />
    <button className="header-middle-search-button"><img className="header-middle-search-button-img" src={search} /></button>
  </div>

  <div className="header-right"> 
    <div className="header-right-login"> <a href='/login'>login</a> </div>
      <div className="header-right-div1">
        <p className="header-right-div1-p1">Returns</p> 
        <p className="header-right-div1-p2">& Orders</p> 
      </div>  
      <a href="/checkout.html"  >   
      <div className="header-right-div2">
           <a href='/cart' > 
             <div className="header-right-div2-img-p">
                  <img className="header-right-div2-img" src={cart}/> 
                 <p className="cart-quantity cart-quantity-js">0</p>
            </div>
           </a> 
        <a href='/cart' >  <p className="header-right-div2-p">cart</p> </a>
      </div>
       </a>


  </div>
  


</div>



<div className='navbar_container'>
   <div className='icon_div'>
    <DensityMediumIcon   sx={{ color: 'white' }}  />
    <p className='all_p'>ALL</p>
   </div>

    <div className='rufus'>
          <p className='rufus_p'>Rufus</p>
    </div>
    <div className='nav_p_div_container'></div>
   <div className='nav_p_div'> <p className='nav_p'>Today's Deals</p> </div>
    <div className='nav_p_div'> <p className='nav_p'>Prime Video</p> </div>
    <div className='nav_p_div'> <p className='nav_p'>Buy Again</p> </div>
    <div className='nav_p_div'> <p className='nav_p'>Customer Service</p> </div>
   <div className='nav_p_div'> <p className='nav_p'>Registry</p> </div>
   <div className='nav_p_div'> <p className='nav_p'>Gift Cards</p> </div>
   <div className='nav_p_div'> <p className='nav_p'>sell</p> </div>
</div>


</>
)


}