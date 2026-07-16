import { useState } from 'react';
import axios from 'axios';
import { Typography, Box } from '@mui/material'
import { useEffect } from 'react';
import '../style/product.css'
import URL from './URL';
import rate_0 from '../ratings/rating-0.png'
import rate_05 from '../ratings/rating-05.png'
import rate_10 from '../ratings/rating-10.png'
import rate_15 from '../ratings/rating-15.png'
import rate_20 from '../ratings/rating-20.png'
import rate_25 from '../ratings/rating-25.png'
import rate_30 from '../ratings/rating-30.png'
import rate_35 from '../ratings/rating-35.png'
import rate_40 from '../ratings/rating-40.png'
import rate_45 from '../ratings/rating-45.png'
import rate_50 from '../ratings/rating-50.png'

import img_1 from'./images/athletic-cotton-socks-6-pairs.jpg'



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


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



export default function Product() {


  const [productData, setproductData] = useState([])



  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [dis, setdis] = useState('')
  const [quantity, setquantity] = useState('')
  const [category, setcategory] = useState('')
  const [image, setimage] = useState('')
  const [stars, setstars] = useState('')
  const [apiCategory, setApiCategory] = useState([]);


  const [updatedname, setupdatedname] = useState('')
  const [updatedprice, setupdatedprice] = useState('')
  const [updateddis, setupdateddis] = useState('')
  const [updatedquantity, setupdatedquantity] = useState('')
  const [updatedcategory, setupdatedcategory] = useState('')
  const [id, setId] = useState({})
  const [updatedstars, setupdatedstars] = useState('')
  const [updatedimage, setupdatedimage] = useState('')

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  useEffect(() => {
    const token = localStorage.getItem('token')
    const fetchdata = async () => {

      try {
        const res = await axios.get(`${URL}/product/getAllProducts`, { headers: { Authorization: token } })
        setproductData(Array.isArray(res.data) ? res.data : [])

        const res2 = await axios.get(`${URL}/categories/getAllCategory`, { headers: { Authorization: token } })
        setApiCategory(Array.isArray(res2.data) ? res2.data : [])
      }

      catch (error) {
        const message = error.response?.data?.message || error.message
        alert(message)
      }

    }

    fetchdata();


  }, [])

  useEffect(() => {

    console.log(productData)

  }, [productData])
  useEffect(() => {

    console.log(apiCategory)

  }, [apiCategory])



  return (
    <>

      <h1>Products</h1>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">

        <TableHead>
          <TableRow>

            <TableCell >image</TableCell>
            <TableCell >stars</TableCell>
            <TableCell >name</TableCell>
            <TableCell >price</TableCell>

            <TableCell >category</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(productData ? productData : []).map((row) => (
            
            <TableRow key={row._id}>
              <TableCell ><img id='product-img' src={row.image} alt='' /></TableCell>
              <TableCell ><img id='product-stars' src={row.stars} alt='' /></TableCell>
              <TableCell ><p className='product-name'>{row.name}</p></TableCell>
              <TableCell >{row.price}</TableCell>
              <TableCell >{row.category}</TableCell>

              <TableCell ><button className="button1" onClick={async () => {
                if (window.confirm("are you sure you want to delete this product")) {
                  const token = localStorage.getItem('token')
                  await axios.delete(`${URL}/product/deleteProduct/${row._id}`, { headers: { "Authorization": `${token}` } })
                  setproductData(productData.filter(r => r._id !== row._id))
                  //window.location.reload()    
                }//end if (delete)
              }} >Delete</button>

                <button className='button1' onClick={() => { handleOpen(); setId(row._id) }}>Update</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h1>Add product</h1>
      <form onSubmit={async (e) => {
        e.preventDefault();
        const newProduct1 = { name, price, dis, image, stars, quantity, category }
        const token = localStorage.getItem('token')
        try {
          await axios.post(`${URL}/product/createProduct`, newProduct1, { headers: { "Authorization": `${token}` } })
          alert('product added successfully ✅')
          setproductData([...productData, newProduct1])
          setname(''); setprice(''); setdis(''); setquantity(''); setcategory(''); setimage(''); setstars('')
        }
        catch (error) {
          const message = error.response?.data?.message || error.message
          alert(message)
        }
      }}>
        <input className='input1' type='text' placeholder='product name' value={name} onChange={(e) => setname(e.target.value)} />
        <br />
        <input className='input1' type='text' placeholder='product price' value={price} onChange={(e) => setprice(e.target.value)} />
        <br />
        <input className='input1' type='text' placeholder='product discription' value={dis} onChange={(e) => setdis(e.target.value)} />
        <br />
        <input className='input1' type='text' placeholder='productimage' value={image} onChange={(e) => setimage(e.target.value)} />
        <br />
        <input className='input1' type='text' placeholder='productStars' value={stars} onChange={(e) => setstars(e.target.value)} />
        <br />
        <input className='input1' type='text' placeholder='product quantity' value={quantity} onChange={(e) => setquantity(e.target.value)} />
        <br />

        <br />

        {/* <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="category"
              onChange={(e) => setcategory(e.target.value)}
            >
              {(apiCategory ? apiCategory : []).map((categoryItem) => (

                <MenuItem value={categoryItem._id}>{categoryItem.name}</MenuItem>


              ))}

            </Select>
          </FormControl>
        </Box> */}
        <button type='submit' className='b1'>Add</button>
      </form>




      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2"> Update product</Typography>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const token = localStorage.getItem('token')
              const updatedproduct = { name: updatedname, price: updatedprice, dis: updateddis, image: updatedimage,stars:setupdatedstars ,quantity: updatedquantity, category: updatedcategory }
              try {

                const response = await axios.put(`${URL}/product/updateproduct/${id}`, updatedproduct, { headers: { Authorization: token } })
                setproductData(prevData => prevData.map(item => item._id === id ? response.data.product1 : item))
                alert('product updated successfully')
                handleClose();
              }//try
              catch (error) {
                const message = error.response?.data?.message || error.message
                alert(message)
              }
            }}

            >

              <input className='input11' type='text' placeholder='product name' value={updatedname} onChange={(e) => setupdatedname(e.target.value)} />
              <br />
              <input className='input11' type='text' placeholder='product price' value={updatedprice} onChange={(e) => setupdatedprice(e.target.value)} />
              <br />
              <input className='input11' type='text' placeholder='product discription' value={updateddis} onChange={(e) => setupdateddis(e.target.value)} />
              <br />
              <input className='input11' type='text' placeholder='product image' value={updatedimage} onChange={(e) => setupdatedimage(e.target.value)} />

              <input className='input11' type='text' placeholder='product stars' value={updatedstars} onChange={(e) => setupdatedstars(e.target.value)} />
              <br />
              <input className='input11' type='text' placeholder='product quantity' value={updatedquantity} onChange={(e) => setupdatedquantity(e.target.value)} />
              <br />

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={updatedcategory}
                    label="category"
                    onChange={(e) => setupdatedcategory(e.target.value)}
                  >
                    {(apiCategory ? apiCategory : []).map((categoryItem) => (

                      <MenuItem value={categoryItem._id}>{categoryItem.name}</MenuItem>


                    ))}

                  </Select>
                </FormControl>
              </Box>
              <button type='submit' className='b1'>Save</button>
            </form>


          </Box>
        </Modal>
      </div>

    </>
  )
}