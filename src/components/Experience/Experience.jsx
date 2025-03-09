import React from 'react'
import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill,id)=>{
            return(
<div key={id} className={styles.skill}>
  <div className={styles.skillimage}>
    <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
    </div>
    <p>{skill.title}</p>

</div>

            )
          })}
        </div>
        <ul className={styles.data}>
{history.map((data,id)=>{
  return(
    <li key={id} className={styles.dataitem}>
{/* <img src={getImageUrl(data.imageSrc)} alt={`${data.organisation} Logo`}/> */}
<div className={styles.dataitemdetail}>
  <h3>{`${data.role}, ${data.organisation}`}</h3>
  <p>{`${data.startDate} - ${data.endDate}`}</p>
  <ul>
    {data.experiences.map((Experience,id)=>{
      return<li key={id}>{Experience}</li>
    })}
  </ul>
</div>
    </li>
  )
})}
        </ul>
      </div>

    </section>
  )
}

export default Experience