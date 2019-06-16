import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// const mobileNavBarTheme = createMuiTheme({
//   typography: {
//     fontFamily: `'Kanit', sans-serif`,
//   },
// })

export default ({ menus }) => {
  const [isOpen, setOpen] = useState(false)

  const listStyle = {
    textDecoration: 'none',
    color: 'black',
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
      <div style={{ height: '80px',backgroundColor:'#f50057' }}>
        
      </div>
      <List style={{ paddingTop: 0 }}>
        {menus.map(menu => (
          <span key={menu.text}>
            {menu.isExternal ? (
              <a
                href={menu.link}
                target="_blank"
                style={listStyle}
                rel="noopener noreferrer"
              >
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
    <div>
      {/* <MuiThemeProvider theme={mobileNavBarTheme}> */}
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList()}
      </SwipeableDrawer>
      {/* </MuiThemeProvider> */}
    </div>
  )
}
