import React from 'react'
import Message from './message'
import { useStaticQuery, graphql } from 'gatsby'

const chat = () => {
  const Header = () => (
    <div
      style={{
        backgroundColor: '#0B2E66',
        color: 'white',
        textAlign: 'center',
      }}
    >
      SGCU
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
    <div style={{ backgroundColor: 'red', width: 600, margin: '0 auto' }}>
      <Header />
      {data.allConversationJson.edges.map( (message) => (
          <Message user={message.node.user} text={message.node.text} />
      ) )}
      
    </div>
  )
}

export default chat
