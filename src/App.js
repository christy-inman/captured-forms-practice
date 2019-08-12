import React, {Component} from 'react';
import './App.css';
import PlantList from './components/PlantList'

class App extends Component {
  state = {
    plants: [{
      name: "Fern"
    },{
      name: "Cactus"
    },{
      name: "Devil's Ivy"
    }],
    plant: "",
  }
  handleChange = event => {
    this.setState({
      plant: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      plants: [...this.state.plants, {name: this.state.plant}],
      plant: "",
    })
    
  }
  render() {
    return (
      <div>
        <h1>Plants</h1>
        <PlantList plants={this.state.plants} />
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              placeholder="Enter a plant" 
              value={this.state.plant} 
              onChange={this.handleChange} 
            />
            <input type="submit" value="Add" />
          </form>
      </div>
    )
  }
}

export default App;
