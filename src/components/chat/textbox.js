import React from 'react'

const textbox = ({ text }) => {
  return (
      <div style={{ margin: 'auto 0',width:300 }}>
        <div
          style={{
            backgroundColor: '#ddd',
            borderRadius: 20,
            padding: '5px 12px',
            display : 'inline-block',
            // display:'flex',
            // justifyContent:'flex-end'
          }}
        >
          {text}
        </div>
      </div>
  )
}

export default textbox
