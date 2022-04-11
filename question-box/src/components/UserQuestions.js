import { Navigate } from 'react-router-dom'

const UserQuestions = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />
  }
  return <h1> This is a list of the user's questions.  </h1>
}

export default UserQuestions