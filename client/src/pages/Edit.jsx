import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { useModelContext } from '../context/ModelContext';
import {useNavigate, useParams} from 'react-router-dom'
import {useFormik} from 'formik'
import {ModelValidation} from "../validation/ModelValidation"
import { editModel, getModelById } from '../api/requests';
import { Button } from '@mui/material';
const Edit = () => {
  const [models,setModels] = useModelContext()
  const [model,setModel] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    getModelById(id).then((res)=>{
      setModel(res)
      formik.values.imageURL = res.data.imageURL;
      formik.values.name = res.data.name;
      formik.values.desc = res.data.desc;
      formik.values.more = res.data.more

    })
   
  },[id])

  
 const handleEdit = async(values,actions)=>{
  setModels(values)
  await editModel(id,values)
  navigate('/')
  actions.resetForm()
 }


  const formik = useFormik({
    initialValues:{
    imageURL:model.imageURL,
    name:model.name,
    desc:model.desc,
    more:model.more
    },
    validationSchema: ModelValidation,
    onSubmit:handleEdit
    
  },
 
  
  )
  
  return (
   <>
   <section >
    <h1 style={{textAlign:'center'}}>Edit Page</h1>
    <form style={{display:'flex', justifyContent:'center', flexDirection:'column', width:'60%', margin:'0 auto'}}>
    <TextField name='imageURL' onChange={formik.handleChange} onBlur={formik.onBlur} value={formik.values.imageURL} id="outlined-basic" label="Outlined" variant="outlined" /><br/>
    {formik.errors.imageURL && formik.touched.imageURL && (<span>{formik.errors.imageURL}</span>)}
    <TextField name='name' onChange={formik.handleChange} onBlur={formik.onBlur} value={formik.values.name} id="outlined-basic" label="Outlined" variant="outlined" /><br/>
    {formik.errors.name && formik.touched.name && (<span>{formik.errors.name}</span>)}
    <TextField name='desc' onChange={formik.handleChange} onBlur={formik.onBlur} value={formik.values.desc} id="outlined-basic" label="Outlined" variant="outlined" /><br/>
    {formik.errors.desc && formik.touched.desc && (<span>{formik.errors.desc}</span>)}
    <TextField name='more' onChange={formik.handleChange} onBlur={formik.onBlur} value={formik.values.more} id="outlined-basic" label="Outlined" variant="outlined" />
    {formik.errors.more && formik.touched.more && (<span>{formik.errors.more}</span>)}
    <Button type='submit'>Edit</Button>
    </form>
   </section>
   </>
  )
}

export default Edit