import { Fragment, useEffect, useState } from 'react'

export default function Home() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then(setGreeting)
  }, [])

  return (
    <Fragment>
      <h1>This is the home. {greeting}</h1>
    </Fragment>
  )
}
