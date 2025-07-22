import '../style/mainProduct.css'

export default function MainProductsNav(){

return(
<>
<div className="header-main"> 

  <div className="header-left"><a href="/amazon.html"><img class="header-logo" src="https://tse4.mm.bing.net/th/id/OIP.q147_8-0-KUzdNrCSjVNvQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" /></a> </div>

  <div className="header-middle">
    <input className="header-middle-search" type="text" placeholder="Search" />
    <button className="header-middle-search-button"><img className="header-middle-search-button-img" src="https://tse1.mm.bing.net/th/id/OIP.UfFXoK9ihlF0CPfVb8fcVAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" /></button>
  </div>

  <div className="header-right"> 
      <div className="header-right-div1">
        <p className="header-right-div1-p1">Returns</p> 
        <p className="header-right-div1-p2">& Orders</p> 
      </div>  
      <a href="/checkout.html"  >   
      <div className="header-right-div2">
            <div className="header-right-div2-img-p">
            <img className="header-right-div2-img" src="https://tse1.mm.bing.net/th/id/OIP.52aGkq2u9m8YOZQOyEXIwwHaIA?rs=1&pid=ImgDetMain&o=7&rm=3"/> 
                 <p className="cart-quantity cart-quantity-js">0</p>
           </div> 
          <p className="header-right-div2-p"></p> 
      </div>
       </a>


  </div>
  


</div>




</>
)


}