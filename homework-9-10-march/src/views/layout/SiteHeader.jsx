import { Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { Link } from 'react-router-dom'

function SiteHeader() {

    let menus = [
        {
            key:1,
            label:<Link to='/'>Home</Link>
        },
        {
            key:2,
            label:<Link to='/categories'>Categories</Link>
        }
    ]


  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
    <div
      style={{
        float: 'left',
        width: 120,
        height: 31,
        margin: '16px 24px 16px 0',
        background: 'rgba(255, 255, 255, 0.2)',
      }}
    />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      items={menus}
    />
  </Header>

  )
}

export default SiteHeader