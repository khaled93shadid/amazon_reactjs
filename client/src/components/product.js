import react,{useState} from 'react';
import axios from 'axios';
import {Navigate,useNavigate} from 'react-router-dom';
import {TextField,Button,Typography,Box} from '@mui/material'
import { useEffect } from 'react';
import '../style/product.css'




import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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



export default function Product(){


const [productData,setproductData]=useState([])

 const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value );}


   const [name,setname]=useState('')
  const [price,setprice]=useState('')
  const [dis,setdis]=useState('')
  const [quantity,setquantity]=useState('')
  const [category,setcategory]=useState('')
  const [image,setimage]=useState('')
  const [stars,setstars]=useState('')
  const [apiCategory,setApiCategory]=useState([]);
 

  const [updatedname,setupdatedname]=useState('')
  const [updatedprice,setupdatedprice]=useState('')
  const [updateddis,setupdateddis]=useState('')
  const [updatedquantity,setupdatedquantity]=useState('')
  const [updatedcategory,setupdatedcategory]=useState('')
  const[updatedId,setUpdatedId]=useState('')
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

  const navigate=useNavigate();
  useEffect(()=>{
const token = localStorage.getItem('token')
  const fetchdata = async ()=>{

try
{
const res= await axios.get("http://127.0.0.1:5000/api/users/getAllProducts",  { headers:   {Authorization:`${token}`}   }  )
//console.log(res.data)
setproductData(res.data)


const categoryResponse = await axios.get("http://127.0.0.1:5000/api/users/getAllCategory", { headers:   {Authorization:`${token}`}   })
//console.log(categoryResponse.data)
setApiCategory(categoryResponse.data)


  }
 catch(error){console.log(error);navigate('/login')}


  } 
  
    
 
 fetchdata();

  },[])




return(
<>

<h1>products</h1>
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
          {productData.map((row) => (
            <TableRow key={row._id}>
              <TableCell ><img id='product-img' src={row.image} /></TableCell>
              <TableCell ><img id='product-stars' src={row.stars} /></TableCell>
              <TableCell ><p className='product-name'>{row.name}</p></TableCell>
              <TableCell >{row.price}</TableCell>
              <TableCell >{row.category}</TableCell>
              <TableCell ><button className="button1" onClick={async()=>{
 if(window.confirm("are you sure you want to delete this product")){

await axios.delete(`http://127.0.0.1:5000/api/users/deleteProduct/${row._id}`,{headers:{
'Content-Type':'application/json',
"Authorization":`${localStorage.getItem('token')}` }})
//window.location.reload();
setproductData(productData.filter(r=>r._id!==row._id))


 }//end if (delete)



              }} >Delete</button> 
              
              <button className='button1'  onClick={()=>{handleOpen();
                setUpdatedId(row._id)
              }}>Update</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
<h1>Add products</h1>
<form onSubmit={async(e)=>{
e.preventDefault();
const newProduct1={name,price,dis,image,stars,quantity,category}
/*
const newProduct = new FormData();
newProduct.append('name',name)
newProduct.append('price',price)
newProduct.append('dis',dis)
newProduct.append('image',image)
newProduct.append('quantity',quantity)
newProduct.append('category',category)
console.log(newProduct)
*/
try{ 
const token=localStorage.getItem('token')

const res = await axios.post("http://127.0.0.1:5000/api/users/createProduct",newProduct1,{ headers:{
//'Content-Type':'application/json',
"Authorization":`${token}`


}})
alert('product added successfully')
setproductData([...productData,newProduct1])
  setname('');
  setprice('');
  setdis('');
  setquantity('');
  setcategory('');
  setimage('')//null
  setstars('')//null

 
}
catch(error){return console.log(error)}


}}>
<input className='input1' type='text' placeholder='product name' value={name} onChange={(e)=>setname(e.target.value)} />
<br/>
<input className='input1'  type='text' placeholder='product price' value={price}  onChange={(e)=>setprice(e.target.value)} />
<br/>
<input className='input1' type='text' placeholder='product discription' value={dis}  onChange={(e)=>setdis(e.target.value)} />
<br/>
<input className='input1' type='text' placeholder='productimage' value={image}  onChange={(e)=>setimage(e.target.value)} />
<br/>
<input className='input1' type='text' placeholder='productStars' value={stars}  onChange={(e)=>setstars(e.target.value)} />
<br/>
<input className='input1' type='text' placeholder='product quantity' value={quantity}  onChange={(e)=>setquantity(e.target.value)} />
<br/>

<br/>

 <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="category"
          onChange={(e)=>setcategory(e.target.value)}
        >
          {apiCategory.map((categoryItem)=>(

         <MenuItem value={categoryItem._id}>{categoryItem.name}</MenuItem>
 
            
          ))}
                  
        </Select>
      </FormControl>
    </Box>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update product
          </Typography>
<form onSubmit={async(e)=>{
e.preventDefault();
try{ 
  
const token=localStorage.getItem('token')
const updatedproduct={updatedname,updatedprice,updateddis,updatedquantity,updatedcategory}
const res = await axios.put(`http://127.0.0.1:5000/api/users/updateproduct/${updatedId}`,{updatedproduct},{headers:{
  'Content-Type':'application/json',
  "Authorization":`${token}`
}})
alert('product updated successfully')
}
catch(error){return console.log(error)}
}}>
<input class='input11' type='text' placeholder='product name' value={updatedname} onChange={(e)=>setupdatedname(e.target.value)} />
<br/>
<input class='input11'  type='text' placeholder='product price' value={updatedprice}  onChange={(e)=>setupdatedprice(e.target.value)} />
<br/>
<input class='input11' type='text' placeholder='product discription' value={updateddis}  onChange={(e)=>setupdateddis(e.target.value)} />
<br/>
<input class='input11' type='text' placeholder='product quantity' value={updatedquantity}  onChange={(e)=>setupdatedquantity(e.target.value)} />
<br/>

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={updatedcategory}
          label="category"
          onChange={(e)=>setupdatedcategory(e.target.value)}
        >
          {apiCategory.map((categoryItem)=>(

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