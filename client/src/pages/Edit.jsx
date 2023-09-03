import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import {useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { ModelValidation } from "../validation/ModelValidation"
import { editModel, getModelById } from '../api/requests';
import { Button } from '@mui/material';
import { useModelContext } from '../context/ModelContext';

const Edit = () => {
  const [models, setModels] = useModelContext();
  console.log('context', models)
  const { id } = useParams()
  // console.log(id); 
  const navigate = useNavigate()
  const [model, setModel] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getModelById(id).then((res) => {
      setModel(res)
      console.log('first', res)
      formik.values.imageURL = res.data.imageURL;
      formik.values.name = res.data.name;
      formik.values.desc = res.data.desc;
      formik.values.more = res.data.more;
      setLoading(false)
    })

  }, [id, loading])


  const handleEdit = async (values, actions) => {
    setModels(values)
    await editModel(id, values)
    navigate('/')
    actions.resetForm()
  }


  const formik = useFormik({
    initialValues: {
      imageURL: model.imageURL,
      name: model.name,
      desc: model.desc,
      more: model.more

    },
    validationSchema: ModelValidation,

    onSubmit: handleEdit

  })

  return (
    <>
     
        <h1 style={{ textAlign: 'center' }}>Edit Page</h1>
        {loading ? <div>loading</div> : <form onSubmit={formik.handleSubmit} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '60%', margin: '0 auto' }}>
          <TextField type='text' name='imageURL' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.imageURL} id="outlined-basic" label="imageURL" variant="outlined" /><br />
          {formik.errors.imageURL && formik.touched.imageURL && (<span>{formik.errors.imageURL}</span>)}

          <TextField type='text' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} id="outlined-basic" label="name" variant="outlined" /><br />
          {formik.errors.name && formik.touched.name && (<span>{formik.errors.name}</span>)}

          <TextField type='text' name='desc' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.desc} id="outlined-basic" label="desc" variant="outlined" /><br />
          {formik.errors.desc && formik.touched.desc && (<span>{formik.errors.desc}</span>)}

          <TextField type='text' name='more' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.more} id="outlined-basic" label="more" variant="outlined" />
          {formik.errors.more && formik.touched.more && (<span>{formik.errors.more}</span>)}
          {/* <Button type='submit' variant='contained' color='success'><Link style={{color:'white', textDecoration:'none'}} to='/'>Edit</Link></Button> */}
          <Button type='submit' variant='contained' color='success'>Edit</Button>
        </form>}
   
    </>
  )
}

export default Edit