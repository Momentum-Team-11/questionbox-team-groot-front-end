import { Navigate } from 'react-router-dom'

const UserAnswers = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />
  }
  return <h1> This is a list of user's answers.  </h1>
}

export default UserAnswers