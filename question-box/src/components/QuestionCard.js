import { Link } from 'react-router-dom'
import { Icon, Card, Media, Heading, Content, Image, Button, Container, Notification } from 'react-bulma-components';


export const QuestionCard = ({ photo, user_first_name, user_last_name, username, question, pk, date_asked, title, token, setBestAnswer, bestAnswer }) => {
  return (
      <Container mb='5' className="question-list container-box">
  
      <Card style={{ width: '65%', margin: 'auto', border:'2px dotted gray'}}>
        <Card.Content>
          <Media >
            <Media.Item renderAs="figure" align="left">
            <Image
              size={64}
              alt="avatar"
              src= "http://bulma.io/images/placeholders/128x128.png" 
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>{username}</Heading>
            <Heading subtitle size={6}>
            {user_first_name} {user_last_name} 
            </Heading>
            <Heading subtitle size={6}>
            {date_asked}
            </Heading>
          </Media.Item>
        </Media>
        <Content>
        <strong>{title}</strong>
          <br />
          <Container>
            <Notification color="info-light" mt="3" mb="3">
              {question}
            </Notification>
            </Container>
        <Button size="small">
        <Link to={`/questions/${pk}`}>
        Click for more 
        </Link></Button>
        </Content>
      </Card.Content>
    </Card>
  </Container>
  )
}
