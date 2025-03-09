  
import hero from '../../../assets/hero/heroImage.png'
import React from 'react'
import styles from './Hero.module.css';
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nooriya</h1>
            <p className={styles.description}>I am full stack developer with
             1 year of experience using React,NodeJS,ExpressJS,MongoDB. Reach out if you'd like to learn more! </p>
            <a href='mailto:nooriya2408@gmail.com' className={styles.contactbtn}>Contact Me</a>

        </div>
<img src={hero} alt="Hero" className={styles.img} />

<div className={styles.topblur}/>
<div className={styles.bottomblur} />
    </section>
  )
}

export default Hero