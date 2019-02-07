import React from 'react';
import Style from './index.scss';
import API from '@common/api.js';
import { notification } from 'antd';
import { connect} from 'react-redux';

@connect(store => {
  return {
    userInfo: store.userInfo
  }
})
class Comments extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      replyContent: ''
    }
  }

  handleChange (event) {
    this.setState({
      replyContent: event.target.value
    })
  }

  async _handleKeyPress (event) {
    if (event.key === 'Enter') {
      if (!this.state.replyContent) {
        notification['error']({
          message: '请输入评论内容'
        })
        return;
      }
      let response = await API.addDiscuss({
        topicId: this.props.topicId,
        replyContent: this.state.replyContent
      })
      console.log(response,response.message)
      notification['success']({
        message: response.message
      })

      this.setState({
        replyContent: ''
      })
    }
  }

  async topicLike () {
    let response = await API.topicLike({topicId: this.props.topicId, status: 1});

    console.log(response);
  }
  render () {
    return (
      <div className={Style['comments-section']}>
        <div className="opetions">
          <div className="fl-left">
            <span className="favorite" onClick={this.topicLike.bind(this)}></span>
            <span className="comments"></span>
          </div>
        </div>
        <div className="add-comments">
          <input type="text" ref="textInput" className="u-f-black"
          placeholder="添加评论" value={this.state.replyContent}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this._handleKeyPress.bind(this)} />
          <span className="more"></span>
        </div>
      </div>
    )
  }
}

export default Comments;