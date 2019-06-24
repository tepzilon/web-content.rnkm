import React from 'react'
import Layout from '../components/layout'
import { Card } from 'antd'
import { getResponsive } from '../shared/js/responsive'
import styles from './announce.module.scss'
import './announce.scss'

export default () => {
  const responsive = getResponsive()

  const questions = [
    {
      question: 'เด็กอินเตอร์เข้าร่วมงานได้มั้ย ?',
      answer:
        'ได้ งานรับน้องก้าวใหม่จัดขึ้นเพื่อนิสิตปีหนึ่งทุกคนจากทุกคณะ เพราะฉะนั้นมากันเยอะ ๆ น้า',
    },
    {
      question: 'จะติดตามข้อมูลข่าวสารของงานได้จากที่ไหน ?',
      answer: 'Facebook : CU for Freshmen',
    },
    {
      question: 'น้องสามารถย้ายบ้านได้มั้ย ?',
      answer: 'น้องสามารถย้ายบ้านได้ในช่วงเวลาที่กำหนดเท่านั้น',
    },
    {
      question: 'จำเป็นต้องมาทุกวันมั้ย ?',
      answer:
        'กิจกรรมในงานรับน้องก้าวใหม่จะมีความแตกต่างกันออกไปในแต่ละวัน ซึ่งจะเป็นประสบการณ์ที่เรียกได้ว่าเป็น once in a lifetime สำหรับน้อง ๆ ปีหนึ่ง เพราะฉะนั้นหากไม่อยากพลาดความสนุกก็อยากให้มาเข้าร่วมทุกวันจ้า',
    },
    {
      question: ' Content in Capsule คืออะไร ?',
      answer:
        'คือเครื่องมือที่ช่วยเก็บความทรงจำดี ๆ ของน้องในงานรับน้องก้าวใหม่ และเป็นจดหมายที่น้อง ๆ อยากส่งถึงตัวเองในอนาคต',
    },
    {
      question: 'ช่วงเช้าสอบ CU-tep แล้วไปไหนต่อ ?',
      answer:
        'จะมีพี่ ๆ สต๊าฟ พาน้อง ๆ ไปยังจุดลงทะเบียนเพื่อเข้าร่วมกิจกรรมในแต่ละบ้านจ้า',
    },
    {
      question: 'หากไม่ลงทะเบียน จะสามารถเข้าร่วมกิจกรรมได้มั้ย ?',
      answer:
        'การลงทะเบียนจะเป็นการอำนวยความสะดวกให้น้อง ๆ สามารถเข้าร่วมกิจกรรมในงานรับน้องก้าวใหม่ได้อย่างราบรื่น เช่น การเข้าร่วม Freshy night เป็นต้น',
    },
    {
      question: 'มีการค้างคืนมั้ย มีที่พักให้มั้ย ?',
      answer:
        'เป็นกิจกรรมไป-กลับทั้ง 3 วัน แต่หากน้องไม่สะดวกจะเดินทางกลับบ้าน สามารถติดต่อค้างคืนในลิงค์ที่อยู่หัวข้อ ANNOUNCE ได้เลย',
    },
    {
      question: 'ใส่ชุดอะไร ?',
      answer:
        'ในวันแรกที่สอบ CU-tep กำหนดเป็นชุดสุภาพ และเสื้อสีชมพู ส่วนในวันต่อ ๆ ไปจะขึ้นอยู่กับบ้านรับน้องแต่ละบ้านจ้า',
    },
  ]

  const headStyle = {}

  return (
    <Layout responsive={responsive} title="ประกาศ" theme="yellow">
      <div className={styles.container} device={responsive.getDevice()}>
        <h1>คำถามที่พบบ่อย (FAQ)</h1>
        {questions.map(q => (
          <Card
            title={q.question}
            // headStyle={}
            className={styles.card}
            // hoverable
          >
            <span style={{ textDecoration: 'underline' }}>ตอบ</span> :{' '}
            {q.answer}
          </Card>
        ))}
      </div>
    </Layout>
  )
}
