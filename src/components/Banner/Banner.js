import React from "react"

function Banner({ type = "sad", children }) {
  return <div className={`banner ${type}`}>{children}</div>
}

export default Banner
