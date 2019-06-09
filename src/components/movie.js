import React from 'react'

import { Layout, Menu } from 'antd';

import { Route, Link } from 'react-router-dom'

import MovieList from './movieList'
import MovieDetail from './movieDetail'

import '../css/movie.css'

const { Sider, Content } = Layout

export default class movie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      sel: '/' + props.location.pathname.split('/')[2]
    }

    props.history.listen(route => {
      const hash = '/' + route.pathname.split('/')[2];
      this.setState({
        sel: hash
      })
    })
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu theme="dark" mode="inline" selectedKeys={[this.state.sel]}>
            <Menu.Item key="/in_theaters">
              <Link to="/movie/in_theaters">
                <span>正在热映</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/coming_soon">
              <Link to="/movie/coming_soon">
                <span>即将上映</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/top250">
              <Link to="/movie/top250">
                <span>top250</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <Route exact path="/movie/:movieType" component={MovieList}></Route>
            <Route exact path="/movie/:movieType/movieDetail" component={MovieDetail}></Route>
          </Content>
        </Layout>
      </Layout>
    )
  }
}