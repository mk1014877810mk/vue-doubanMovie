import React from 'react'

import { Card, Rate } from 'antd';

const in_theaters = [{
  img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1559973783&di=400d1c3112edaf2c83e66e95e6558bdb&src=http://hbimg.b0.upaiyun.com/f8b28a79d598c9a7597a5bec93cf64b8e2f5589435839-ejtiMv_fw658', title: '标题一',
  time: '2019-06-08',
  rate: 8
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559983867915&di=83476dcaa219f057e67434cd5c58926b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F145b42778ec54b3a1b07db216d24961984c0609d744e-fmIsuG_fw658', title: '标题二',
  time: '2019-06-09',
  rate: 9
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559983867913&di=3b8113872c36bba60a19345ace748618&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F9678463fe652730cd52d1285d8874782f428b0ed1f9db-JevoUv_fw658', title: '标题三',
  time: '2019-06-10',
  rate: 8
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559983867912&di=d12c0cd05ad36d28e5d14c2ea12cb45a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa164605c111d5bf56e4f3a3590faab32ca3cd9b2cea2-S3P47q_fw658', title: '标题四',
  time: '2019-06-09',
  rate: 9
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559983867909&di=975ed05fe87b0a4f738141a7deb75c56&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7e3e8d175f280bbe4e735ffed52924e43278af6231f9f-YjVcZM_fw658',
  title: '标题五',
  time: '2019-06-09',
  rate: 9
}
]


const coming_soon = [{
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559983867905&di=2b5269d2ddc8574e0601b6c66ebd4aba&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2FM0kzqYhgaDy4xYATbHnflw%3D%3D%2F6631296464120064259.jpg', title: '标题六',
  time: '2019-06-08',
  rate: 7
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559983867888&di=0fb2d8bc2fbb1e68da93c216f5762171&imgtype=0&src=http%3A%2F%2Fpic.eastlady.cn%2Fuploads%2Ftp%2F201708%2F9999%2F8aa8a85f3b.jpg', title: '标题七',
  time: '2019-06-09',
  rate: 6
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559985330524&di=8a3abed2dfdd61ee43b08d89c08faf8a&imgtype=0&src=http%3A%2F%2Fpic5.nipic.com%2F20100225%2F3279936_172528056232_2.jpg', title: '标题八',
  time: '2019-06-10',
  rate: 8
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559983867912&di=d12c0cd05ad36d28e5d14c2ea12cb45a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa164605c111d5bf56e4f3a3590faab32ca3cd9b2cea2-S3P47q_fw658', title: '标题九',
  time: '2019-06-09',
  rate: 10
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559985728710&di=22bc43aa4e685420fc7f55e2046e243c&imgtype=0&src=http%3A%2F%2Fpic30.nipic.com%2F20130622%2F3617260_182657321000_2.jpg',
  title: '标题十',
  time: '2019-06-09',
  rate: 7
}
]

const top250 = [{
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559985807036&di=bb906c91def06ec5668574df8a7179a3&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc40ee96e83bfbfd9c007120b882c473d59e092b783b06-AHw16L_fw658', title: '标题11',
  time: '2019-06-08',
  rate: 7
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559983867888&di=0fb2d8bc2fbb1e68da93c216f5762171&imgtype=0&src=http%3A%2F%2Fpic.eastlady.cn%2Fuploads%2Ftp%2F201708%2F9999%2F8aa8a85f3b.jpg',
  title: '标题12',
  time: '2019-06-09',
  rate: 6
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559985807027&di=71014fab17d0cab3d73490686777b5fe&imgtype=0&src=http%3A%2F%2Fpic6.nipic.com%2F20100426%2F3017209_172913709428_2.jpg',
  title: '标题13',
  time: '2019-06-10',
  rate: 8
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559985897611&di=8ad061ca5d859ae1801fbabf75530ad8&imgtype=0&src=http%3A%2F%2Fpic17.nipic.com%2F20111018%2F3659847_174638507128_2.jpg',
  title: '标题14',
  time: '2019-06-09',
  rate: 10
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559985922009&di=728a1171fbdfc2ceebb37742a77ec0e9&imgtype=0&src=http%3A%2F%2Fimg5.ph.126.net%2FF9nUurMtslbfvdjT-Tvsyg%3D%3D%2F2483735194511999125.jpg',
  title: '标题15',
  time: '2019-06-09',
  rate: 7
}, {
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559985922009&di=382fa9617ffa94652b202047d7dc6b89&imgtype=0&src=http%3A%2F%2Fs8.sinaimg.cn%2Fmw690%2F006y3Cvyzy74iN1EzEr87%26690',
  title: '标题16',
  time: '2019-06-09',
  rate: 9
}
]

export default class movieList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sel: props.match.params.movieType,
      data: props.match.params.movieType === 'in_theaters' ? in_theaters : (props.match.params.movieType === 'coming_soon' ? coming_soon : top250),
      changeSideBarSel: props.changeSideBarSel
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      sel: nextProps.match.params.movieType,
      data: nextProps.match.params.movieType === 'in_theaters' ? in_theaters : (nextProps.match.params.movieType === 'coming_soon' ? coming_soon : top250)
    })
  }

  goMovieDetail(el, index) {
    window.sessionStorage.setItem('data', JSON.stringify(el));
    this.props.history.push(`/movie/${this.state.sel}/movieDetail`)
  }


  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this.state.data.map((el, index) => {
          return (
            <Card key={index}
              style={{ width: 240, margin: 20, cursor:'pointer' }}
              cover={<img alt="example" src={el.img} />}
              onClick={() => this.goMovieDetail(el, index)}
            >
              <div className="movie-info">
                <h3>{el.title}</h3>
                <div>上映年份：{el.time}</div>
                <Rate disabled allowHalf defaultValue={el.rate / 2} />
              </div>
            </Card>
          )
        })}

      </div>
    )
  }
}