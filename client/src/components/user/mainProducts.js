import '../../style/mainProduct.css'
import MainProductsNav from './navBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from "../footer"
import { Product } from './product'
import URL from '../URL'


export default function MainProducts() {
  const navigate = useNavigate();
  const [productData, setproductData] = useState([])
  //const [categoryData, setcategoryData] = useState([])
  const [addedToCart, setAddedToCart] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('token')
    const abortController = new AbortController();
    const fetchdata = async () => {

      try {
        const res = await axios.get(`${URL}/product/getAllProducts`, { headers: { Authorization: token } })
        setproductData(res.data)
      }
      catch (error) {
        const message = error.response?.data?.message || error.message
        alert(message)
      }
    }
    fetchdata();
  }, [])


  const handleAddedToCart = (productId) => {
    setAddedToCart(prev => ({ ...prev, [productId]: true }));

    setTimeout(() => setAddedToCart(prev => ({ ...prev, [productId]: false })), 3000);

  }

  const addToCart = async (productId, quantity) => {
    const token = localStorage.getItem('token')
    try {
      await axios.post(`${URL}/cart/addtocart`, { productId, quantity }, { headers: { 'Authorization': `${token}` } })
      window.dispatchEvent(new Event('cartUpdated'))
    }

    catch (error) {
      const message = error.response?.data?.message || error.message
      alert(message)
    }

  } //add to cart

  return (

    <nav className='pageProduct'>
      <MainProductsNav />

      {productData.length>0?<div className="all-products-container">
        {
        productData.map((product) => (

          <Product key={product._id} product={product} addToCart={addToCart} handleAddedToCart={handleAddedToCart} addedToCart={addedToCart} />






        )) 
        }

      </div> : <h1 style={{fontSize:'20px',textAlign:'center',color:'rgb(29, 39, 53)'}}>LOADING...⏳</h1>}
      



      <Footer />
    </nav>
  )

}