import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      Hello World!
      <Link to="/login">login</Link>
    </div>
  )
}
