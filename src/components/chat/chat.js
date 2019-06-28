import React from 'react'
import Message from './message'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './chat.module.scss'

const chat = ({ device }) => {
  const Header = () => (
    <div className={styles.header} device={device}>
      <div>คำถามที่พบบ่อย (FAQ) </div>
    </div>
  )

  const data = useStaticQuery(graphql`
    query {
      allConversationJson {
        edges {
          node {
            user
            text
          }
        }
      }
    }
  `)

  return (
    <div>
      <Header />
      <div className={styles.chatbox} device={device}>
        {data.allConversationJson.edges.map(message => (
          <Message
            user={message.node.user}
            text={message.node.text}
            device={device}
          />
        ))}
      </div>
    </div>
  )
}

export default chat
