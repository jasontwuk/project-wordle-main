import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const status = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          // Note: only apply "status" style when the "value" is true
          <span className={`cell ${value && status[num].status}`} key={num}>
            {value ? status[num].letter : undefined}
          </span>
        )
      })}
    </p>
  )
}

export default Guess;
