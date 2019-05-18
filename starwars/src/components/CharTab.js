import React from 'react';
import './StarWars.css';

const CharTab = props => {
    return (
        <div className="char-tab">
           <h4>{props.name}</h4>
           <ul>
               <li>Height : {props.height}</li>
               <li>Gender : {props.gender}</li>
           </ul>

        </div>
    );
};

export default CharTab;