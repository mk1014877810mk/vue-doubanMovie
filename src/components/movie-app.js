import React, { Component } from 'react'
import '../css/movie-app.css'

// 导入路由
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Home from './home'
import Movie from './movie'
import About from './about'

import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout

export default class MovieApp extends Component {

  constructor(props) {
    super(props)
    const hash = window.location.hash || '#/'
    this.state = {
      sel: hash.substr(1).startsWith('/movie') ? '/movie/in_theaters' :hash.substr(1)
    }
  }

  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[this.state.sel]}
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
      </Router>
    )
  }
}