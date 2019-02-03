'use strict';
const Service = require('egg').Service;

class TopicService extends Service {
  async insertTopic(topic) {
    const { ctx } = this;
    return await ctx.model.Topic.create(topic);
  }

  async queryTopicDetail(query) {
    const { ctx } = this;
    return await ctx.model.Topic.findOne({
      where: query,
    })
  }

  async queryTopicCounts(query) {
    const { ctx } = this;

    return await ctx.model.Topic.findAndCountAll({
      where: query,
      order: [[ 'created_at', 'DESC' ]],
    }) 
  }

  async queryTopicList (query) {
    const { ctx } = this;
    return await ctx.model.Topic.findAll({
      where: query,
      order: [['created_at', 'DESC']]
    });
  }

  async topicDetailHandler(topicId) {
    const { ctx } = this;
    let topic = await ctx.service.topic.queryTopicDetail({
      topicId: +topicId
    });

    let userId = topic.userId;
    let user = await this.service.user.getUserByUserId(userId);

    const topicDetail = {
      userInfo: {
        username: user.username,
        avatarUrl: user.avatarUrl,
        userId: user.userId
      },
      topic: {
        topicImgList: topic.topicImg,
        create_at: topic.create_at,
        topicId
      }
    }
    return topicDetail || {}
  }
}

module.exports = TopicService;
