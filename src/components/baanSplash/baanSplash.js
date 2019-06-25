import React from 'react'

import styles from './baanSplash.module.scss'

import {useStaticQuery,graphql} from 'gatsby'

const baanSplash = ({device}) => {
  const data = useStaticQuery(graphql`
    query {
      splash_desktop:
        file(name:{eq:"splash_desktop"}) {
          publicURL
        }
      splash_tablet:
        file(name:{eq:"splash_tablet"}) {
          publicURL
        }
      splash_mobile:
        file(name:{eq:"splash_mobile"}) {
          publicURL
        }
    }
  `)
  return (
    <div
      className={styles.wholeWrapper}
      style={{
        backgroundImage: `url(${data[`splash_${device}`].publicURL})`
      }}
    >
        <div className={styles.paragraphWrapper} device={device}>
          <h2>บ้านรับน้องคืออะไร?</h2>
          <p>บ้านรับน้อง คือ กลุ่มนิสิตจากหลากหลายคณะและชั้นปีที่ต้องการจะถ่ายทอดความรู้สึกดีๆ และสร้างสรรค์กิจกรรมในการรับน้อง</p>
        </div>
    </div>
  )
}

export default baanSplash
