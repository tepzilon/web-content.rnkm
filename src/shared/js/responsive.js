import useMediaQuery from '@material-ui/core/useMediaQuery'

export const getResponsive = () => ({
  widerDesktop: useMediaQuery('(min-width:1025px)'),
  widerTablet: useMediaQuery('(min-width:769px)'),
  widerMobile: useMediaQuery('(min-width:479px)'),
  getDevice: function () {
    if (this.widerTablet === true) return 'desktop'
    else if (this.widerMobile === true) return 'tablet'
    else return 'mobile'
  }
})