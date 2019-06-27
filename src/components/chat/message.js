import React from 'react'
import Avatar from './avatar'
import Textbox from './textbox'
import styles from './message.module.scss'

const message = ({ user, text }) => {
  const gender = user === 'me' ? 'male' : 'female'

  return (
    <div className={styles.wholeMessageWrapper} user={user}>
      <div className={styles.wrapper} user={user}>
        <Avatar gender={gender} />
        <Textbox text={text} />
      </div>
    </div>
  )
}

export default message
