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
 
  async componentDidMount () {

    try {

      setInterval(async () => {

        const res = await fetch('https://wger.de/api/v2/exercise/');
        const exercises = await res.json();

        this.setState({
          exercises: exercises
        })

      }, 1000)

    } catch (e) {
      console.log(e)
    }

  }
  
//   componentDidMount (){
//     const fetchData = async () => {fetch('https://wger.de/api/v2/exercise/')
//     .then(res => res.json())
//     .then(json => {
//       this.setState({
//         isLoading: true,
//         exercises: json,
//       })
  
//     setInterval(() => this.fetchData(),100000);

//     // return () => clearInterval(interval);
  
// });

 
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
