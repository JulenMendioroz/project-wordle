import React from "react"

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from "../../utils"
import Guess from "../Guess"

function GuessResults({ guessResults, numOfGuesses = NUM_OF_GUESSES_ALLOWED }) {
  return (
    <div className="guess-results">
      {guessResults.map(({ id, guess }) => (
        <Guess key={id} guess={guess} />
      ))}
      {range(guessResults.length, numOfGuesses).map((index) => (
        <Guess key={index} />
      ))}
    </div>
  )
}

export default GuessResults
