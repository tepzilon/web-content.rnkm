import React from 'react'
import Avatar from './avatar'
import Textbox from './textbox'
import styles from './message.module.scss'

const message = ({ user, text ,device }) => {
  const gender = user === 'me' ? 'female' : 'male'

  return (
    <div className={styles.wholeMessageWrapper} user={user}>
      <div className={styles.wrapper} user={user}>
        <Avatar gender={gender} />
        <Textbox user={user} text={text} device={device}/>
      </div>
    </div>
  )
}

export default message
