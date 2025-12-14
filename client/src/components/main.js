import '../style/main.css'
import Footer from './footer.js'
import MainProductsNav from './user/navBar.js'
import images from './slider/images.js'
import images2 from './slider/images2.js'
import images3 from './slider/images3.js'
import images4 from './slider/images4.js'
import images5 from './slider/images5.js'
import CustomSlider from'./slider/custom.slider.js'
import CustomSlider2 from'./slider/custom.slider2.js'




export default function Main(){



return(
<nav className='body'>
<MainProductsNav/>





  <div className="App">  {/* slider start */}
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
     
    </div>{/* slider end */}


<div className='container_row1'>{/* container row1 start first 4 cards*/}

   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Shop for your home essentials</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg'/>
                <p className='container_row1_1_column1_p'>Cleaning Tools</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_1x._SY116_CB563137408_.jpg'/>
                <p className='container_row1_1_column1_p'>Home Storage</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_1x._SY116_CB563137408_.jpg'/>
                <p className='container_row1_1_column1_p'>Home Decor</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_1x._SY116_CB563137408_.jpg'/>
                <p className='container_row1_1_column1_p'>Bedding</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>Discover more in Home</p>
   </div>{/* 1card finsh*/}

   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Get your game on</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  >
                <img className='container_row1_1_column2_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg'/>
                

           </div>
          
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>Shop gaming</p>
   </div>{/* 1card finsh*/}
   

   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Top categories in Kitchen appliances</p>  
            <div>
              <img className='container_row1_1_column3_img' src='https://m.media-amazon.com/images/I/313wAT6Iy2L._SY160_.jpg'/>
                <p className='container_row1_1_column1_p'>Cooker</p>

            </div>
       </div>
       <div className='container_row1_3_column'>{/* 3 cards pictures*/}
        
                      <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://m.media-amazon.com/images/I/21W7-lndINL._SY75_.jpg'/>
                <p className='container_row1_1_column1_p'>Coffee</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://m.media-amazon.com/images/I/21B-NkA9p-L._SY75_.jpg'/>
                <p className='container_row1_1_column1_p'>Pots and...</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://m.media-amazon.com/images/I/217GQ1a2QzL._SY75_.jpg'/>
                <p className='container_row1_1_column1_p'>Kettles</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p1'>Explore all products in Kitchen</p>
   </div>{/* 1card finsh*/}


   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Refresh your space</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg'/>
                <p className='container_row1_1_column1_p'>Dining</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg'/>
                <p className='container_row1_1_column1_p'>Home</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg'/>
                <p className='container_row1_1_column1_p'>Kitchen</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg'/>
                <p className='container_row1_1_column1_p'>Health and Beauty</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>Discover more in Home</p>
   </div>{/* 1card finsh*/}
  

</div>{/* container row1 end first 4 cards*/}







{/* row2 start*/}
{/* row2 start*/}
{/* row2 start*/}
<div className='main_body'>

<div className='container_row2'>{/* container row2 start first 4 cards*/}

   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Shop Fashion for less</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg'/>
                <p className='container_row1_1_column1_p'>Jeans under $50</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg'/>
                <p className='container_row1_1_column1_p'>Tops under $25</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg'/>
                <p className='container_row1_1_column1_p'>Dresses under $30</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg'/>
                <p className='container_row1_1_column1_p'>Shoes under $50</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>See all deals</p>
   </div>{/* 1card finsh*/}

  

   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Save big on school essentials</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/BTS25/GenAIExperiment/Group_C/Fuji_QuadCard_Bag_BTS25_1x._SY116_CB789327598_.jpg'/>
                <p className='container_row1_1_column1_p'>Backpacks</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/BTS25/GenAIExperiment/Group_C/Fuji_QuadCard_Electronics_BTS25_1x._SY116_CB789327598_.jpg'/>
                <p className='container_row1_1_column1_p'>Electronics</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/BTS25/GenAIExperiment/Group_C/Fuji_QuadCard_Stationery_BTS25_1x._SY116_CB789327598_.jpg'/>
                <p className='container_row1_1_column1_p'>Stationery</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/BTS25/GenAIExperiment/Group_C/Fuji_QuadCard_Fashion_BTS25_1x._SY116_CB789327598_.jpg'/>
                <p className='container_row1_1_column1_p'>Fashion</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>See more</p>
   </div>{/* 1card finsh*/}

  

 <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Deals for every grade</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  >
                <img className='container_row1_1_column2_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/BTS25/GenAIExperiment/Group_C/Fuji_SingleImageCard_BTS25_1x._SY304_CB789324272_.jpg'/>
                

           </div>
          
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>See all deals</p>
   </div>{/* 1card finsh*/}
   


   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Fashion trends you like</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg'/>
                <p className='container_row1_1_column1_p'>Dresses</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg'/>
                <p className='container_row1_1_column1_p'>Knits</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg'/>
                <p className='container_row1_1_column1_p'>Jackets</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg'/>
                <p className='container_row1_1_column1_p'>Jewelry</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>Explore more</p>
   </div>{/* 1card finsh*/}
  

</div>{/* container row2 end second 4 cards*/}


<div className='relative_for_slider_row2'>{/* relativeSlider start */}
      <p className='relative_for_slider_p'>Popular products in Wireless internationally</p>
   <div className="App2">  {/* slider start */}
      <CustomSlider2>
        {images2.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider2>
     
   </div>{/* slider end */}

  
</div>{/* relativeSlider end */}

<div className='relative_for_slider_row2'>{/* relativeSlider start */}
      <p className='relative_for_slider_p'>Best Sellers in Sports & Outdoors</p>
 <div className="App2">  {/* slider start */}
      <CustomSlider2>
        {images3.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider2>
     
    </div>{/* slider end */}
   
</div>{/* relativeSlider end */}



<div className='container_row2'>{/* container row2 start first 4 cards*/}

   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Elevate your Electronics</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Headphones._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Headphones</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Tablets._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Tablets</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Gaming._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Gaming</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Speakers._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Speakers</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>Discover more</p>
   </div>{/* 1card finsh*/}

  

   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Level up your PC here</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Laptop._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Laptops</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_PC._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>PCs</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Hard_Drives._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Hard Drives</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Monitors._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Monitors</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>Discover more</p>
   </div>{/* 1card finsh*/}

  

 <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Finds for Home</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Kitchen._SY116_CB558654384_.jpg'/>
                <p className='container_row1_1_column1_p'>Kitchen</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Home_decor._SY116_CB558654384_.jpg'/>
                <p className='container_row1_1_column1_p'>Home Decor</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Dining._SY116_CB558654384_.jpg'/>
                <p className='container_row1_1_column1_p'>Dining</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Smart_home._SY116_CB558654384_.jpg'/>
                <p className='container_row1_1_column1_p'>Smart Home</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>Discover more</p>
   </div>{/* 1card finsh*/}



   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Gear up to get fit</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Clothing._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Clothing</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Trackers._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Trackers</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Equipment._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Equipment</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Deals_Fitness._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Deals</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>Explore more</p>
   </div>{/* 1card finsh*/}
  

</div>{/* container row2 end second 4 cards*/}


<div className='relative_for_slider_row2'>{/* relativeSlider start */}
      <p className='relative_for_slider_p'>International Top Sellers for you</p>
<div className="App">  {/* slider start */}
      <CustomSlider2>
        {images4.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider2>
     
    </div>{/* slider end */}
    
</div>{/* relativeSlider end */}

<div className='relative_for_slider_row2'>{/* relativeSlider start */}
       <p className='relative_for_slider_p'>Best Sellers in Clothing, Shoes & Jewelry</p>
 <div className="App">  {/* slider start */}
      <CustomSlider2>
        {images5.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider2>
     
    </div>{/* slider end */}
   
</div>{/* relativeSlider end */}


<div className='container_row2'>{/* container row2 start first 4 cards*/}

   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Deals on top categories</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Books._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Books</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Fashion._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Fashion</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Desktops._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>PC</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Beauty._SY116_CB549022351_.jpg'/>
                <p className='container_row1_1_column1_p'>Beauty</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>Discover more</p>
   </div>{/* 1card finsh*/}

  

   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Most-loved travel essentials</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Backpack_1x._SY116_CB566100767_.jpg'/>
                <p className='container_row1_1_column1_p'>Backpacks</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/TravelBag_1x._SY116_CB566100767_.jpg'/>
                <p className='container_row1_1_column1_p'>Suitcases</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Accessories_1x._SY116_CB566100767_.jpg'/>
                <p className='container_row1_1_column1_p'>Accessories</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Handbags_1x._SY116_CB566100767_.jpg'/>
                <p className='container_row1_1_column1_p'>Handbags</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>Discover more</p>
   </div>{/* 1card finsh*/}

  



   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>New home arrivals under $50</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg'/>
                <p className='container_row1_1_column1_p'>Kitchen & Dining</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg'/>
                <p className='container_row1_1_column1_p'>Home Improvement</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg'/>
                <p className='container_row1_1_column1_p'>Decor</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_318_HP_NewArrivals_QuadCard_D_04_1x._SY116_CB555960040_.jpg'/>
                <p className='container_row1_1_column1_p'>Bedding & Bath</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>Shop the latest from home</p>
   </div>{/* 1card finsh*/}
  
   <div className='container_row1_1'>{/*  first card start*/}
       
       <div>
            <p className='container_row1_1_p'>Score the top PCs & Accessories</p>
       </div>
       <div className='container_row1_1_column'>{/* 4 cards pictures*/}
        
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Desktops._SY116_CB558654384_.jpg'/>
                <p className='container_row1_1_column1_p'>Desktops</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_laptop._SY116_CB558654384_.jpg'/>
                <p className='container_row1_1_column1_p'>Laptops</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Hard_Drives._SY116_CB558654384_.jpg'/>
                <p className='container_row1_1_column1_p'>Hard Drives</p>

           </div>
           <div  className='container_row1_1_column1'>
                <img className='container_row1_1_column1_img' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Accessories._SY116_CB558654384_.jpg'/>
                <p className='container_row1_1_column1_p'>PC Accessories</p>

           </div>
           
           
     </div>{/* 4 cards pictures end*/}
       <p className='card_last_p'>See more</p>
   </div>{/* 1card finsh*/}
  

</div>{/* container row2 end second 4 cards*/}



</div> {/* main_body_div_end*/}

<Footer/>
</nav>
)
}