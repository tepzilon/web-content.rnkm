import React from 'react'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Link } from 'gatsby'

const desktopNavBarTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        fontFamily: `'Kanit', sans-serif`,
        marginLeft : '0.6em',
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
      <span key={menu.text}>
        {menu.isExternal ? ( 
          <a href={menu.link} target="_blank" style={listStyle} rel="noopener noreferrer">
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
