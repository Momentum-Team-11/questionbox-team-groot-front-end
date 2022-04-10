import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export const QuestionDetail = ({ token }) => {
  const [question, setQuestion] = useState(null)
  const [responses, setResponses] = useState([])
  const params = useParams()

  useEffect(() => {
    axios
      .get(`https://phone-a-friend.herokuapp.com/api/question/${params.questionId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setQuestion(res.data)
        setResponses(res.data.responses)
        console.log("request fired")
        console.log(res.data.responses.user)
      })
  }, [params.questionId, token])

  // const response = [

  //   responses.map(responses => [{name: 'post.firstname', 
  //   dateregistered: 'post.date', 
  //   department: 'post.department'}])
  
  //   ];

  return (
    <>
      <Link to="/">Back to all questions</Link>
      {question && (
        <>
          <div className="question content container-box" id={question.pk}>
            <h2>{question.title}</h2>
            <div className="details">
              
              <p>{question.user_first_name} {question.user_last_name} </p>
              <p>{question.username}</p>
              <p>{question.question}</p>
            </div>
    
            <div className="responses container-box">
            <div>
        {responses.map((response, idx) => 
            <div className="responses container-box" idx={response.pk}>
          <h3>Everything below this line is a comment</h3>
          <p>Response pk: {response.pk}</p>
          <p>Response user: {response.user}</p>
          <p>Response question: {response.question}</p>
          <p>Response answer: {response.answer}</p>
          <p>Response date answered: {response.date_answered}</p>
            </div>
          
      )}
    </div>
          
            </div>
          </div>
        </>
      )}
    </>

    
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