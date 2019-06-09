import React, { Component } from 'react'
import '../css/movie-app.css'

// 导入路由
import { Route, Link, withRouter } from 'react-router-dom'

import Home from './home'
import Movie from './movie'
import About from './about'

import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout

class MovieApp extends Component {

  constructor(props) {
    super(props)
    console.log(props)
    const hash = props.location.pathname
    this.state = {
      sel: hash.startsWith('/movie') ? '/movie/in_theaters' : hash
    }

    props.history.listen(route => {
      const hash = route.pathname
      this.setState({
        sel: hash.startsWith('/movie') ? '/movie/in_theaters' : hash
      })
    })
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[this.state.sel]}
            style={{ display: 'inline-block', width: 300, lineHeight: '64px' }}
          >
            <Menu.Item key="/">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="/movie/in_theaters">
              <Link to="/movie/in_theaters">电影</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>

          <Route path="/" exact component={Home}></Route>
          <Route path="/movie" component={Movie}></Route>
          <Route path="/about" component={About}></Route>

        </Content>
        <Footer style={{ textAlign: 'center' }}>footer Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}

export default withRouter(MovieApp)