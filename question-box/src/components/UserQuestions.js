import axios from "axios"
import {useState, useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom';
import { Card, Media, Heading, Content,  Button, Container, Notification } from 'react-bulma-components';

const UserQuestions = ({ isLoggedIn, token, username }) => {
  const [userQuestions, setUserQuestions] = useState([]);
 
  useEffect(() => {
    console.log("token", token)
    axios
      .get("https://phone-a-friend.herokuapp.com/api/myquestions/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        setUserQuestions(response.data) 
      })
  }, [token])


  if (isLoggedIn) {
    // return <Navigate to="/" />
  }

  return (
    <>
    <div className="columns is-mobile mt-6 mb-6">
      <div className="column is-half is-offset-one-quarter">
      <Heading>This is a list of all your questions, <em>{username}</em>. Thanks making the call! </Heading> 
      </div>
    </div>
    {/* <Section>
    <Button>
        <Link to="/login">
        Login
        </Link></Button>
        <Button>
        <Link to="/ask">
        Phone a Friend!
        </Link></Button>
    </Section> */}
      {userQuestions.map((question, key) => 
      
      <div key={key}>
      <Container mb='5' className="question-list container-box">
      <Card style={{ width: 800, margin: 'auto' }}>
        <Card.Content>
          <Media>
          <Media.Item>
            <Heading size={4}>{question.username}</Heading>
            <Heading subtitle size={6}>
            {question.user_first_name} {question.user_last_name} 
            </Heading>
            <Heading subtitle size={6}>
            {question.date_asked}
            </Heading>
          </Media.Item>
        </Media>
        <Content>
        <strong>{question.title}</strong>
          <br />
          <Container>
            <Notification color="info-light" mt="3" mb="3">
              {question.question}
            </Notification>
            </Container>
        <Button size="small">
        <Link to={`/questions/${question.pk}`}>
        Click for more 
        </Link></Button>
        </Content>
      </Card.Content>
    </Card>
  </Container>
  </div>
  )}
</>
  );
};

export default UserQuestions