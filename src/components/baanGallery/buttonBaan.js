import React from 'react'
import Img from 'gatsby-image'

export default ({name, size, description, cover}) => {
  return(
      // <div> 
        <div><Img fixed={cover} /></div>
        // <div>{name} {size}</div>
        // <div>{description}</div>
      // </div>
  )
}
