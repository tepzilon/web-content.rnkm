import React from 'react'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Link } from 'gatsby'

import './desktopNavBar.scss'
import { typography } from '@material-ui/system'

const desktopNavBarTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        // color : 'white',
        fontFamily: `'Kanit', sans-serif`,
        // padding : '0 1em',
        margin: '0 0.3em',
        color: 'white',
      },
    },
  },
})

const listStyle = {
  textDecoration: 'none',
}

export default ({ menus }) => (
  <MuiThemeProvider theme={desktopNavBarTheme}>
    {menus.map(menu => (
      <span>
        {menu.isExternal ? (
          <a href={menu.link} target="_blank" style={listStyle}>
            <Button size="large">{menu.text}</Button>
          </a>
        ) : (
          <Link to={menu.link} style={listStyle}>
            <Button size="large">{menu.text}</Button>
          </Link>
        )}
      </span>
    ))}
  </MuiThemeProvider>
)
