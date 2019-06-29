import React from 'react'
import styles from './rnkm.module.scss'

const rnkm = ({device}) => {
  return (
    <div className={styles.container} device={device}>
      <h2 style={{fontWeight:'bold'}}>รับน้องก้าวใหม่คืออะไร ?</h2>
      <p style={{textIndent:'2rem',marginBottom:0}}>
        งานรับน้องก้าวใหม่
        ถูกจัดขึ้นเพื่อต้อนรับและเปิดโอกาสให้นิสิตได้ทำความรู้จักกับจุฬาลงกรณ์มหาวิทยาลัยในมุมมองต่าง
        ๆ
        รวมถึงเสริมสร้างความผูกพันธ์ระหว่างนิสิตจากทุกคณะหลากหลายชั้นปีให้ลึกซึ้งมากยิ่งขึ้น
        ด้วยการเป็นส่วนหนึ่งในบ้านรับน้องที่มีเอกลักษณ์และทำกิจกรรมสุดพิเศษร่วมกัน
      </p>
    </div>
  )
}

export default rnkm
