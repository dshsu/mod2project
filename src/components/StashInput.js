import React, {Component} from 'react';
import Login from '/login.js';

class StashInput extends Component{
    state = {
        registerContact: {
        first_name: "",
        email_id: ""
      }
    };
  
    handleFormChange = event => {
      let registerNewContact = {...this.state.registerContact};
      console.log("number of data we currently have ", this.state.registerContact.length);
      console.log("Add new contact", registerNewContact);
      let val = event.target.value;
      console.log("event.targe.value is in add contact page: ", val);
      registerNewContact[event.target.name] = val;
      this.setState({
        registerContact: registerNewContact
      });
    };
  
    handleSubmit = event => {
      console.log("Adding contact");
      var len = store.getState().length;
      console.log("length of state array from store is", len);
      /*since i don't have an id for new user entered in UI i am using the length of the array and incrementing it for id.
      This id will be used as a key when displaying in UI.
      **Here we are updating the store with user input data using store.dispatch*/
      store.dispatch({
      type: "Add_Contact",
      payload:{
      Name:this.state.registerContact.first_name,
      Avatar:this.state.registerContact.avatar,
      Email: this.state.registerContact.email_id,
      Id:++len
    }
  })
      this.setState({
        isSuccessful: true
      });
      event.preventDefault();
    };
  
    render() {
      return (
        <form onSubmit = {this.handleSubmit} >
        <span > Add Your Contact Form ! < /span><br / >
             <input type = "text"
               name = "first_name"
               pattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
               title="Only Characters"
               onChange = {this.handleFormChange}
               placeholder = "First name" required />
             <span className="asterisk_input">  </span>
             <input type = "text"
               name = "last_name"
               pattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
               title="Only Characters"
               onChange = {this.handleFormChange}
               placeholder = "Last name" required />
               <span className="asterisk_input">  </span>
             <input type = "text"
               name = "email_id"
               pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
               title="Only valid email address"
               onChange = {this.handleFormChange}
               placeholder = "Email Address" required />
               <span className="asterisk_input">  </span>
             <input type = "url"
               name = "avatar"
               id = "urlList"
               onChange = {this.handleFormChange}
               pattern="https://.*"
               placeholder = "Add your avatar with an url - https://example.com"  />
  
        <input type = "submit"
               value = "Add Contact" / >
        {this.state.isSuccessful && < Redirect to = "/dashboard" / >}
        < /form>
      );
    }
  }
  
  export default FlightInfo;
}