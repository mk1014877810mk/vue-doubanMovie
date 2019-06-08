import React from 'react'

import { Row, Col, Rate } from 'antd';
export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: JSON.parse(window.sessionStorage.getItem('data'))
    }
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <img style={{width:'100%'}} src={this.state.data.img} alt=""/>
          </Col>
          <Col span={12} style={{padding:20}}>
            <h2>名称：{this.state.data.title}</h2>
            <p>时间：{this.state.data.time}</p>
            <span>评分：</span>
            <Rate disabled allowHalf defaultValue={this.state.data.rate / 2} />
          </Col>
        </Row>
      </div>
    )
  }
}