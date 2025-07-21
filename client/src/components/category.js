import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {TextField,Button,Typography,Box} from '@mui/material'


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

export default function Category(){
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [categoryData,setcategoryData]=useState([]);
  const [name,setname]=useState('');
  const [updatedname,setupdatedname]=useState('');
  const [updatedId,setupdatedId]=useState('');
  const navigate=useNavigate();

  useEffect(()=>{
const token = localStorage.getItem('token')
if(!token){return navigate('/login')}
  async function fetchdata(){
    try{
      const res= await axios.get("http://127.0.0.1:5000/api/users/getAllCategory",  { headers:   {Authorization:`${token}`} });
      
      setcategoryData(res.data); 
       }//try
    catch(error){
      console.log(error);
      navigate('/login');
      return;
      }//catch
  }//function end
   fetchdata()



  })



return(
<>

<h1>category</h1>
<Table sx={{ minWidth: 650 }} aria-label="caption table">
        
        <TableHead>
          <TableRow>
            
            <TableCell >ID</TableCell>
            <TableCell >category name</TableCell>
            <TableCell >Action</TableCell>
           
          </TableRow>
          </TableHead>
          <TableBody>
          {(categoryData).map((category) => (
            <TableRow key={category._id}>
           <TableCell >{category._id}</TableCell>
           <TableCell >{category.name}</TableCell>
           <TableCell >
              <button onClick={async()=>{
                              if (window.confirm('are you sure you want to delete this category'))
                                {//if
                                 const res = await axios.delete(`http://127.0.0.1:5000/api/users/deleteCategory/${category._id}`,
                                 {headers:{"Content-Type":"application/json","Authorization":`${localStorage.getItem('token')}` }})

                                      setcategoryData(categoryData.filter(r=>r._id!==category._id))
                                }//end if
              }}>Delete</button>


              <button onClick={ ()=>{handleOpen();setupdatedId(category._id)}  }>Update</button>
           </TableCell>
          
           </TableRow>
          ))}
        </TableBody>
      </Table>
<h1>Add Category</h1>
<form onSubmit={async(e)=>{
  e.preventDefault();
  try{
  const res =await axios.post('http://127.0.0.1:5000/api/users/createCategory',{name},{headers:{
  'Content-Type':'application/json',
  "Authorization":`${localStorage.getItem('token')}`
}})
alert('category added succussfuly')
setcategoryData(...categoryData,name)
setname('');

  }
  catch(error){console.log(error)}
}}> 
  <input className='input11' type='text' placeholder='CategoryName' value={name} onChange={(e)=>{setname(e.target.value)}} />
  <br/>
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
           update category
          </Typography>
             <form onSubmit={async (e)=>{
               e.preventDefault();

               try{
                const res = await axios.put(`http://127.0.0.1:5000/api/users/updateCategory/${updatedId}`,{name:updatedname},
                  {headers:{'Content-Type':'application/json','Authorization':`${localStorage.getItem('token')}` }}) 
                 alert('category updated succesfuly')
                
                setcategoryData(prevData => prevData.map(item => item.id === updatedId ? { ...item, name:  updatedname } : item));
                 setupdatedname('')

                 
               }//try
               catch(error){return console.log(error)}

             }}>
               <input type='text' placeholder='name' value={updatedname} onChange={(e)=>{setupdatedname(e.target.value)}} />
               <button type='submit'>save</button>

             </form>

      </Box>
      </Modal>
    </div>



</>
)


}