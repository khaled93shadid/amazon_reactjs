import '../../style/infoUser.css'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import MainProductsNav from "./navBar"
import axios from 'axios'
import Footer from "../footer"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function InfoUser(){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const [profileData,setprofileData]=useState([])
let data =[]
const[fullname,fullsetname]=useState(data.fullname||'')
const[email,setemail]=useState(data.email||'')
const[phone,setphone]=useState(data.phone||'')
const[address,setaddress]=useState(data.address||'')

const[fullname1,fullsetname1]=useState('')
const[email1,setemail1]=useState('')
const[phone1,setphone1]=useState('')
const[address1,setaddress1]=useState('')

useEffect(()=>{
try{
const token = localStorage.getItem('token');  
const fetch=async()=>{
const res=await axios.get("http://127.0.0.1:5000/api/users/getprofile",
   {headers: {Authorization:localStorage.getItem('token')}   })
//console.log(res.data)
setprofileData(res.data)
data=res.data
 console.log("profileData:",data) 
return
 

}  
   
fetch();

}
catch(error){console.log(error)}

},[])

return(
<>


<MainProductsNav />
<div className='info_container'>

   <div className='login_atag_div'> <a className='login_atag'>Login & Security</a> </div>

   

 <div  className='item_info_border'>
        <div className='item_info'>
             <div>
                <p className='item_info_p1'>Name</p>
                <p className='item_info_p2'>{profileData.fullname}</p>
             </div>
            <div>
                <button onClick={handleOpen} className='item_info_B'>Edit</button>   
            </div>
        </div>
        
        <div className='item_info'>
             <div>
                <p className='item_info_p1'>Email</p>
                <p className='item_info_p2'>{profileData.email}</p>
             </div>
            <div>
        <button onClick={handleOpen} className='item_info_B'>Edit</button>   
            </div>
        </div>
        <div className='item_info'>
             <div>
                <p className='item_info_p1'>Role</p>
                <p className='item_info_p2'>{profileData.role} </p>
             </div>
            <div>
               
            </div>
        </div>
        <div className='item_info'>
             <div>
                <p className='item_info_p1'>Phone</p>
                <p className='item_info_p2'>{profileData.phone} </p>
             </div>
            <div>
                <button onClick={handleOpen} className='item_info_B'>Edit</button>   
            </div>
        </div>
        <div className='item_info'>
             <div>
                <p className='item_info_p1'>Address</p>
                <p className='item_info_p2'>{profileData.address} </p>
             </div>
            <div>
                <button onClick={handleOpen} className='item_info_B'>Edit</button>   
            </div>
        </div>
        <div className='item_info'>
             <div>
                <p className='item_info_p1'>password</p>
                <p className='item_info_p2'>{profileData.password} </p>
             </div>
            <div>
                <button onClick={handleOpen} className='item_info_B'>Edit</button>   
            </div>
        </div>
       
    </div>



</div>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">Update Information</Typography>
        
        
        <form onSubmit={async(e)=>{
         e.preventDefault();
         try{
          const user1={fullname1,email1,address1,phone1}
            try{
              const res = await axios.put("http://127.0.0.1:5000/api/users/updateUser", {user1},{headers: {Authorization:localStorage.getItem('token'),"Content-Type":"application/json"} })
               
          
               console.log(res.data)
                alert("updated successfuly")
                handleClose();

         
            }
         
            catch(error){console.log(error)}
          
         
           
         }
         catch(error){console.log(console.log(error))}

        }}>
          
          <input className='info_input' type="text" placeholder="Name" value={fullname1} onChange={(e)=>fullsetname1(e.target.value)} />
          <br/>
          <input className='info_input' type="text" placeholder="Email" value={email1} onChange={(e)=>setemail1(e.target.value)} />
          <br/>
          <input className='info_input' type="text" placeholder="phone" value={phone1} onChange={(e)=>setphone1(e.target.value)} />
          <br/>
          <input className='info_input' type="text" placeholder="Address" value={address1} onChange={(e)=>setaddress1(e.target.value)} />
          <br/>
          <button type="submit">Save</button>
          <br/>
          </form>  
          
      </Box>
      </Modal>

      <Footer />
</>
)
}