import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {Button} from "@mui/material"
import axios from 'axios'
import * as React from 'react';
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







export default function Profile(props){
const {profileData}= props;
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const [oldpassword,setoldpassword]=useState("")
const [newpassword,setnewpassword]=useState("")
return(
<>

<img src={profileData.image|| "data:image/jpeg;base64,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"} />
<h1>UserName:{profileData.fullname}</h1>
<h1>Email:{profileData.email}</h1>
<h1>Phone:{profileData.phone}</h1>
<h1>Address:{profileData.address}</h1>
<Button onClick={handleOpen}>Change Password</Button>

<div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">change password</Typography>
        
        
        <form onSubmit={async(e)=>{
         e.preventDefault();
         try{
          

            //async function fetch(){
              const res = await axios.post("https://amazon-reactjs.onrender.com/api/users/changepassword",{oldpassword,newpassword},
              {headers: {Authorization:localStorage.getItem('token')}   }  
            )
               
             console.log(oldpassword)
             console.log(newpassword)
              console.log(res.data)
            
           //}
             //fetch()
         
           
         }
         catch(error){console.log(`password not changed${error}`)}

        }}>
          
          <input type="text" placeholder="oldpassword" value={oldpassword} onChange={(e)=>setoldpassword(e.target.value)} />
          <br/>
          <input type="text" placeholder="newpassword" value={newpassword} onChange={(e)=>setnewpassword(e.target.value)} />
          <br/>
          <Button type="submit">Save</Button>
          <br/>
          </form>  
          
      </Box>
      </Modal>
    </div>


</>
)










}