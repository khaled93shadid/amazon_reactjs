import '../../style/mainProduct.css'
import logo from '../icons/logo.png'
import cart from '../icons/cart-icon.png'
import search from '../icons/search-icon.png'
export default function MainProductsNav(){

return(
<>
<div className="header-main"> 

  <div className="header-left"><a href="/productuser"><img className="header-logo"  src={logo} /></a> </div>

  <div className="header-middle">
    <input className="header-middle-search" type="text" placeholder="Search" />
    <button className="header-middle-search-button"><img className="header-middle-search-button-img" src={search} /></button>
  </div>

  <div className="header-right"> 
    <div className="header-right-login"> <a href='/'>login</a> </div>
      <div className="header-right-div1">
        <p className="header-right-div1-p1">Returns</p> 
        <p className="header-right-div1-p2">& Orders</p> 
      </div>  
      <a href="/checkout.html"  >   
      <div className="header-right-div2">
            <div className="header-right-div2-img-p">
            <img className="header-right-div2-img" src={cart}/> 
                 <p className="cart-quantity cart-quantity-js">0</p>
           </div> 
          <p className="header-right-div2-p">cart</p> 
      </div>
       </a>


  </div>
  


</div>



</>
)


}