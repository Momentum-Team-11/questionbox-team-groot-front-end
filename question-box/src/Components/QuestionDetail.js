import { questionList } from '../dataFile'
import {useState} from 'react'
// import { Question } from './Question'
import { Card, Media, Heading, Content, Image, Button, Container, Notification } from 'react-bulma-components';

// const Question {test_data.map((quest, idx) => {
//   return <Question
//     user={quest.user}
//     title={quest.title}
//     question={quest.question}
//     date={quest.date_asked}
//     key={idx}
//     />
// })}
const QuestionList = () => {
  // const test_data = testData;
  const [questions, setQuestions] = useState(questionList)

  return (
  <Card style={{ width: 600, margin: 'auto' }}>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" align="left">
            <Image
              size={64}
              alt="avatar"
              src="./logo.png"
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>Name</Heading>
            <Heading subtitle size={6}>
            Username
            </Heading>
            <Heading subtitle size={6}>
            Date
            </Heading>
          </Media.Item>
        </Media>
        <Content>
          Question title
          <br />
          <Container>
            <Notification color="info-light" mt="3" mb="3">
              Question Details
            </Notification>
            </Container>
        <Button size="small">Click for more </Button>
        </Content>
      </Card.Content>
    </Card>
  )
}