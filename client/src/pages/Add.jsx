import React from 'react'
import {useFormik} from 'formik'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import { postModel } from '../api/requests';
import { ModelValidation } from '../validation/ModelValidation';
const Add = () => {
  const navigate = useNavigate()
  const handleSubmit = async(values,actions)=>{
    await postModel(values)
    actions.resetForm()
    navigate('/')
  }
  const formik = useFormik({
    initialValues:{
      imageURL:'',
      name:'',
      desc:'',
      more:''
    },
    validationSchema:ModelValidation,
    onSubmit:handleSubmit,
  })
  return (
    <form onSubmit={formik.handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'60%', margin:'0 auto'}}>
     
    <TextField name='imageURL' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.imageURL} id="outlined-basic" label="imageURL" variant="outlined" /><br/>
    {formik.errors.imageURL && formik.touched.imageURL &&(<span>{formik.errors.imageURL}</span>)}

    <TextField name='name' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} id="outlined-basic" label="name" variant="outlined" /><br/>
    {formik.errors.name && formik.touched.name &&(<span>{formik.errors.name}</span>)}

    <TextField name='more' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.more} id="outlined-basic" label="title" variant="outlined" /><br/>
    {formik.errors.more && formik.touched.more &&(<span>{formik.errors.more}</span>)}

    <TextField name='desc' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.desc} id="outlined-basic" label="desc" variant="outlined" />
    {formik.errors.desc && formik.touched.desc &&(<span>{formik.errors.desc}</span>)}

     <Button variant='contained' color='success' type='submit'>Add</Button>
  </form>
  )
}

export default Add