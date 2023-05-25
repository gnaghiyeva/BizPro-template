import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { deleteModel, getAllModels } from '../api/requests';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import aboutStyle from '../styles/about.module.css'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'
import { TextField } from '@mui/material';
const About = () => {
  const [models, setModels] = useState([])
  useEffect(() => {
    getAllModels().then((res) => {
      setModels(res.data)
    })
  })


  function handleChange(e){
    getAllModels(e.target.value).then((res)=>{
      setModels(res)
    })
  }
  return (
    <>

      <section style={{ marginTop: '60px' }}>
        <article style={{ textAlign: 'center' }}>
          <h1>ABOUT OUR BIZPRO</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        </article>

        <TextField  
          onChange={(e)=>handleChange(e)}
          id="outlined-basic"
          label="Search Author"
          variant="outlined"/>

        
        <Grid className={aboutStyle.about_row} container spacing={3} style={{width:'70%', margin:'0 auto'}} >
          {models && models.map((model) => {
            return (
              <Grid className={aboutStyle.about_col}  item lg={3} md={6} xs={12} >
                <Card className={aboutStyle.card} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 340 }}
                    image={model.imageURL}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {model.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     {model.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">{model.more}</Button>
                  </CardActions>
                  <div style={{display:'flex',justifyContent:'center', gap:'15px'}}>
                    <Button size="small" onClick={()=>{
                      Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteModel(model._id).then((res)=>{
                            Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                            )

                          })
                          setModels(models.filter((x)=>x._id!==model._id))
                        }
                      })
                    }}>Delete</Button>
                    <Button variant='contained'  size="small"><Link style={{color:'white', textDecoration:'none'}} to={`/edit/${model._id}`}>Edit</Link></Button>
                  </div>
                </Card>
              </Grid>

            )
          })}



        </Grid>


      </section>
    </>
  )
}

export default About