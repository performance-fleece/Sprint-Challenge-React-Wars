import React from 'react';
import './StarWars.css';

const CharTab = props => {
    return (
      <div className="char-tab">
        <h4>{props.name}</h4>
        <ul>
          <li>Height : {props.starwarsChars.height}</li>
          <li>Gender : {props.starwarsChars.gender}</li>
          <li>Mass : {props.starwarsChars.mass}</li>
          <li>Skin Color : {props.starwarsChars.skin_color}</li>
        </ul>
      </div>
    );
};

export default CharTab;