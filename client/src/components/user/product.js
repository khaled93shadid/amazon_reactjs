import { useState } from "react"




export function Product({product,addToCart,addedToCart,handleAddedToCart}){
const [quantity,setquantity]=useState(1)
return(
<>

<div key={product._id} className="product-container">
<div className="vertical-first-div">
  <img className="product-img" src={product.image}  alt=''/>
  <p className="product-name">{product.name}
</p>
</div> 
  <div className="horizontal_star-rating">   
     <img className="product-rating-pic" src={product.stars} alt=''/> 
     <div>  <p className="product-rating-num"></p> </div>
  </div>
  
  <div className="vertical-last-div">
    <p className="product-price">{product.price}</p>
   <select  value={quantity} onChange={(event)=>{
        const quantitySelected= Number(event.target.value)
        setquantity(quantitySelected)

   }}  className="horizontal_select">
        <option    value="1">1</option>
        <option value="2">2</option>
        <option  value="3">3</option>
        <option  value="4">4</option>
        <option  value="5">5</option>
        <option  value="6">6</option>
        <option  value="7">7</option>
        <option  value="8">8</option>
        <option  value="9">9</option>
        <option  value="10">10</option>
    </select> 
    <br/>
    <div className='aadedToCart_div'>
    {addedToCart[product._id] && (  <div className='added_to_cart_div'> <img className='added_to_cart_img' src="https://supersimple.dev/projects/amazon/images/icons/checkmark.png" alt=''/> 
    <p className='added_to_cart_p'>added to cart</p> </div>)}
  </div>  
    <button className="button-add-to-cart" onClick={()=>{addToCart(product._id,quantity);handleAddedToCart(product._id)} }>Add to Cart</button>
  </div>
  </div>         


</>
)
}