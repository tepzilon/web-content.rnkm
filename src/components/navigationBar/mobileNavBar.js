import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
// import Box from '@material-ui/core/Box'
import { Link } from 'gatsby'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './mobileNavBar.scss'

const mobileNavBarTheme = createMuiTheme({
  typography: {
    fontFamily: `'Kanit', sans-serif`,
    // color: 'black',
  },
})

export default ({ menus }) => {
  const [isOpen, setOpen] = useState(false)

  const listStyle = {
    textDecoration: 'none',
    color : 'black',
  }

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setOpen(open)
  }

  const sideList = () => (
    <div style={{ width: '40vw' }}>
      <List>
        {menus.map(menu => (
          <span key={menu.text}>
            {menu.isExternal ? (
              <a href={menu.link} target="_blank" style={listStyle}>
                <ListItem button>
                  <ListItemText primary={menu.text} />
                </ListItem>
              </a>
            ) : (
              <Link to={menu.link} style={listStyle}>
              <ListItem button>
                <ListItemText primary={menu.text} />
              </ListItem>
              </Link>
            )}
          </span>
        ))}
      </List>
    </div>
  )

  return (
    <MuiThemeProvider theme={mobileNavBarTheme}>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {/* <SideList menus={menus} /> */}
        {sideList()}
      </SwipeableDrawer>
    </MuiThemeProvider>
  )
}
