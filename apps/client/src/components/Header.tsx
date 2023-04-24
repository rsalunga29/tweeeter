import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Fragment>
      <h1>Header</h1>
      <p>Testing</p>
      <br />
      <br />
      <Link to="/">Home</Link>
      <Link to="/another">Another</Link>
    </Fragment>
  )
}
