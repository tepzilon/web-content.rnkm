import {useMediaQuery} from '@material-ui/core'

export  const getResponsive = () => ({
  desktop: useMediaQuery('(min-width:991px)'),
  tablet: useMediaQuery('(min-width:767px)'),
  mobile: useMediaQuery('(min-width:479px)'),
  getDevice: function() {
    if(this.tablet === true) return 'desktop'
    else if(this.mobile === true) return 'tablet'
    else return 'mobile'
  }
})