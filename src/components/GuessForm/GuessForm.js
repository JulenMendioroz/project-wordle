import React from "react"

function GuessForm({ onSubmit }) {
  const [guess, setGuess] = React.useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(guess)
    setGuess("")
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[A-Z]{5,5}"
      />
    </form>
  )
}

export default GuessForm
