import React from 'react'
import aboutimage from '../../../assets/about/aboutImage.png'
import cursorimage from '../../../assets/about/cursorIcon.png'
import servericon from '../../../assets/about/serverIcon.png'
import uiicon from '../../../assets/about/uiIcon.png'
import styles from './about.module.css'
const about = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img src={aboutimage} alt='me sitting with laptop' className={styles.aboutimage}/>  
          <ul className={styles.aboutitems}>
            <li className={styles.aboutitem}>
                <img src={cursorimage} alt="cursor"/>
                <div className={styles.aboutitemtext}>
                    <h3>Who I Am</h3>
                    <p>I have expertise in MongoDB, Express.js, React.js, and Node.js, along with a strong foundation in front-end and back-end development.</p>
                </div>
            </li>
            <li className={styles.aboutitem}>
                <img src={servericon} alt="server"/>
                <div className={styles.aboutitemtext}>
                    <h3>Skills & Expertise</h3>
                    <p>Proficient in React.js, Node.js, Express.js, MongoDB
Experience in building RESTful APIs and integrating third-party services
Strong problem-solving skills and a keen eye for performance optimization</p>
                </div>
            </li>
            <li className={styles.aboutitem}>
                <img src={uiicon} alt="uiicon"/>
                <div className={styles.aboutitemtext}>
                    <h3>What I’m Looking For</h3>
                    <p>I am seeking an opportunity to work on innovative projects, collaborate with a dynamic team, and enhance my skills while contributing to impactful solutions.</p>
                </div>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default about