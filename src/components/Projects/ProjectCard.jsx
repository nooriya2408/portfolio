import React, { useState } from 'react'
import { getImageUrl} from '../../utils'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ 
    project:{title,description,imageSrc,skills,demo,adminDemo,source} }) => {
      const[isExpanded,setIsExpanded]=useState(false)

      const toggleDescription = () =>{
        setIsExpanded(!isExpanded)
      }
  return (

    <div className={styles.container}>
      
<img src={getImageUrl(imageSrc)}  alt={`image of ${title}`} className={styles.img}/>
<h3 className={styles.title}>{title}</h3>
<p className= {isExpanded? styles.expanded:styles.description}>{description}</p>
<button onClick={toggleDescription} className={styles.togglebutton}>{isExpanded? 'Read less...':"Read more..."}</button>
<ul className={styles.skills}>
    {skills.map((skill,id)=>{
      return  <li key={id} className={styles.skill}>{skill}</li>
    })}
</ul>
<div className={styles.links}>
    <a href={demo} className={styles.link}>Demo</a>
  {adminDemo &&(
    <a href={adminDemo} className={styles.link}>Admin demo</a>
  )}
       
   
   
    </div>
    <div className={styles.links}>
    <a href={source} className={styles.link}>Source</a>
    </div>
            </div>
  )
}

export default ProjectCard