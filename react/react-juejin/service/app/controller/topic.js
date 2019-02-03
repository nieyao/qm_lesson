'use strict';

const Controller = require('egg').Controller;

class TopicController extends Controller {
  async topicDetail() {
    const { ctx } = this;
    const { topicId } = ctx.request.query;
    let topicDetail = await ctx.service.topic.topicDetailHandler(topicId);
    ctx.returnBody(200, '成功', topicDetail);
  }
  async addTopic() {
    const { ctx } = this;
    const { topicImg, topicTitle } = ctx.request.body;
    let userId = ctx.user.userId

    let newTopic = {
      topicImg: JSON.stringify(topicImg),
      topicTitle: topicTitle,
      userId
    }

    await ctx.service.topic.insertTopic(newTopic);
    ctx.returnBody(200, '发帖成功');
  }

  async friendsTopicList() {
    // 关注者[] 自己
    // topic in 
    const { ctx } = this;
    let userId = ctx.user.userId;

    // 关注
    let follower = await ctx.service.follow.findFollow({
      followedId: userId,
      status: 1,
    });
    // console.log(follower);
    let followList = follower.map(item => {
      return item.userId;
    });
    followList.push(userId);

    const Op = this.app.Sequelize.Op;
    let topics = await ctx.service.topic.queryTopicList({
      userId: {
        [Op.in]: followList
      }
    })

    // userinfo
    let topicList = [];
    for (let topic of topics) {
      let item = await ctx.service.topic.topicDetailHandler(topic.topicId);
      console.log(item);
      topicList.push(item);
    }

    topicList && ctx.returnBody(200, '成功', topicList);
  }
}

module.exports = TopicController;
