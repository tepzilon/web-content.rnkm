import React, {useState} from 'react'
import styles from './baan-info.module.scss'
import './baan-info.scss'

import Img from 'gatsby-image'
import { Divider, Radio } from 'antd'
import {useGlobal, setGlobal} from 'reactn'
import Flag from 'react-world-flags'

import FacebookIcon from '../../assets/images/aspect/facebook.svg'
import TwitterIcon from '../../assets/images/aspect/twitter.svg'
import InstagramIcon from '../../assets/images/aspect/instagram.svg'
import LineIcon from '../../assets/images/aspect/line.svg'

//module extraction
const {Group, Button} = Radio

//constants
const icons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  line: LineIcon,
}

setGlobal({
  language: 'TH',
  displayLanguage: 'TH'
})

const baanInfo = ({bundle, device}) => {
  //hooks
  const [language, setLanguage] = useGlobal('language')
  const [displayLanguage, setDisplayLanguage] = useGlobal('displayLanguage')
  const [animType, setAnimType] = useState('entrance')
  
  //internal references
  const shareURL = `https://rubnongcu.life/gallery/${bundle.nameURL}`
  const baanPrefix = (language) => language === 'TH' ? "บ้าน" : "Baan"
  const bothLanguage = (bundle.sloganEN!=="" && bundle.descriptionEN!=="");
  const getDisplayLanguage = () => bothLanguage ? displayLanguage : 'TH';

  return (
    <div className={styles.infoContainer} device={device}>
      {/*logo & cover*/}
      <div><Img fluid={bundle.coverImage}/></div>
      <div className={styles.logoWrapper}
        device={device}><Img fluid={bundle.logoImage}/></div>
      {/*language switcher*/}
      { bothLanguage &&
        <div className={styles.languageSwitcherWrapper}>
          <Group buttonStyle="solid"
            defaultValue={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setAnimType("exit");
            }}
          >
            <Button value='TH'>
              <Flag code={"TH"} height='15'/> ภาษาไทย
            </Button>
            <Button value='EN'>
              <Flag code={"GB"} height='15'/> English
            </Button>
          </Group>
        </div>
      }
      {/*content*/}
      <div className={styles.textWrapper}
        animType={animType}
        onAnimationEnd={() => {
          if(animType === 'exit') {
            setDisplayLanguage(language);
            setAnimType('entrance')
          }
        }}
      >
        <div className={styles.content}>
          <h1 type='header'>{`${baanPrefix(getDisplayLanguage())} ${bundle[`name${getDisplayLanguage()}`]}`}</h1>
          <h3 type='header' dangerouslySetInnerHTML={{__html: `${bundle[`slogan${getDisplayLanguage()}`]}`}}/>
          <br/>
          <h3 dangerouslySetInnerHTML={{__html: `${bundle[`description${getDisplayLanguage()}`]}`.replace(/\n/g,'<br/>')}}/>
        </div>
      </div>
      <div className={styles.externalLinks}>
        {['facebook','line','twitter','instagram'].map(social => (
          bundle[`${social}URL`] !== "" &&
          <a href={bundle[`${social}URL`]}>
            <img src={icons[social]} className={styles.linkIcon} alt={social}/>
          </a>
        ))}
        <Divider type='vertical' style={{height: '28px'}}/>
        <iframe title="facebook-share" src={`https://www.facebook.com/plugins/share_button.php?href=${encodeURIComponent(shareURL)}&layout=button&size=large&width=73&height=28`}
          width="73" height="28" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  )
}

export default baanInfo
