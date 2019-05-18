import React from 'react';
import CharTab from './CharTab';

const CharList = props => {
    return (
        <div className="char-list">
            {props.starwarsChars.map(tab => (
                <CharTab
                key={tab.created}
                name={tab.name}
                starwarsChars={tab}
                />
            ))};
        </div>
    );
}

export default CharList;