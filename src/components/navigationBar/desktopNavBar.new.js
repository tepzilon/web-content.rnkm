import React from 'react'
import styles from './desktopNavBar.new.module.scss'
import { Link } from 'gatsby'

export default ({ menus, theme }) => {
  const linkStyle = {
    textDecoration: 'none',
    height: '100%',
  }
  return (
    <div className={styles.menus}>
      {menus.map(menu => (
        <div key={menu.text}>
          {menu.isExternal ? (
            <a
              href={menu.link}
              target="_blank"
              style={linkStyle}
              rel="noopener noreferrer"
            >
              <div className={styles.button} theme={theme}>{menu.text}</div>
            </a>
          ) : (
            <Link to={menu.link} style={linkStyle} >
              <div className={styles.button} theme={theme}>{menu.text}</div>
            </Link>
          )}
        </div>
      ))}
    </div>
  ) 
}
