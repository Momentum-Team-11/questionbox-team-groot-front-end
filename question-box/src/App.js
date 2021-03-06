import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
import Home from './components/Home';
import AskQuestion from './components/AskQuestion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserAnswers from './components/UserAnswers';
import UserQuestions from './components/UserQuestions';
import useLocalStorageState from 'use-local-storage-state';
import { Logout } from './components/Logout';
import NavBar from './components/NavBar';
import Search from './components/Search';
import { useState } from 'react';

const App = () => {
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('Token', '')
  const [username, setUsername] = useLocalStorageState('Username', '')
  const [registerSuccess, setRegisterSuccess] = useState("")
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
      <NavBar
        isLoggedIn={isLoggedIn}
        />
      {/* <Search
        token={token}
        />  */}
      <Routes>
        <Route path="/questions" element={<QuestionList token={token} username={username} />}> </Route>
        <Route path="/" element={<Home token={token} />}></Route>
        <Route path="/ask" element={<AskQuestion username={username} isLoggedIn={isLoggedIn} token={token} />}></Route>
        <Route
          path="/questions/:questionId"
          element={<QuestionDetail token={token} username={username}/>}
        ></Route>
        
        <Route
          path="/login"
          element={<Login setAuth={setAuth} setToken={setToken} isLoggedIn={isLoggedIn} setRegisterSuccess={setRegisterSuccess} registerSuccess={registerSuccess} />}
        />
        <Route
            path="/register"
            element={<Register isLoggedIn={isLoggedIn} setAuth={setAuth} setToken={setToken} setRegisterSuccess={setRegisterSuccess} registerSuccess={registerSuccess}/>}
          />
        <Route
          path="/logout"
          element={<Logout setAuth={setAuth} token={token} setUsername={setUsername} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/search" element={<Search token={token} />} />
        <Route
          path="/my_questions"
          element={<UserQuestions username={username} token={token} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/my_answers"
          element={<UserAnswers token={token} username={username} isLoggedIn={isLoggedIn} />}
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

