import React from 'react'
import styles from './content.module.scss'

export default ({device}) => {
  const Template = ({ title, subtitle, description }) => (
    <div >
      <div>
        <div style={{ fontFamily: 'Blanch Caps', fontSize: 40 }}>{title}</div>
        <div>{subtitle}</div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )

  console.log(device)
  return (
    <div className={styles.container} device={device}>
      <h1>การรับน้องก้าวใหม่คืออะไร ?</h1>
      <p>
        งานรับน้องก้าวใหม่
        ถูกจัดขึ้นเพื่อต้อนรับและเปิดโอกาสให้นิสิตได้ทำความรู้จักกับจุฬาลงกรณ์มหาวิทยาลัยในมุมมองต่าง
        ๆ
        รวมถึงเสริมสร้างความผูกพันธ์ระหว่างนิสิตจากทุกคณะหลากหลายชั้นปีให้ลึกซึ้งมากยิ่งขึ้น
        ด้วยการเป็นส่วนหนึ่งในบ้านรับน้องที่มีเอกลักษณ์และทำกิจกรรมสุดพิเศษร่วมกัน
      </p>
      <Template
        title="Together we are proud"
        subtitle="กิจกรรมรับขวัญน้องใหม่"
        description="ต้อนรับนิสิตใหม่ ภายใต้รั้วจามจุรี พร้อมแขกรับเชิญสุดพิเศษที่จะมามอบความสนุกสนาน และมาแบ่งปันเรื่องราวสุด exclusive ที่ไม่มีวันลืม"
      />
      <Template
        title="Together we joy"
        subtitle="Freshy Night"
        description="พบโชว์สุดพิเศษจากศิลปินชื่อดัง ที่จะมาทำให้น้องได้ปลดปล่อยความมันสุดขั้ว"
      />
      <Template
        title="Together we are one"
        subtitle="กิจกรรมหอประชุม"
        description=" เพลิดเพลินกับละครหลากหลายอารมณ์ ที่มาพร้อมกับตอนจบให้น้อง ๆ CU Freshmen ได้หาคำตอบด้วยตัวเอง"
      />
      <Template
        title="Together we share"
        subtitle="กิจกรรมบำเพ็ญประโยชน์"
        description="เปิดโอกาสให้น้อง ๆ ได้ร่วมกันแบ่งปัน ผ่านการทำกิจกรรมที่สร้างสรรค์กับเพื่อน ๆ"
      />
      <Template
        title="Together we grow"
        subtitle="Content in capsule"
        description="เครื่องมือสุดล้ำ ที่จะช่วยเก็บความทรงจำอันล้ำค่าของน้อง ๆ จากงานรับน้องก้าวใหม่"
      />
    </div>
  )
}
