import { Link } from 'react-router-dom'
import { Icon, Card, Media, Heading, Content, Image, Button, Container, Notification } from 'react-bulma-components';


export const QuestionCard = ({ photo, user_first_name, user_last_name, username, question, pk, date_asked, title }) => {
  return (
      <Container mb='5' className="question-list container-box">
  
      <Card style={{ width: '65%', margin: 'auto', border:'2px solid turquoise'}}>
        <Card.Content>
          <Media ClassName="pb-2">
            <Media.Item renderAs="figure" align="left" ClassName="mb-1">
            <Image
              size={64}
              alt="avatar"
              // src= "http://bulma.io/images/placeholders/128x128.png" 
              src="https://source.unsplash.com/random/128X128/?phone"
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
        <Content className="mt-6">
        <strong>{title}</strong>
          <br />
          <Container>
            <Notification color="info-light" mt="3" mb="3">
              {question}
            </Notification>
            </Container>
        <Link to={`/questions/${pk}`}>
          <Button className="is-small is-link">Click for more </Button>
        </Link>
        </Content>
      </Card.Content>
    </Card>
  </Container>
  )
}
