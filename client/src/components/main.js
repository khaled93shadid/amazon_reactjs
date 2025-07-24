import '../style/main.css'
import Footer from './footer.js'
import MainProductsNav from './user/navBar.js'
import images from './slider/images.js'
import CustomSlider from'./slider/custom.slider.js'


export default function Main(){

return(
<>
<MainProductsNav/>


  <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
     
    </div>


<Footer/>
</>
)
}