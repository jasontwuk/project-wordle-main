import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [results, setResults] = useState([
    {
      id: "1",
      value: "",
    },
    {
      id: "2",
      value: "",
    },
    {
      id: "3",
      value: "",
    },
    {
      id: "4",
      value: "",
    },
    {
      id: "5",
      value: "",
    },
    {
      id: "6",
      value: "",
    },
  ]);
  const [submitCount, setSubmitCount] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const [win, setWin] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Note: limit submit times
    if(submitCount < NUM_OF_GUESSES_ALLOWED) {
      // Note: this setSubmitCount() only will be executed after the everything else in handleSubmit() function is done
      setSubmitCount(submitCount + 1);

      // Note: display results
      const newResult = (
        {
          id: crypto.randomUUID(),
          value: guess,
        }
      );

      // Note: replace the resulat item
      // Note: because the delay of the setSubmitCount(), so the submitCount value is start at 0 not 1
      const nextResults = [...results];
      nextResults[submitCount]=newResult;

      setResults(nextResults);

      // Note: show win banner
      if(answer === guess) {
        setShowBanner(true);
        setWin(true);
      }

      // Note: show lose banner
      // Note: because the delay of the setSubmitCount(), so we have to minus 1
      if(submitCount >= NUM_OF_GUESSES_ALLOWED - 1) {
        setShowBanner(true);
      }
    }

    // Note: empty guess input
    setGuess("");
  }  

  return (
    <>
      <GuessResults results={results} answer={answer} />
      <GuessInput guess={guess} setGuess={setGuess} handleSubmit={handleSubmit} showBanner={showBanner} />
      {showBanner && (
        win ? (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              {" "}
              <strong>{submitCount === 1 ? "1 guess" : `${submitCount} guesses`} </strong>.
            </p>
          </div>
        ) : (
          <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </div>
        )
      )}
    </>
  );
}

export default Game;
