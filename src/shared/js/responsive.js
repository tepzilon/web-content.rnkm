import {useMediaQuery} from '@material-ui/core'

export  const getResponsive = () => ({
  widerDesktop: useMediaQuery('(min-width:991px)'),
  widerTablet: useMediaQuery('(min-width:769px)'),
  widerMobile: useMediaQuery('(min-width:479px)'),
  getDevice: function() {
    if(this.widerTablet === true) return 'desktop'
    else if(this.widerMobile === true) return 'tablet'
    else return 'mobile'
  }
})