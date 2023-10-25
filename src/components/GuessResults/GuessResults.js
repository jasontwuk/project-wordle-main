import React, { useState } from 'react';
import Guess from '../Guess/Guess';

function GuessResults({ results, answer }) {

  return (
    <div className="guess-results">
      {results.map(({id, value}) => {
        return (
          <Guess value={value} key={id} answer={answer} /> 
        )
      })}
    </div>
  );
}

export default GuessResults;
