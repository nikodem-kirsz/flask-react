import React, {useEffect, useState} from 'react'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/api/endpoint1')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error(error))
    }, [])

    return (
      <div>
        <h1>Hello from React!</h1>
        <p>{message}</p>
      </div>
    )
}

export default App