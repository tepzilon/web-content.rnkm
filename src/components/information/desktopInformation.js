import React from 'react'
import Slick from '../slick/slick'
import About from '../about-rnkm/rnkm'

const desktopInformation = () => {
    return (
        <div>
            <Slick />
            <About device="desktop" />
        </div>
    )
}

export default desktopInformation
