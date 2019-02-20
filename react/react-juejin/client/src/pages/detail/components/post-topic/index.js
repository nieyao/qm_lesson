import React from 'react';
import Style from './index.scss';
import Avatar from '@components/avatar';
import { connect } from 'react-redux';
import Upload from '@components/upload';


let ImageUpload = ({uploadImgSuccess, changeUploadStatus}) => {
  return (
    <section className="image-upload">
      <div>
        <span className="icon camera"></span>
        <span>
          <Upload successCb={uploadImgSuccess} className={'placeholder'}>上传照片</Upload>
        </span>
      </div>
      <div>
        <span className="icon network" onClick={() => {changeUploadStatus(1)}}></span>
        <span>从网络添加图片</span>
      </div>
    </section>
  )
}

@connect(
  store => {
    return {
      userInfo: store.userInfo
    }
  }
)
class PostTopic extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      uploadStatus: 0,
      topicDescript: '',
      imageList: []
    }
  }
  render () {
    let { userInfo} = this.props;

    let avatarStyle = {
      width: '40px',
      height: '40px'
    }
    let ImgUpload = () => {
      return (
        <section className="input-url" key={2}>
          <div className="notice">
            <span className="close-circle" onClick={this.closeInputUrl}></span>
            <i className="icon"></i>
            <span>
              <Upload successCb={this.uploadImgSuccess} className={'placeholder'} />
              添加另一张
            </span>
          </div>
        </section>
      )
    }
    let UploadPlaceholder = () => {
      return (
        <div>
          
          {
            this.state.uploadStatus === 0 ?
            <ImageUpload uploadImgSuccess={this.uploadImgSuccess} 
            changeUploadStatus={this.changeUploadStatus} />
            : ''
          }
        </div>
      )
    }
    return (
      <div className={`${Style['post-topic']}`}>
        <section className="topic-content">
          <header>
          <Avatar userInfo={userInfo} avatarStyle={avatarStyle} />
          </header>
          <div className="upload-style">
            <UploadPlaceholder successCb={this.uploadImgSuccess} />
          </div>
          <textarea cols="50" rows="4" placeholder="愿意的话可以添加说明" 
          value={this.state.topicDescript} onChange={this.handleChangeTextArea}></textarea>
          <footer className="footer">
          <span className="close" onClick={() => this.props.togglePostTopic()}>关闭</span>
          <span className="post" onClick={this.postTopic}>发帖</span>
        </footer>
        </section>
      </div>
    )
  }

  uploadImgSuccess = (url) => {
    this.setState({
      imageList: [...this.state.imageList, url],
      uploadStatus: 2
    })
  }
  changeUploadStatus = (status) => {

  }
  handleChangeTextArea = (event) => {
    this.setState({
      topicDescript: event.target.value
    })
  }

  postTopic = async () => {
    
  }
}

export default PostTopic;