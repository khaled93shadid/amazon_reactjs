import '../../style/infoUser.css'
import React from 'react'
import { useState, useEffect } from 'react'
import MainProductsNav from "./navBar"
import axios from 'axios'
import Footer from "../footer"
import URL from '../URL'
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


export default function InfoUser() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [oldpassword, setoldpassword] = useState('')
  const [newpassword, setnewpassword] = useState('')
  const [profileData, setprofileData] = useState(null)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [address, setaddress] = useState('')

  useEffect(() => {


    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${URL}/users/getprofile`, { headers: { Authorization: token } })
        //console.log(res.data.phone)
        setprofileData(res.data || '')
        setaddress(res.data.address || '')
        setemail(res.data.email || '')
        setphone(res.data.phone || '')
        setname(res.data.fullname || '')
      }//try
      catch (error) {
        const message = error.response?.data?.message || error.message
        alert(message)
      }
    }

    fetchProfile();



  }, [])

  return (
    <>


      <MainProductsNav />
      <div className='info_container'>

        <div className='login_atag_div'> <a href='none' className='login_atag'>Login & Security</a> </div>



        {profileData ? (<div className='item_info_border'>
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

        </div>) : (<h1>loading profile...⏳ </h1>)}






      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">Update Information</Typography>


          <form onSubmit={async (e) => {
            e.preventDefault();
            try {
              const user1 = { fullname: name, email: email, address: address, phone: phone }

              const res = await axios.put(`${URL}/users/updateUser`, user1, { headers: { Authorization: localStorage.getItem('token'), "Content-Type": "application/json" } })



              setprofileData(prev => ({ ...prev, ...user1 }));//refresh profiledata
              alert("Data Updated Successfuly ✅")
              handleClose();

            }//try
            catch (error) {
              const message = error.response?.data?.message || error.message
              alert(message)
            }

          }}>

            <input className='info_input' type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
            <br />
            <input className='info_input' type="text" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
            <br />
            <input className='info_input' type="text" placeholder="phone" value={phone} onChange={(e) => setphone(e.target.value)} />
            <br />
            <input className='info_input' type="text" placeholder="Address" value={address} onChange={(e) => setaddress(e.target.value)} />
            <br />
            <button type="submit">Save</button>
            <br />
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


          <form onSubmit={async (e) => {
            e.preventDefault();
            try {
              const user1 = { oldpassword, newpassword }

              const res = await axios.post(`${URL}/users/changepassword`, { oldpassword, newpassword }, { headers: { Authorization: localStorage.getItem('token'), "Content-Type": "application/json" } })



              setprofileData(prev => ({ ...prev, ...user1 }));//refresh profiledata

              alert(" Password Changed SuccessfulLy ✅")
              handleClose1();

            }//try
            catch (error) {
              const message = error.response?.data?.message || error.message
              alert(message)
            }

          }}>

            <input className='info_input' type="text" placeholder="oldPassword" value={oldpassword} onChange={(e) => setoldpassword(e.target.value)} />
            <br />
            <input className='info_input' type="text" placeholder="newPassword" value={newpassword} onChange={(e) => setnewpassword(e.target.value)} />
            <br />
            <button type="submit">Save</button>
            <br />
          </form>

        </Box>
      </Modal>

      <Footer />
    </>
  )
}