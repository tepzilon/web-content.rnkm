import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styles from './slide.module.scss'
import Arrow from '../../assets/images/arrow.svg'

const slide = ({ background, content, next, previous }) => {
  return (
    <BackgroundImage fluid={background.node.childImageSharp.fluid} >
      <div className={styles.slide}>
        <div className={styles.arrowWrapper} onClick={previous}>
          <img
            src={Arrow}
            className={styles.arrow}
            style={{ transform: 'rotate(90deg)' }}
            alt="left-arrow"
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.arrowDownWrapper} />
          <div className={styles.content}>{content}</div>
          <div className={styles.arrowDownWrapper}>
            <img src={Arrow} className={styles.arrowDown} alt="down-arrow" />
          </div>
        </div>

        <div className={styles.arrowWrapper} onClick={next}>
          <img
            src={Arrow}
            className={styles.arrow}
            style={{ transform: 'rotate(-90deg)' }}
            alt="right-arrow"
          />
        </div>
      </div>
    </BackgroundImage>
  )
}

export default slide
