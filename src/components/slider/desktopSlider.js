import React, { Component } from 'react'
import { Carousel, Icon } from 'antd'
import './desktopSlider.scss'
import styles from './desktopSlider.module.scss'
import images from './imagesSlick'
import About from '../about-rnkm/rnkm'
import Arrow from '../../assets/images/angle-down-solid.svg'

const bgStyle = {
  backgroundPosition: 'center',
  height: 'calc(100vh - 80px)',
}

const Intro = () => (
  <div>
    <div>
      <div style={{ backgroundImage: `url(${images.bg0})`, ...bgStyle }}>
        <div className={styles.wrapper} section="intro">
          <div className={styles.introWrapper}>
            <img src={images.logo} className={styles.introImage} />
            <div className={styles.introContentWrapper}>
              <div className={styles.introHeader}>103 We Unite, We CUnique</div>
              <div className={styles.introDescription}>
                " It’s always better when we are together
                มาร่วมเป็นส่วนหนึ่งในการสร้างความแตกต่างของพวกเราชาวจุฬาฯ
                ในงานรับน้องก้าวใหม่ "
              </div>
              <div className={styles.introDate}>พบกัน 3 - 5 สิงหาคม 2562</div>
              <div className={styles.introHashtag}>
                #WeuniteCUnique #UniteCU103
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Slide = ({ bg, title, subtitle, description, position }) => (
  <div>
    <div style={{ backgroundImage: `url(${bg})`, ...bgStyle }}>
      <div className={styles.wrapper} position={position}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.descriptionWrapper} position={position}>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ButtonSlick = ({ onClick, direction }) => (
  <div className={styles.buttonSlick} onClick={onClick} style={{padding:'0 20px'}}>
    <div className={styles.arrow}>
      {direction === 'left' ? (
        <img src={Arrow} style={{width:45,transform:'rotate(90deg)'}}/>
      ) : (
        <img src={Arrow} style={{width:45,transform:'rotate(-90deg)'}}/>
      )}
    </div>
  </div>
)
export default class DesktopSlider extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.carousel = React.createRef()
  }
  next() {
    this.carousel.next()
  }
  previous() {
    this.carousel.prev()
  }
  render() {
    return (
      <div>
        <div>
          <div className={styles.layer}>
            <ButtonSlick onClick={this.previous} direction="left" />
            <div style={{ flexGrow: 1,display:'flex',justifyContent:'center',alignItems:'flex-end' ,paddingBottom:50}}>
              <div style={{width:25,height:25,zIndex:1000}}>
                <img src={Arrow} className={styles.bounce}/>
              </div>
            </div>
            <ButtonSlick onClick={this.next} direction="right" />
          </div>
          <Carousel autoplay ref={node => (this.carousel = node)}>
            <Intro />
            <Slide
              bg={images.bg1}
              title="Together we are proud"
              subtitle="กิจกรรมรับขวัญน้องใหม่"
              description="ต้อนรับนิสิตใหม่ ภายใต้รั้วจามจุรี พร้อมแขกรับเชิญสุดพิเศษที่จะมามอบความสนุกสนาน และมาแบ่งปันเรื่องราวสุด exclusive ที่ไม่มีวันลืม"
              position="right"
            />
            <Slide
              bg={images.bg2}
              title="Together we joy"
              subtitle="Freshy Night"
              description="พบโชว์สุดพิเศษจากศิลปินชื่อดัง ที่จะมาทำให้น้องได้ปลดปล่อยความมันสุดขั้ว"
              position="left"
            />
            <Slide
              bg={images.bg3}
              title="Together we are one"
              subtitle="กิจกรรมหอประชุม"
              description=" เพลิดเพลินกับละครหลากหลายอารมณ์ ที่มาพร้อมกับตอนจบให้น้อง ๆ CU Freshmen ได้หาคำตอบด้วยตัวเอง"
              position="right"
            />
            <Slide
              bg={images.bg4}
              title="Together we share"
              subtitle="กิจกรรมบำเพ็ญประโยชน์"
              description="เปิดโอกาสให้น้อง ๆ ได้ร่วมกันแบ่งปัน ผ่านการทำกิจกรรมที่สร้างสรรค์กับเพื่อน ๆ"
              position="left"
            />
            <Slide
              bg={images.bg5}
              title="Together we grow"
              subtitle="Content in capsule"
              description="เครื่องมือสุดล้ำ ที่จะช่วยเก็บความทรงจำอันล้ำค่าของน้อง ๆ จากงานรับน้องก้าวใหม่"
              position="right"
            />
          </Carousel>
        </div>
        <About device="desktop" />
      </div>
    )
  }
}
