import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='emailicon'/>
                <a href="mailto:nooriya2408@gmail.com">Nooriya2408@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='linkedinicon'/>
                <a href="https://www.linkedin.com/in/nooriya2408">linkedin.com/Nooriya2408</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='Github icon'/>
                <a href="https://github.com/nooriya2408">github.com/Nooriya2408</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact