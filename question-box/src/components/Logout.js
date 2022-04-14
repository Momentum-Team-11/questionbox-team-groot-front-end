import { Container, Button } from 'react-bulma-components';
import { Navigate } from 'react-router-dom'

export const Logout = ({ setAuth, setToken, setUsername, isLoggedIn}) => {
  
  const setLogout = () => { 
    setUsername("") 
    setToken("")
    setAuth("", "")
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />
  }

  return(
    <Container>
    <h1>Are you sure you want to log out?</h1>
      <div className="field-controls">
        <Button mt="3" onClick={() => setLogout()}>Yes, Log me out</Button>
      </div>
    </Container>
  )
}

