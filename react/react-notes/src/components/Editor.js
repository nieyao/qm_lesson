import React, { Component } from 'react';

// state ? props? 子组件时 内部自身状态state
class Editor extends Component {
  state = {
    entity: this.props.entity, // 修改
    body: this.props.entity.body,
    updateEntity: this.props.updateEntity
  }
  render () {
    return (
      <div className="ui form">
        <div className="field">
          <textarea 
            placeholder="写点东西..." 
            rows="5"
            defaultValue={this.state.body}
            onInput={(event)=> this.state.updateEntity(event)}
          />
        </div>
      </div>
    )
  }
}
export default Editor;