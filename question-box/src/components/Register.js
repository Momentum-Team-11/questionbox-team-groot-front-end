import { Navigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Box } from 'react-bulma-components';

const Register = ({ isLoggedIn }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = (e) => {
    console.log("making post");
    e.preventDefault();
    setError("");
    console.log(username, password);
      axios
        .post('https://phone-a-friend.herokuapp.com/api/auth/users/', {
          username: username,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          setIsRegistered(true);
          console.log(isRegistered)
        })
        .catch((e) => setError(e.message))
      }

  if (isLoggedIn) {
    return <Navigate to='/' />
  }

  if (isRegistered) {
    console.log("Registered!")
    return <Navigate to='/login' />
  }

  return (
    <div className="Register">
      <h2>Sign up here to phone a friend!</h2>
      <Box style={{ width: 400, margin: 'auto' }}>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleRegistration}>
        <Form.Field className='field-controls'>
          <Form.Label htmlFor='reg-username'>Choose a Username: </Form.Label>
          <Form.Input
            type='text'
            className='text-input'
            id='reg-username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>
        <Form.Field className='field-controls'>
          <br></br>
          <Form.Label htmlFor='password'>Choose a Password: </Form.Label>
          <Form.Input
            type='password'
            className='password-reg'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button.Group align="right" mt="4" className='field-controls'>
          <Button color="primary" type='submit'>Register</Button>
        </Button.Group>
      </form>
    </Box>
    </div>
  );
}

export default Register