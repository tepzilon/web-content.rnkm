import React from 'react'
import Message from './message'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './chat.module.scss'

const chat = ({ device }) => {
  const Header = () => (
    <div
      style={{
        backgroundColor: '#0B2E66',
        color: 'white',
        textAlign: 'center',
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom : 10,
      }}
    >
      <div style={{fontSize:40}}>คำถามที่พบบ่อย (FAQ) </div>
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
    <div className={styles.chatbox} device={device}>
      <Header />
      {data.allConversationJson.edges.map(message => (
        <Message
          user={message.node.user}
          text={message.node.text}
          device={device}
        />
      ))}
    </div>
  )
}

export default chat
