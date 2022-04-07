// import { testData } from './DataFile';
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
//   })}

const QuestionList = () => {
  // const test_data = testData;
  const [questions, setQuestions] = useState(questionList)


  return (
    <>
    <div className="header">
      <h1>These friends are calling...</h1>
  
    </div>
      {questions.map((question, key) => 
      
      <div>
        <Container mb='5'>
        {/* <Notification color="primary">
        
          </Notification> */}
      

      <Card style={{ width: 800, margin: 'auto' }}>
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
            <Heading size={4}>{question.user}</Heading>
            <Heading subtitle size={6}>
            {question.user_name}
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
        <Button size="small">Click for more </Button>
        </Content>
      </Card.Content>
    </Card>
  </Container>
  </div>
  
  )}
  
</>
  );
};

export default QuestionList;
// <Card.Image
// size="4by3"
// src="http://bulma.io/images/placeholders/1280x960.png"
// />
  
  // return (
  //   <>
  //     <div className="header">
  //       <h1>List of Questions</h1>
  //     </div>
  //       <h1 className="page-title">All categories</h1>
  //       {questions.map((question, key) => 
  //       <h2>{question.title}</h2>
        
        
  //       )}
        
  //   </>
 



         {/* {questions.map(quest => ( */}
        //   <>
        //   <div className="question-thumbnail">
        //     <Question title={quest.title} user={quest.user} />
        //   </div>
        //   </>
        // ))}
        {/* <div className="book-container">
      
        {test_data.map((quest, idx) => {
          return <Question
            user={quest.user}
            title={quest.title}
            question={quest.question}
            date={quest.date_asked}
            key={idx}
            />
        })}
        </div>  */}