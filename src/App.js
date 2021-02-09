import React,{Component} from 'react';
import Login from './components/Login';
import Registration from './components/Register';
import StashInput from './components/StashInput';
import NavBar from './components/NavBar';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Login/>
        <Registration />
        <StashInput/>
      </div>
    )
  }
}

export default App
