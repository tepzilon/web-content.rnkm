import React from 'react'
import styles from './rnkm.module.scss'
// import ScrollableAnchor from 'react-scrollable-anchor'

const rnkm = ({ device }) => {
  return (
    // <ScrollableAnchor id={'about-rnkm'}>
    <div className={styles.container} device={device} id={'about-rnkm'}>
      <div className={styles.header} device={device}>
        รับน้องก้าวใหม่คืออะไร ?
      </div>
      <div className={styles.description} device={device}>
        <span style={{ textIndent: '3rem' }}>
          <span style={{ fontWeight: 900 }}>งานรับน้องก้าวใหม่ </span>
          ถูกจัดขึ้นเพื่อต้อนรับและเปิดโอกาสให้นิสิตได้ทำความรู้จักกับ
          <span style={{ color: '#F58FA3' }}>จุฬาลงกรณ์มหาวิทยาลัย</span>
        </span>
        <span>
          ในมุมมองต่าง ๆ
          รวมถึงเสริมสร้างความผูกพันระหว่างนิสิตจากทุกคณะหลากหลายชั้นปีให้ลึกซึ้งมากยิ่งขึ้น
        </span>
        <span>
          ด้วยการเป็นส่วนหนึ่งในบ้านรับน้องที่มีเอกลักษณ์และทำกิจกรรมสุดพิเศษร่วมกัน
        </span>
      </div>
    </div>
    // </ScrollableAnchor>
  )
}

export default rnkm
