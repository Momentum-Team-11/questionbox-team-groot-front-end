import { useState } from 'react';
import Topbar from './components/Topbar';
import QuestionList from './components/QuestionList';
// import QuestionDetail from './components/QuestionDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import useLocalStorageState from 'use-local-storage-state'


const App = () => {
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('Token', '')
  const [username, setUsername] = useLocalStorageState('Username', '')
  const [loggedIn, setIsLoggedIn] = useState(false) //bc i don't know how to use isLoggedin
  console.log(token)

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const isLoggedIn = username && token
    // {isLoggedIn === true ? (
    //   setIsLoggedIn(true)
    // ) : (
    //   setIsLoggedIn(false)
    // )}


  return (   
    <div className="App">
      
      {/* <h1 className='container is-fluid'>Phone a Friend!</h1> */}
    <Router>
      <Topbar 
        element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />}

      />
      <Routes>
        <Route path="/" element={<QuestionList token={token} />} />
        <Route path="home" element={<QuestionList token={token} />}></Route>
        {/* <Route
          path="questions/:pk"
          element={<QuestionDetail token={token} />}
        ></Route> */}
        <Route
          path="/login"
          element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </Router>
    {/* <div style={{ margin: '4%' }}>
      <div className="question-list">
        <QuestionList />
      </div>
      </div> */}
      
    </div>
  )
  }

export default App;

