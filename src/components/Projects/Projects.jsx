import React, { useEffect, useState } from 'react'
import projects from '../../data/projects.json'

import ProjectCard from './ProjectCard'
import styles from './Projects.module.css';
//import less from '../../../assets/projects/less.png'
//import greater from '../../../assets/projects/greater.png'
import 'react-multi-carousel'


const Projects = () => {
    
  return (
   <section className={styles.container} id='projects'>
    <h2 className={styles.title}>Projects</h2>
   
  
    <div className={styles.projects}>
   
   
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
     
    </div>
   </section>
  )
}

export default Projects