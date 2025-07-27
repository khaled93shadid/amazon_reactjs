import '../../style/mainProduct.css'
import logo from '../icons/logo.png'
import cart from '../icons/cart-icon.png'
import search from '../icons/search-icon.png'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import LocationOnIcon from '@mui/icons-material/LocationOn';

/* sidebar drawer */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
/* sidebar drawer end */





export default function MainProductsNav(){

/* sidebar drawer */
 const [open, setOpen] = React.useState(false);
const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
};
  const DrawerList = (
    <Box sx={{ width:360 }} role="presentation" onClick={toggleDrawer(false)}>
      
    <div className='sideBar_hello'>
    
         <AccountCircleIcon className='sideBar_hello_icon' sx={{ color: 'white'}}   />
       <a href='/ProfileUser' >    <p className='sideBar_hello_p'>Hello , Khaled Shadid</p></a>
       <div className='closeIcon' onClick={toggleDrawer(false)}> <CloseIcon sx={{ color: 'white'}}/> </div>
      
      </div> 
 

      <List>
        <p className='sideBar_header'>Digital Content & Devices</p>
        {['Prime Video', 'Amazon Music', 'Kindle E-readers & Books',
         'Amazon Appstore'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              
              <ListItemText primary={text} />
              
              <ListItemIcon >
                {index % 2 === 0 ? <ArrowForwardIosIcon className='arrow' /> : <ArrowForwardIosIcon className='arrow' />}
              </ListItemIcon>
             
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <p className='sideBar_header'>Shop by Department</p>
        {['Electronics', 'Computers', 'Smart Home',
         'Arts & Crafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
               <ListItemText primary={text} />
              
              <ListItemIcon >
                {index % 2 === 0 ? <ArrowForwardIosIcon className='arrow' /> : <ArrowForwardIosIcon className='arrow'/>}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
       <Divider />
       <List>
        {['Automotive', 'Baby', 'Beauty and Personal Care',
         "Women's Fashion",
         "Women's Fashion",
         "Girls' Fashion","Boys' Fashion","Health and Household",
        "Home and Kitchen","Industrial and Scientific","Luggage",
      "Movies & Television","Pet supplies","Software",
    "Sports and Outdoors","Tools & Home Improvement","Toys and Games",
  "Video Games"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
               <ListItemText primary={text} />
              
              <ListItemIcon >
                {index % 2 === 0 ? <ArrowForwardIosIcon  className='arrow'/> : <ArrowForwardIosIcon className='arrow' />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
       <Divider />
       <List>
        <p className='sideBar_header'>Programs & Features</p>
        {['Gift Cards', 'Shop By Interest', 'Amazon Live',
         'International Shopping','Amazon Second Chance'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
              
              <ListItemIcon >
                {index % 2 === 0 ? <ArrowForwardIosIcon className='arrow' /> : <ArrowForwardIosIcon className='arrow' />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
       <Divider />
       <List>
        <p className='sideBar_header'>Help & Settings</p>
        {['Your Account', 'English', 'Customer Service',
         'Sign Out'].map((text, index) => (
          <ListItem className='ListItemText1' key={text} disablePadding>
            <ListItemButton>
            <ListItemText primary={text} /> 
              
              <ListItemIcon >
                {index % 2 === 0 ? <ArrowForwardIosIcon  className='arrow'/> : <ArrowForwardIosIcon className='arrow' />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
/* sidebar drawer end */


return(
<>

{/* sidebar drawer  */}
 <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
{/* sidebar drawer end */}


{/* first navbar  */}
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
    <div className="header-right-login"> <a href='/'><img className='header-right-login_flag' src='https://th.bing.com/th/id/R.116a21ea40b3f9ab2bf3678c1132be83?rik=DzsEnLMC%2f5lIfw&pid=ImgRaw&r=0' />AR</a> </div>
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
{/* end first navbar */}


{/* second navbar  */}
<div className='navbar_container'>
   <div className='icon_div'>
    <DensityMediumIcon className='DensityMediumIcon' onClick={toggleDrawer(true)}   sx={{ color: 'white' }}  />
   <button className='all_p_button' onClick={toggleDrawer(true)}> <p className='all_p'>ALL</p> </button>
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
{/* end second navbar  */}

</>
)


}