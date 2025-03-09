import React,{useState} from 'react'
import styles from './Navbar.module.css'
import closeIcon from '../../../assets/nav/closeIcon.png'
import menuIcon from '../../../assets/nav/menuIcon.png'
const Navbar = () => {
    const[menuOpen,setmenuopen] = useState(false)
  return (
   <nav className={styles.navbar}>
    <a className={styles.title} href='/'>Portfolio</a>
    <div className={styles.menu}>
       
    <img className={styles.menuBtn} src={menuOpen ? closeIcon : menuIcon} 
    alt='menu-button' onClick={()=>setmenuopen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setmenuopen(false)}>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#experience'>Experience</a>
            </li>
            <li>
                <a href='#projects'>Projects</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar