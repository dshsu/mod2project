import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Login extends Component {
  state = {
    islogged: false,
    loginParams: {
      user_id: "",
      user_password: ""
    },
    newUser: false,
    checkCredentials:true
  };

  handleFormChange = event => {
    let loginParamsNew = {
      ...this.state.loginParams
    };
    let val = event.target.value;
    console.log("event.targe.value is: ", val);
    loginParamsNew[event.target.name] = val;
    this.setState({loginParams: loginParamsNew});
  };

  handleLogin = event => {
    console.log("handle login");
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "1234") {
      this.setState({islogged: true});
    }
    else this.setState({checkCredentials: false});
    event.preventDefault();
  };

  registerUser = event => {
    event.preventDefault();
    console.log("register user");
    this.setState({newUser: true});
  }

  render() {
    const msg = "Please enter a valid username/password"
    return (
      
      <form onSubmit={this.handleLogin}>
        <span>Please sign in</span><br/>
      <input type="text" name="user_id" required 
      onChange={this.handleFormChange} placeholder="Enter Username" />
        <span className="asterisk_input">  </span>
      <input type="password" name="user_password" required 
      onChange={this.handleFormChange} placeholder="Enter Password"/>
        <span className="asterisk_input">  </span>
        <input type="submit" value="Login"/>
      <input type="submit" value="Register as New User" 
      onClick={this.registerUser}/> {this.state.islogged && <Redirect to="/dashboard"/>}
        {this.state.newUser && <Redirect to="/registration"/>}
        {!this.state.checkCredentials && <p>{msg}</p>}
      </form>
    );
  }
}

export default Login;

