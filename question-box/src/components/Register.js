import { Navigate, Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Register = ({ isLoggedIn }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = (e) => {
    console.log('making post');
    e.preventDefault();
    setError('');
    console.log(username, password);
      axios
        .post('https://questionbox-rocket.herokuapp.com/auth/users/', {
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

  if (isLoggedIn || isRegistered) {
    return <Navigate to='/login' />
  }

  return (
    <>
      <h2>Sign up here to phone a friend!</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleRegistration}>
        <div className='field-controls'>
          <label htmlFor='reg-username'>username: </label>
          <input
            type='text'
            className='text-input'
            id='reg-username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='field-controls'>
          <br></br>
          <label htmlFor='password'>password: </label>
          <input
            type='password'
            className='password-reg'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='field-controls'>
          <button type='submit'>Register</button>
        </div>
      </form>
      <div className='field-controls'>
        <Link to='/login'>Go to Login</Link>
      </div>
    </>
  );
}

export default Register