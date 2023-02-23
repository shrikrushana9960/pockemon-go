import React from 'react'
import styles from "./sub_styles/pockemoncard.module.scss"

const  PockemonCard= ({item}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split("/")[6]}.png`} alt={item.name} className={styles.image}/>
        </div>
        <p className={styles.title}>{item.name}</p>
    </div>
  )
}

export default PockemonCard