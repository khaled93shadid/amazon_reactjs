import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import { AppProvider,  Navigation } from '@toolpad/core/AppProvider';
import {DashboardLayout,ThemeSwitcher, SidebarFooterProps,} from '@toolpad/core/DashboardLayout';
import { Account } from '@toolpad/core/Account';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import { useEffect ,useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RedeemIcon from '@mui/icons-material/Redeem';
import Profile from './profile';
import Product from './product';
import Category from './category';
import CategoryIcon from '@mui/icons-material/Category';
import MainProducts from './user/mainProducts'
import '../style/login.css'

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname,profileData }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}  >
        {pathname==="/profile"&&<Profile profileData={profileData}/> }
        {pathname==="/product"&&<Product />}
        {pathname==="/category"&& <Category/>}
        {pathname==="/productuser"&& <MainProducts/>}
        
        {pathname==="/dashboard"&&(<Typography>dash page</Typography> )}


      
    </Box>
  );
}

function ToolbarActionsSearch() {
   
  return (
    <Stack direction="row">
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: 'inline', md: 'none' },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
      />
      <ThemeSwitcher />
      <Account />
    </Stack>
  );
}

function SidebarFooter({ mini }) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {mini ? '© MUI' : `© ${new Date().getFullYear()} Made  by khaled shadid`}
    </Typography>
  );
}

function CustomAppTitle() {
  const navigate=useNavigate()
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <CloudCircleIcon fontSize="large" color="primary" />
     <Typography variant="h6"><a className='amazon_dash' href='/productuser'> amazon </a> </Typography> 
      
      <Tooltip title="Connected to production">
        <CheckCircleIcon color="success" fontSize="small" />
      </Tooltip>
    </Stack>
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutSlots(props) {
  
  const [profileData,setprofileData]=useState([])
  const[isAdmin,setisAdmin]=useState(false)
  const navigate=useNavigate();
  const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  ...(isAdmin ?[{segment: 'product',
    title: 'product',
    icon: <RedeemIcon />},
  {segment: 'category',
    title: 'category',
    icon: <CategoryIcon />}
  ]:[]),
  {
    segment: 'profile',
    title: 'profile',
    icon: <AccountCircleIcon />,
  },
];
  useEffect(()=>{
const token = localStorage.getItem('token')
if(token){
  async function fetchdata(){
    try{const res= await axios.get("http://127.0.0.1:5000/api/users/getprofile",  { headers:   {Authorization:`${token}`}   }  )
     
console.log("profile data:",res.data)
 setisAdmin(res.data.role==='admin')
 setprofileData(res.data)  }
 

catch(error){
  console.log(error);
  navigate('/login');
  return
}
  }
  fetchdata()
}

else{navigate('/login')}

  },[])

  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // Remove this provider when copying and pasting into your project.
    <DemoProvider window={demoWindow}>
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        {/* preview-start */}
        <DashboardLayout
          slots={{
            appTitle: CustomAppTitle,
            toolbarActions: ToolbarActionsSearch,
            sidebarFooter: SidebarFooter,
          }}
        >
          <p> welcome {profileData.role? profileData.role:"notfound"}</p>
          <DemoPageContent profileData={profileData} pathname={router.pathname} />
        </DashboardLayout>
        {/* preview-end */}
      </AppProvider>
    </DemoProvider>
  );
}