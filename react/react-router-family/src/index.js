import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
// 鉴权
const fakeAuth = {
  iSAuthenticated: false,
  authenticate(cb) {
    this.iSAuthenticated = true;
    setTimeout(cb,1000);
  },
  signout(cb) {
    this.iSAuthenticated = false;
    setTimeout(cb,1000);
  }
}

function AuthExample () {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  )
}

const AuthButton = withRouter(({history}) => {
  return fakeAuth.iSAuthenticated ? (
    <p>
      Welcome!
      <button onClick={() => {fakeAuth.signout(() => {history.push('/')})}}>Sign out</button>
    </p>
  ): (
    <p>You are not logged in.</p>
  )
})

function Public () {
  return <div>Public</div>;
}

function PrivateRoute ({component: Component, ...rest}) {
  // console.log({rest})
  return (
    <Route {...rest} render={
      props => fakeAuth.iSAuthenticated ? (<Component />) :<Redirect to={{pathname: '/login',state:{from:props.location}}} />
    } />
  )
}

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  Login = () => {
    // fakeAuth.iSAuthenticated = true;
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }
  render () {
    let {from} = this.props.location.state || {from:{pathname: '/'}};
    if ( this.state.redirectToReferrer) return <Redirect to={from}/>
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.Login}>Log in</button>
      </div>
    )
  }
}

function Protected () {
  return <div>Protected</div>
}
ReactDOM.render(<AuthExample />,document.getElementById('root'))