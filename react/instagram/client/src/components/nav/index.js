import React from 'react';
import { Menu, Dropdown, notification } from 'antd';
import { Link } from 'react-router-dom';
import Style from './index.scss';
console.log(Style)

class Nav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toggle: true,
      focusStatus: false,
      search: ''
    }
  }
  focusSearchInput () {
    this.setState({
      'focusStatus': !this.state.focusStatus
    })
  }

  handleChange (event) {
    this.setState({
      search: enent.target.value
    })
  }

  focusSearchInput () {
    this.setState({
      'focusStatus': !this.state.focusStatus
    })
  }

  searchContent = (event) => {
    if (event.key === 'Enter') {
      console.log('search api')
    }
  }
  render () {
    const aboutMenu = (
      <Menu>
        <Menu.Item>关于我</Menu.Item>
        <Menu.Item>退出登录</Menu.Item>
      </Menu>
    );
    return (
      <nav className={Style['page-header']}>
      <div className='header toggle'>
      <div className='logo-space'>
        {
          this.state.toggle?
          <Link className='instagram' to={'/'} />
          :
          <Link className='icon' to={'/'} />
        }
        </div>
        <div className='search'>
        {
          this.state.focusStatus?
          <div className='search-content'>
            <input type="text" className='search-input' placeholder="搜索"
            autoFocus={this.state.focusStatus} onChange={this.handleChange.bind(this)}
            onBlur={this.focusSearchInput.bind(this)} onKeyPress={this.searchContent} />
            <span className='icon'></span>
          </div>
          :
          <div className='search-block' onClick={this.focusSearchInput.bind(this)}>
            <span className='block-icon'></span>
            <span className='block-text'>搜索</span>
          </div>
        
        }
        </div>
        <div className='navigate'>
          <Link className='explore' to={'/'} />
          <Link className='love' to={'/'} />
          <Dropdown overlay={aboutMenu} >
            <Link className='user' to={'/about'} />
          </Dropdown>
        </div>
      </div>
    </nav>
    )
  }
}

export default Nav;