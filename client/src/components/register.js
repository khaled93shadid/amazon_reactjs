import '../style/login.css'
import react from 'react' ;
import {useState} from 'react'
import axios from 'axios'
import {TextField,Button,Typography,Box} from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom';


export default function Register (){
const navigate=useNavigate();      
const [userdata,setuserdata]= useState({
username:'',
email:'',
password:'',
fullname:'',
address:'',
phone:''    
})

return(
<>
 

<Box  sx={{ maxWidth:350, mx:'auto',mt:5 }} className="box_register">
    <img className='img_logo' src='https://supersimple.dev/projects/amazon/images/amazon-logo.png' />
    <div className='borderDiv'>
    <p className='signin_typography'>  create account </p>
     <p className='typography2'> Enter your information </p>
    <form onSubmit={async (e)=>{
e.preventDefault();
try{
const res = await axios.post("http://127.0.0.1:5000/api/users/register",userdata);
console.log("regestration sucsussful",res.data)
alert('you register sucssufuly')
navigate('/')

}
catch(error){console.log(error)}






      }} >
        
        <input className='input' type='text' placeholder='Username' value={userdata.username} onChange={(e)=>setuserdata({...userdata,username:e.target.value})} />  
            <br/>
            <input className='input' type='email' placeholder='email' value={userdata.email} onChange={(e)=>setuserdata({...userdata,email:e.target.value})} />  
            <br/>
            <input className='input' type='password' placeholder='password' value={userdata.password} onChange={(e)=>setuserdata({...userdata,password:e.target.value})} /> 
            <br/> 
            <input className='input' type='text' placeholder='fullname' value={userdata.fullname} onChange={(e)=>setuserdata({...userdata,fullname:e.target.value})} />  
            <br/>
            <input className='input' type='text' placeholder='address' value={userdata.address} onChange={(e)=>setuserdata({...userdata,address:e.target.value})} />  
            <br/>
            <input className='input' type='text' placeholder='phone' value={userdata.phone} onChange={(e)=>setuserdata({...userdata,phone:e.target.value})} />  
            <br/>
       
       <button className='button_continue' type='submit'>continue</button>
        <p className='condition'>By continuing, you agree to Amazon's<a className='condition_a'> Conditions of Use </a> and <a className='condition_a'> Privacy Notice.</a></p>
        <p className='help'>Need help?</p>
        
    </form>


</div>
</Box>
<div className=' footer_register'></div>

<div className='footer_login1' >
<a className='footer_login1_a'> Conditions of Use </a>
<a className='footer_login1_a'> Privacy Notice </a>
<a className='footer_login1_a'> Help </a>

</div>
<div className='footer_login2'>
    <p className='footer_login2_p'>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
</div>


</>
)   
}

