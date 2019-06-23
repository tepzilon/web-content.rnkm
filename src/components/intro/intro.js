import React from 'react'
import styles from './intro.module.scss'
import logo from '../../assets/images/rnkm_logo_filled.png'

export default ({ responsive }) => {
  return (
    <div className={styles.background}>
      <div
        className={styles.about}
        style={{
          marginLeft: responsive.mobile ? '10vw' : '5vw',
          marginRight: responsive.mobile ? '10vw' : '5vw',
        }}
      >
        <div className={styles.wrapper}>
          <img src={logo} className={styles.logo} />
          <div className={styles.content}>
            <h1 className={styles.header}>103 We Unite, We CUnique</h1>
            <p>
              " It’s always better when we are together
              มาร่วมเป็นส่วนหนึ่งในการสร้างความแตกต่างของพวกเราเหล่าชาวจุฬาในงานรับน้องก้าวใหม่
              "
            </p>
            <p style={{ textAlign: 'center' }}>พบกัน 3 - 5 สิงหาคม 2562</p>
            <p className={styles.hashtag}>#WeuniteCUnique #UniteCU103</p>
          </div>
        </div>
      </div>
    </div>
  )
}
