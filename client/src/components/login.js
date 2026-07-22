import { useState, useEffect } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { Box } from '@mui/material'
import '../style/login.css'
import URL from './URL'

export default function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [userdata, setuserdata] = useState({
        email: '',
        password: ''

    })

   

    return (
        <>
            <Box sx={{ maxWidth: 350, mx: 'auto', mt: 5 }}>
                <img className='img_logo' src='https://supersimple.dev/projects/amazon/images/amazon-logo.png' alt='' />
                <div className='borderDiv'>
                    <p className='signin_typography'> Sign in or create account </p>
                    <p className='typography2'> Enter mobile number or email </p>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        setLoading(true)
                        try {
                            const res = await axios.post(`${URL}/users/login`, userdata)
                            localStorage.setItem('token', res.data.token);
                            
                            if (res.data.user.role === 'user') { alert('you login successfully ✅'); navigate('/productuser'); }
                            else { alert('you login successfully ✅'); navigate('/dash'); }
                        }
                        catch (error) { 
                            const message =error.response?.data?.message || error.message
                            alert(message)
                          }

                        finally{setLoading(false)}

                    }}>

                        <input className='input' type='email' placeholder='Email' value={userdata.email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })} />
                        <br />
                        <input className='input' type='password' placeholder='Password' value={userdata.password} onChange={(e) => setuserdata({ ...userdata, password: e.target.value })} />
                        <br />

                        <button className='button_continue' type='submit'>{loading?'Loading...':'Continue'}</button>
                        <p className='condition'>By continuing, you agree to Amazon's<a href='none' className='condition_a'> Conditions of Use </a> and <a className='condition_a'> Privacy Notice.</a></p>
                        <p className='help'>Need help?</p>
                        <div className='small_div'>
                            <p className='small_div_p'>Buying for work?</p>
                            <a className='small_div_a' href='/register'>Create a free business account</a>

                        </div>
                    </form>


                </div>
            </Box>
            <div className='footer_login'></div>

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