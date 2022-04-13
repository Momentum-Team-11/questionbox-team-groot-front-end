import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
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

const App = () => {
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('Token', '')
  const [username, setUsername] = useLocalStorageState('Username', '')
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
        <Route path="/" element={<QuestionList token={token} />}> </Route>
        <Route path="home" element={<QuestionList token={token} />}></Route>
        <Route path="/ask" element={<AskQuestion token={token} />}></Route>
        <Route
          path="/questions/:questionId"
          element={<QuestionDetail token={token} />}
        ></Route>
        
        <Route
          path="/login"
          element={<Login setAuth={setAuth} setToken={setToken} isLoggedIn={isLoggedIn} />}
        />
        <Route
            path="/register"
            element={<Register isLoggedIn={isLoggedIn} setAuth={setAuth} setToken={setToken}/>}
          />
        <Route
          path="/logout"
          element={<Logout setAuth={setAuth} setToken={setToken} setUsername={setUsername} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/search" element={<Search token={token} />} />
        <Route
          path="/my_questions"
          element={<UserQuestions token={token} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/my_answers"
          element={<UserAnswers token={token} isLoggedIn={isLoggedIn} />}
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

