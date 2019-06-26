import useMediaQuery from 'react-use-media-query-hook'

// alert('test')


export const getResponsive = () => ({
  // widerDesktop: window.matchMedia('(min-width:1025px)').matches,
  // widerTablet: window.matchMedia('(min-width:769px)').matches,
  // widerMobile: window.matchMedia('(min-width:479px)').matches,
  getDevice: () => {
    let a = useMediaQuery('(min-width: 1024px)')
    let b = useMediaQuery('(min-width: 425px)')
    return ((a) ? 'desktop' : (b ? 'tablet' : 'mobile'))
  }
    // if(this.widerDesktop === true) return 'desktop'
    // else if(this.widerMobile === true) return 'tablet'
    // else return 'mobile'
  // }
})