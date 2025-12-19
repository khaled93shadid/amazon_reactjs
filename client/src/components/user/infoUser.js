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

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [oldpassword,setoldpassword]=useState('')   
  const [newpassword,setnewpassword]=useState('')   


const [profileData,setprofileData]=useState(null)

let data =[]
//const[fullname,fullsetname]=useState('')
//const[email,setemail]=useState('')
//const[phone,setphone]=useState('')
//const[address,setaddress]=useState('')

const[fullname1,fullsetname1]=useState('')
const[email1,setemail1]=useState('')
const[phone1,setphone1]=useState('')
const[address1,setaddress1]=useState('')

useEffect(()=>{

  
const fetchProfile=async()=>{
  try{
const token = localStorage.getItem('token');
const res=await axios.get("https://amazon-reactjs.onrender.com/api/users/getprofile",
   {headers: {Authorization:token}   })
console.log(res.data.phone)
setprofileData(res.data||'')
setaddress1(res.data.address||'')
setemail1(res.data.email||'')
setphone1(res.data.phone||'')
fullsetname1(res.data.fullname||'')
 }//try
catch(error){console.log(error)}
}  
   
fetchProfile();



},[])

return(
<>


<MainProductsNav />
<div className='info_container'>

   <div className='login_atag_div'> <a className='login_atag'>Login & Security</a> </div>

   

{profileData?(<div   className='item_info_border'>
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
                <p className='item_info_p2'>************** </p>
             </div>
            <div>
                <button onClick={handleOpen1} className='item_info_B'>Edit</button>   
            </div>
        </div>
       
    </div>):(<h1>loading profile</h1>)}



 


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
          const user1={fullname:fullname1,email:email1,address:address1,phone:phone1}
          
              const res = await axios.put("https://amazon-reactjs.onrender.com/api/users/updateUser", user1,{headers: {Authorization:localStorage.getItem('token'),"Content-Type":"application/json"} })
               
          
               
               setprofileData(prev => ({ ...prev, ...user1 }));//refresh profiledata
                alert("updated successfuly")
                handleClose();

         }//try
         catch(error){console.log(error); alert("Update failed. Please try again.");}

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




      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">Update password</Typography>
        
        
        <form onSubmit={async(e)=>{
         e.preventDefault();
         try{
          const user1={oldpassword,newpassword}
          
              const res = await axios.post("https://amazon-reactjs.onrender.com/api/users/changepassword", {oldpassword,newpassword},{headers: {Authorization:localStorage.getItem('token'),"Content-Type":"application/json"} })
               
          
               
               setprofileData(prev => ({ ...prev, ...user1 }));//refresh profiledata
               console.log(profileData)
                alert("change password successfuly")
                handleClose1();

         }//try
         catch(error){console.log(error); alert("change password failed. Please try again.");}

        }}>
          
          <input className='info_input' type="text" placeholder="oldPassword" value={oldpassword} onChange={(e)=>setoldpassword(e.target.value)} />
          <br/>
          <input className='info_input' type="text" placeholder="newPassword" value={newpassword} onChange={(e)=>setnewpassword(e.target.value)} />
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