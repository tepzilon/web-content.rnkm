import React from 'react'
import Img from 'gatsby-image'
// import styles from './buttonBaan.module.scss'


export default ({ name, size, description, cover }) => {
  return (
    // <div>
    // <div className={styles.innerImage}>
      <Img fluid={cover} />
    // </div>
    // <div>{name} {size}</div>
    // <div>{description}</div>
    // </div>
  )
}
