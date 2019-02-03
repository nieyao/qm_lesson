import React from 'react';
import Style from './index.scss';
import Nav from '@components/nav/index';
import Recommend from './components/recommend';
import API from '@common/api.js';
import update from 'react-addons-update';
import DynamicList from './components/dynamic-list';

class Detail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      followList: []
    }
    this.initFriendList(); // 获取推荐关注用户
    this.initFriendTopic(); //获取关注用户的Topic列表
  }
  async initFriendList () {
    let response = await API.friendList();
    // console.log(response);
    let followList = response.data.map(item => {
      item.hasFollow = false;
      return item;
    });
    this.setState({
      followList
    })
  }

  async initFriendTopic () {
    let response = await API.friendTopicList()
    console.log(response)
  }

  setFollowStatus = async (index, status) => {
    let followList = this.state.followList;
    await API.followUser({
      userId: followList[index].userId,
      status: status ? 1 : 0
    })
    this.setState({
      followList: update(this.state.followList, {
        [index]: {
          hasFollow: {$set: status}
        }
      })
    })
  }
  render () {
    return (
      <main>
        <Nav />
        <div className="page-container">
          <span className="loading"></span>
          <div className={Style['home-detail']}>
            <DynamicList />
            <Recommend followList={this.state.followList}
              setFollowStatus={this.setFollowStatus} />
          </div>
        </div>
      </main>
    )
  }
}

export default Detail;