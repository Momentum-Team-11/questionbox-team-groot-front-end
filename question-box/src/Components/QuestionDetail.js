// import { questionList } from './QuestionList'
// import {useState} from 'react'
import { Navigate } from 'react-router-dom'

// import { Card, Media, Heading, Content, Image, Button, Container, Notification } from 'react-bulma-components';


// const QuestionDetail = () => {
//   // const test_data = testData;
  // const [questions, setQuestions] = useState(questionList)

  const QuestionDetail = (questionId) => {
  return  (
    <div>
    <h1>"You made it"</h1>
    </div>
    
  )
}
export default QuestionDetail
//   return (
//   <Card style={{ width: 600, margin: 'auto' }}>
//       <Card.Content>
//         <Media>
//           <Media.Item renderAs="figure" align="left">
//             <Image
//               size={64}
//               alt="avatar"
//               src="./logo.png"
//             />
//           </Media.Item>
//           <Media.Item>
//             <Heading size={4}>Name</Heading>
//             <Heading subtitle size={6}>
//             Username
//             </Heading>
//             <Heading subtitle size={6}>
//             Date
//             </Heading>
//           </Media.Item>
//         </Media>
//         <Content>
//           Question title
//           <br />
//           <Container>
//             <Notification color="info-light" mt="3" mb="3">
//               Question Details
//             </Notification>
//             </Container>
//         <Button size="small">Click for more </Button>
//         </Content>
//       </Card.Content>
//     </Card>
//   )
// }