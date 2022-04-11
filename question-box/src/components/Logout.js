export const Logout = ({ setAuth, setToken, setUsername, isLoggedIn}) => {
  
  const setLogout = () => { 
    setUsername("") 
    setToken("")
    setAuth("", "")
  }

  return(
    <div className="field-controls">
      <button onClick={() => setLogout()}>Log out</button>
    </div>
  )
}

