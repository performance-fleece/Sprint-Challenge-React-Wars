import React, { Component } from 'react';
import CharList from './components/CharList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsTest: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    // this.getSpecies('https://swapi.co/api/people/');
  }

 // Attempted to get nested urls fetched

  getNested = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => { 
        let nested = data.results;
        return nested;        
      })
      .catch(err => {
        throw new Error(err);
      });
  };



  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharList 
          starwarsChars={this.state.starwarsChars}
          getNested={this.getNested}
        />
      
      </div>
    );
  }
}

export default App;
