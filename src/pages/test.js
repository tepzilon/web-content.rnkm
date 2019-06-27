import React from 'react'
import Avatar from '../components/chat/avatar'
import Textbox from '../components/chat/textbox'
import Message from '../components/chat/message'
import Chat from '../components/chat/chat'

const test = () => {
  return (
    <div>
      {/* <Avatar gender="male"/>
            <Avatar gender="female"/>
            <Textbox text="asdfasdf"/>
            <Message user="me" text="bla bla bla"/>
            <Message user="other" text=" blas blas blasblas blas blasblas blas blasblas blas blasblas blas blasblas blas blasblas blas blas"/> */}
      {/* <Chat /> */}
      <div style={{ backgroundColor: 'red', display: 'flex' }}>
        <div style={{ backgroundColor: 'green', width: 100, height: 200 }}>
          <div style={{ backgroundColor: 'blue',width:70 }}>asdfasdfasdfasdfasdfasdf</div>
        </div>
        <div style={{ backgroundColor: 'yellow', width: 50, height: 200 }} />
      </div>
    </div>
  )
}

export default test
