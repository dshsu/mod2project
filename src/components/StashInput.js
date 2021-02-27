import React, {Component} from 'react';
//this is the bulk of the app - it adds the input yarn into the stash.
export default function StashInput(){
  const [yarnNum, setYarnNum] = useState({});
    const handleChange = ({ target}) =>{
      const{name, value} = target;
    }
  const [color,setYarnColor] = useState({});
  const [weight, setYarnWeight] = useState({});
  const [fiber, setYarnFiber] = useState({});
}
class YarnInput extends Component{
    state = {
        yarnType: {
        color: "",
        weight: "",
        fiber:"",
        count
      }
    };
  
    handleFormChange = event => {
      let inputYarn = {...this.state.yarnType};
      console.log("number of data we currently have ", this.state.yarnType.length);
      console.log("Add new yarn to stash", inputYarn);
      let val = event.target.value;
      console.log("event.target.value is in add to stash: ", val);
      inputYarn[event.target.name] = val;
      this.setState({
        yarnType: inputYarn
      });
    };
  
    handleSubmit = event => {
      console.log("Adding to Stash");
      
      store.dispatch({
      type: "Add Yarn",
      payload:{
      Color:this.state.yarnType.color,
      Weight:this.state.yarnType.weight,
      Fiber: this.state.yarnType.fiber,
      Quantity: this.state.yarnType.count,
    }
  })
      this.setState({
        isSuccessful: true
      });
      event.preventDefault();
    };
  
    render() {
      return (
        <form onSubmit = {this.handleSubmit}>
        <span > Enter your stash here: </span><br />
             <input type = "text"
               name = "color"
               title="Color"
               onChange = {this.handleFormChange}
               placeholder = "Yarn Color" required />
             
             <input type = "text"
               name = "weight"
               title="Yarn Weight (Bulky, DK, Lace, etc)"
               onChange = {this.handleFormChange}
               placeholder = "Yarn Weight" required />
               <span className="asterisk_input">  </span>
             <input type = "text"
               name = "fiber"
               title="Fiber Content"
               onChange = {this.handleFormChange}
               placeholder = "Yarn Fiber" required />
              
               <input type = "number"
               name = "count"
               title="Only a number"
               onChange = {this.handleFormChange}
               placeholder = "How many skeins" required />
  
        <input type = "submit"
               value = "Add Yarn" / >
        {this.state.isSuccessful && < Redirect to = "/dashboard"/>}
        </form>
      );
    }
  }
