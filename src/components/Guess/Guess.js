import React from "react"

import { range } from "../../utils"

function Guess({ guess }) {
  if (!guess)
    return (
      <p className="guess">
        {range(5).map((index) => (
          <span key={index} className="cell" />
        ))}
      </p>
    )

  return (
    <p className="guess">
      {guess.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
