import instance from './axiosInstance.js';

exports.login = (data) => {
  return instance.post('/login', data);
}

exports.getUserInfo = (data) => {
  return instance.get('/user/info', data);
}

exports.signout = () => {
  return instance.get('/login/signout');
}

exports.friendList = () => {
  return instance.get('/friend/list');
}

exports.followUser = (data) => {
  return instance.post('/friend/follow', data);
}

exports.friendTopicList = () => {
  return instance.get('/topic/friend/list')
}