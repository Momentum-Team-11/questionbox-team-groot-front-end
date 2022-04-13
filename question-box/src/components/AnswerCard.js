import { Link } from 'react-router-dom'
import { Icon, Card, Media, Heading, Content, Image, Button, Container, Notification } from 'react-bulma-components';


export const AnswerCard = ({ user, date_asked, title, answer, pk }) => {
  return (    

      <Container mb='5' className="question-list container-box">
      <Card style={{ width: 800, margin: 'auto' }}>
        <Card.Content>
          <Media>
          <Media.Item>
            <Heading size={4}>{user}</Heading>
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
              {answer}
            </Notification>
            </Container>
        <Button size="small">
        <Link to={`/questions/${pk}`}>
        See original question 
        </Link></Button>
				<br />
          <small>
              Like button
          </small>
        </Content>
      </Card.Content>
    </Card>
  </Container>
  );
};

export default AnswerCard