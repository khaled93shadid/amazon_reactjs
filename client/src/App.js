import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DashboardLayoutSlots from './components/dash'
import Register from './components/register'
import Login from './components/login'
import Product from './components/product'
import Profile from './components/profile'
import MainProducts from './components/user/mainProducts'
import MainProductsNav from './components/user/navBar'
function App() {
  return (
    <Router>
       <Routes>
                 <Route path="/"  element={<Login/>}/> 
                 <Route path="/dash"  element={<DashboardLayoutSlots/>}/> 
                 <Route path="/register"  element={<Register/>}/> 
                 <Route path="/product"  element={<Product/>}/> 
                 <Route path="/productuser"  element={<MainProducts/>}/> 
                 <Route path="/productuserNav"  element={<MainProductsNav/>}/> 
                 
         
       </Routes>
      
    </Router>
  );
}

export default App;
