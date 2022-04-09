import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export const QuestionDetail = ({ token }) => {
  const [question, setQuestion] = useState(null)
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
        console.log("request fired")
      })
  }, [params.questionId, token])

  return (
    <>
      <Link to="/">Back to all questions</Link>
      {question && (
        <>
          <div className="question content container-box" id={question.pk}>
            <h2>{question.title}</h2>
            <div className="details">
              <p>{question.username}</p>
              <p>{question.question}</p>
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