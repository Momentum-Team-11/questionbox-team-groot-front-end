import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { Notification, Form, Button, Box } from 'react-bulma-components';



export default function Login({ setAuth, isLoggedIn, registerSuccess, setRegisterSuccess }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (event) => {
    // prevent the default action of the form, which is to make a request
    event.preventDefault()
    // clear errors since we could be re-submitting form data
    setError('')
    // Make an ajax request to the backend's URL for login
    // Use the username and password from state to send in the request body
    axios
      .post('https://phone-a-friend.herokuapp.com/api/auth/token/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data)
        setAuth(username, res.data.auth_token)
        setRegisterSuccess("")
      })
      .catch((e) => setError(e.message))
  }

  if (isLoggedIn) {
    return <Navigate to="/" />
  }

  return (
    <div className="Login">
      <Box style={{ width: 400, margin: 'auto' }}>
      {error && <div className="error">{error}</div>}
      {registerSuccess && 
        <Notification color="success">
          <strong>Registration Succesful! </strong>
            Please login below to get started!
        </Notification>}
      <form onSubmit={handleLogin}>
        <Form.Field className="field-controls">
          <Form.Label className="input-label" htmlFor="username">
            Username
          </Form.Label>
          <Form.Input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>

        <Form.Control className="field-controls">
          <Form.Label className="input-label" htmlFor="password">
            Password
          </Form.Label>
          <Form.Input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Control>
        <div className="field-controls">
          <Button.Group align="right" mt="4">
            <Button color="primary" type="submit">Log in</Button>
          </Button.Group>
        </div>
      </form>
      </Box>
    </div>
  )
}

{/* <>
  <Form.Field>
    <Form.Label>
      Username
    <Form./Label>
    <Control>
      <Input
        placeholder="e.g. John Doe"
        type="text"
      />
    </Control>
  </Field>
  <Field>
    <Label>
      Password
    </Label>
    <Control>
      <Input
        placeholder="password"
        type="password"
      />
    </Control>
  </Field>
</> */}