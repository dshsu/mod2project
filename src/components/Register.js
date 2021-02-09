import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
class Registration extends Component {
  state = {
    registerParams: {
      first_name: "",
      last_name: "",
      user_name: "",
      user_password: "",
      email_id: ""
    },
    isSuccessful: false,
    isCancel: false
  };

  handleFormChange = event => {
    let registerParamsNew = {
      ...this.state.registerParams
    };
    console.log("register new params", registerParamsNew);
    let val = event.target.value;
    console.log("event.targe.value is in registration page: ", val);
    registerParamsNew[event.target.name] = val;
    this.setState({registerParams: registerParamsNew});
  };

  handleSubmit = event => {
    console.log("handle submit");
    let user_name = this.state.registerParams.user_name;
    let user_password = this.state.registerParams.user_password;
    if (user_name === "admin" && user_password === "1234") {
      this.setState({isSuccessful: true});
    }
    event.preventDefault();
  };

  handleClick = event =>{
    console.log("inside handle click -- registration page");
    this.setState({isCancel:true});
  }

  render() {
    return (<Wrapper>
      <form onSubmit={this.handleSubmit}>
        <span>Welcome to Registration Form!</span><br/>
        <input type="text" name="first_name" required="required" pattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" title="Only Characters" onChange={this.handleFormChange} placeholder="First name"/>
          <span className="asterisk_input">  </span>
        <input type="text" name="last_name" required="required" pattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" title="Only Characters" onChange={this.handleFormChange} placeholder="Last name"/>
          <span className="asterisk_input">  </span>
        <input type="text" name="email_id" required="required" onChange={this.handleFormChange} placeholder="Your Email Address"/>
          <span className="asterisk_input">  </span>
        <input type="text" name="user_name" required="required" onChange={this.handleFormChange} placeholder="Enter User Name"/>
          <span className="asterisk_input">  </span>
        <input type="password" name="user_password" required="required" onChange={this.handleFormChange} placeholder="Enter Password"/>
          <span className="asterisk_input">  </span>
        <input type="submit" value="Register"/> {this.state.isSuccessful && <Redirect to="/login"/>}
      </form>
      <input type="submit" value="Cancel" onClick={this.handleClick}/>
      {this.state.isCancel && <Redirect to="/login"/>}
      <p>Please use User Name: "admin" && Password: "1234" during the registration as SERVER IS DOWN!! :((
      </p>
      <p>You will be redirected to Log In page
      </p>

    </Wrapper>);
  }
}


export default Registration;