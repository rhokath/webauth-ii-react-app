import React from "react";
import axiosWithCred from '../axiosWithCred';

class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      },
      isLoading: false
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
      axiosWithCred
        .post('http://localhost:4000/api/users/login', this.state.credentials)
        .then(res => {
          console.log(res)
        //   localStorage.setItem('token', res.data.payload);
          this.props.history.push('/users');
        })
        .catch(err => console.log(err.response));
    };
  
    render() {
      return (
        <div className="login">
          <form  className="loginForm" onSubmit={this.login}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button className="loginBtn">Log in</button>
          </form>
        </div>
      );
    }
  }
  
  
  
  export default Login;