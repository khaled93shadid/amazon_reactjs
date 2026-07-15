import '../style/login.css'
import { useState } from 'react'
import axios from 'axios'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import URL from './URL'

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userdata, setuserdata] = useState({
        username: '',
        email: '',
        password: '',
        fullname: '',
        address: '',
        phone: ''
    })

    return (
        <>


            <Box sx={{ maxWidth: 350, mx: 'auto', mt: 5 }} className="box_register" >
                <img alt='' className='img_logo' src='https://supersimple.dev/projects/amazon/images/amazon-logo.png' />
                <div className='borderDiv'>
                    <p className='signin_typography'>  create account </p>
                    <p className='typography2'> Enter your information </p>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        setLoading(true)
                        try {
                            const res = await axios.post(`${URL}/users/register`, userdata);
                            alert('you registered successfully ✅')
                            console.log(res.data.user)
                            navigate('/login')

                        }
                        catch (error) {
                            const message = error.response?.data?.message || error.message
                            alert(message)

                        }


                        finally{setLoading(false)}



                    }} >

                        <input className='input' type='text' placeholder='Username' value={userdata.username} onChange={(e) => setuserdata({ ...userdata, username: e.target.value })} />
                        <br />
                        <input className='input' type='email' placeholder='email' value={userdata.email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })} />
                        <br />
                        <input className='input' type='password' placeholder='password' value={userdata.password} onChange={(e) => setuserdata({ ...userdata, password: e.target.value })} />
                        <br />
                        <input className='input' type='text' placeholder='fullname' value={userdata.fullname} onChange={(e) => setuserdata({ ...userdata, fullname: e.target.value })} />
                        <br />
                        <input className='input' type='text' placeholder='address' value={userdata.address} onChange={(e) => setuserdata({ ...userdata, address: e.target.value })} />
                        <br />
                        <input className='input' type='text' placeholder='phone' value={userdata.phone} onChange={(e) => setuserdata({ ...userdata, phone: e.target.value })} />
                        <br />

                        <button className='button_continue' type='submit'>{loading?'Loading...':'continue'}</button>
                        <p className='condition'>By continuing, you agree to Amazon's<a href='none' className='condition_a'> Conditions of Use </a> and <a href='none'  className='condition_a'> Privacy Notice.</a></p>
                        <p className='help'>Need help?</p>

                    </form>


                </div>
            </Box>
            <div className=' footer_register'></div>

            <div className='footer_login1' >
                <a href='none' className='footer_login1_a'> Conditions of Use </a>
                <a href='none' className='footer_login1_a'> Privacy Notice </a>
                <a href='none' className='footer_login1_a'> Help </a>

            </div>
            <div className='footer_login2'>
                <p className='footer_login2_p'>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
            </div>


        </>
    )
}

