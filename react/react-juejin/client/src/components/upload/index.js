import React from 'react';
import Style from './index.scss';
import { notification } from 'antd';
import API from '@common/api.js';
import PropTypes from 'prop-types';
import * as qiniu from 'qiniu-js';

class Upload extends React.Component {
  uploadFn = async () => {
    let files = this.refs.upload.files;
    console.log(files);
    // 是否是一张照片？
    // 七牛 
    if (!this.imageVerify()) return;
    
  }

  imageVerify = () => {
    let files = this.refs.upload.files;
    let fileType = files[0].type;
    if (/^image/.test(fileType)) {
      return true;
    } else {
      notification.error({
        message: '请选择图片类型文件'
      })
      return false;
    }
  }
  render () {
    return (
      <input ref='upload' className={Style['upload-image']} type='file' 
      onChange={this.uploadFn} accept="image/*" />
    )
  }
}

Upload.defaultProps = {
  successCb: () => {}
}

export default Upload;