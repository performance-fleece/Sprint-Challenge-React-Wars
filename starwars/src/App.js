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

  // getMultiple = URL => {
  //   fetch(URL)
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(res => {
  //     var urlArray =[]
  //     if (res.length > 0) {
  //       res.map(data => urlArray.push(data.url))
  //     }
  //     return urlArray
  //   })
  //   .then(urls => {
  //     return Promise.all(urls.map(url => {
  //       return fetch(url).then(res => res.json())
  //     }
  //     ))
  //   })
  //   .then(res => {
  //     var objArr = res; 
  //     this.setState({ starwarsTest: objArr });
  //   })
  //   .catch(err => {
  //     throw new Error(err);
  //   });
  // };

  

  // getNested = URL => {
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();

  //     })
  //     .then(data => {
  //       return data.results;
  //     })
  // }

  // getSpecies = URL => {
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {

  //       data.results.map(char => {
  //         const charArray = char.results;
  //         const specArray = char.getNested(char.species);
  //         charArray.push(specArray);
  //         console.log(charArray)
  //       }
  //     )
        
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };

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
        />
      
      </div>
    );
  }
}

export default App;
