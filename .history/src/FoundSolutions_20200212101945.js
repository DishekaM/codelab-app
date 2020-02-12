import React from 'react';
import './FoundSolutions.css';
import { Label } from 'semantic-ui-react';

function FoundSolutions({words, headerText}) {

  return (
    <div className="Found-solutions-list">
      {words.length > 0 &&
        <h4>{headerText}: {words.length}</h4>
      }
      <Label as='a' basic pointing>
        {words.map((solution) => {return <ul key={solution}>{solution}</ul>})}
      </Label>
    </div>
  );
}

export default FoundSolutions;
