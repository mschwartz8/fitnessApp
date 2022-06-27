import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      isLoading: true
    
  }
  }
 
  
  componentDidMount (){
    fetch('https://wger.de/api/v2/exercise/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoading: true,
        exercises: json,
      })
    })
  }

 
  render() {
    console.log(this.state.exercises.results, 'this is state')
    if (!this.state.isLoading){
      return <div>is loading...</div>
    
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            {this.state.exercises.results?.map( exercise => (
                <li key={exercise.id}>
                Name: {exercise.name}
                
                </li>
              ))}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
  }
}



export default App;
