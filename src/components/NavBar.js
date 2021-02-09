import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class NavBar extends Component{
    /*this is the main navigation area for the app. It should stick to the top 
    of the site and direct the user to areas of the app.
    it should consist of buttons that, when clicked, will direct the user to other
    components*/
    render(){
        return(
            <h1>Yet Another Knitting App is Here!</h1>
        );
    }
}
export default NavBar;