import React, { useState } from "react"

import { checkGuess } from "../../game-helpers"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { sample } from "../../utils"
import { WORDS } from "../../data"
import Banner from "../Banner/Banner"
import GuessForm from "../GuessForm"
import GuessResults from "../GuessResults"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guessResults, setGuessResults] = useState([])

  const hasReachedLimit = guessResults.length === NUM_OF_GUESSES_ALLOWED
  const matchesAnswer = guessResults.some(({ guess }) =>
    guess.every(({ status }) => status === "correct")
  )

  const hasFinished = matchesAnswer || hasReachedLimit

  const handleNewGuess = (newGuess) => {
    if (hasFinished) return
    const guess = checkGuess(newGuess, answer)
    const id = crypto.randomUUID()
    setGuessResults([...guessResults, { id, guess }])
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessForm onSubmit={handleNewGuess} />
      {hasFinished &&
        (matchesAnswer ? (
          <Banner type="happy">
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>{guessResults.length} guesses</strong>.
            </p>
          </Banner>
        ) : (
          <Banner type="sad">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>
            </p>
          </Banner>
        ))}
    </>
  )
}

export default Game
