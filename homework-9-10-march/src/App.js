import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import SiteHeader from './views/layout/SiteHeader'
import SiteFooter from './views/layout/SiteFooter'
import { routes } from './routes/routes'

const {Content} = Layout;
function App() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (<>
    <Layout>
      <SiteHeader />
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>
          <Routes>
            {
              routes.map((item) => {
                return <Route path={item.path} element={item.element}></Route>
              })
            }
          </Routes>
        </div>
      </Content>
      <SiteFooter />
    </Layout>
  </>)
}

export default App