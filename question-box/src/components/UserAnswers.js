import axios from "axios"
import {useState, useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom';
import { Card, Media, Heading, Content,  Button, Container, Notification } from 'react-bulma-components';

const UserAnswers = ({ isLoggedIn, token }) => {
  const [userAnswers, setUserAnswers] = useState([]);
 
  useEffect(() => {
    console.log("token", token)
    axios
      .get("https://phone-a-friend.herokuapp.com/api/myresponses", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        setUserAnswers(response.data) 
      })
  }, [token])


  if (isLoggedIn) {
    // return <Navigate to="/" />
  }


  return (
    <>
    <div className="header-home">
      <h1>This is a list of the user's answers. </h1>
      
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
      {userAnswers.map((answer, key) => 
      
      <div key={key}>
      <Container mb='5' className="question-list container-box">
      <Card style={{ width: 800, margin: 'auto' }}>
        <Card.Content>
          <Media>
          <Media.Item>
            <Heading size={4}>{answer.user}</Heading>
            <Heading subtitle size={6}>
            {answer.date_asked}
            </Heading>
          </Media.Item>
        </Media>
        <Content>
        <strong>{answer.title}</strong>
          <br />
          <Container>
            <Notification color="info-light" mt="3" mb="3">
              {answer.answer}
            </Notification>
            </Container>
        <Button size="small">
        <Link to={`/questions/${answer.pk}`}>
        See original question 
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

export default UserAnswers