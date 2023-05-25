import React from 'react'
import Button from '@mui/material/Button';
import heroStyle from "../styles/hero.module.css"
const Hero = () => {
  return (
    <>
    <section className={heroStyle.hero}>
    <article className={heroStyle.hero_article}>
        <h1 style={{fontSize:'48px'}}>Hello we're bizpro</h1>
        <h6 style={{fontSize:'18px'}}>Sub Head, Motto or Mission subtitle</h6>
        <Button variant="outlined" style={{borderColor:'red', color:'white'}}>Contained</Button>
    </article>

    </section>
    </>
  )
}

export default Hero