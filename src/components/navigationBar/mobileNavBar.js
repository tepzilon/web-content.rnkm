import React from 'react'
import 'antd/dist/antd.css'
import { Drawer } from 'antd'
import { Link } from 'gatsby'
import styles from './moblieNavigationBar.module.scss'

export default class MobileNavigation extends React.Component {
  state = { visible: false }

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    const { menus, theme } = this.props

    const header = <div className={styles.header}>รับน้องก้าวใหม่ 2562</div>

    const listStyle = {
      textDecoration: 'none',
      color: '#424242',
    }

    const menuIcon = (
      <div
        style={{ width: '20px', margin: '1px 0' }}
        onClick={this.showDrawer}
      >
        <div style={{ height: '3px', backgroundColor: 'white' }} />
        <div style={{ height: '3px' }} />
        <div style={{ height: '3px', backgroundColor: 'white' }} />
        <div style={{ height: '3px' }} />
        <div style={{ height: '3px', backgroundColor: 'white' }} />
      </div>
    ) 
    return (
      <div>
        {menuIcon}
        <Drawer
          title={header}
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          zIndex={1500}
          width="70vw"
          bodyStyle={{ padding: 0 }}
        >
          <div className={styles.divider} theme={theme} />
          <div>
            {menus.map(menu => (
              <div key={menu.text}>
                {menu.isExternal ? (
                  <a
                    href={menu.link}
                    target="_blank"
                    style={listStyle}
                    rel="noopener noreferrer"
                  >
                    <div className={styles.link}>{menu.text}</div>
                  </a>
                ) : (
                  <Link
                    to={menu.link}
                    style={listStyle}
                    activeStyle={{ color: '#ccc' }}
                  >
                    <div className={styles.link}>{menu.text}</div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Drawer>
      </div>
    )
  }
}
