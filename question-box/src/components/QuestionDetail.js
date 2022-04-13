import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import AnswerForm from './Answer'
import { AnswerCard } from './AnswerCard'
import { Container, Notification, Section, Box, Heading, Card, Media, Content, Image, Button } from 'react-bulma-components';
import BestAnswer  from "./BestAnswer";


export const QuestionDetail = ({ token, setBestAnswer, bestAnswer, bestQuestionPk }) => {
  const [question, setQuestion] = useState(null)
  const [responses, setResponses] = useState([])
  const [acceptedResponse, setAcceptedResponse] = useState(null)
  
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
        setAcceptedResponse(res.data.accepted_response)
        console.log("question detail request fired")
        console.log(res.data.responses)
        console.log(res.data)
        console.log(acceptedResponse)
      })
  }, [params.questionId, acceptedResponse, token])

    

  //   responses.map(responses => [{name: 'post.firstname', 
  //   dateregistered: 'post.date', 
  //   department: 'post.department'}])
  
  //   ];

  return (
    <>
      <Button><Link to="/">Back to all questions</Link></Button>
    
      {question && (
        <>
          <div className="question content container-box" id={question.pk}>
          <Container mb='5' className="question-list container-box">
      {/* <Card style={{ width: 800, margin: 'auto' }}> */}
      <Card>
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" align="left">
            <Image
              size={64}
              alt="avatar"
              src= {question.photo} 
            />
          </Media.Item>
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
        </Content>
      </Card.Content>
    </Card>
  </Container>
  </div>
  These are the responses
  <Section>
    
      <Box >
      {responses.map((response, idx) => 
        <Media key={response.pk}renderAs="article">
          <Media.Item align="left">
            <Image
              src="http://bulma.io/images/placeholders/128x128.png"
              size={64}
            />
          </Media.Item>
          <Media.Item align="center">
            <Content>
              <div>
                <strong>{response.user}</strong>
                <br />
                <p>{response.date_answered}</p>
                {response.answer}
                <br />
                <small>
                  Like button
                </small>
            {response.accepted && <p>Thanks Bestie!</p>}

            {!question.accepted_response &&
            <BestAnswer
              token={token}
              responseId={response.pk}     
              questionId={question.pk}
              setAcceptedResponse={setAcceptedResponse}        
              />
            }
              </div>
            </Content>
          </Media.Item>
        </Media>
      )}
    </Box>


  {/* Here is where a user can reply */}
    <Box>
      <Media id={question.pk} renderAs="article">
          <Media.Item align="left">
            <Image
              // src="http://bulma.io/images/placeholders/128x128.png"
              src="https://source.unsplash.com/random/128X128/?phone"
              size={64}
            />
          </Media.Item>
          <Media.Item id="answer-text" align="center">
          
          <AnswerForm
                token={token}
                questionPk={question.pk}
          />
          </Media.Item>
        </Media>
      </Box>
    </Section>
    
    )
      </>
      )}
    </>
    
  )
}
export default QuestionDetail


// {responses.map((response, idx) => 
//   <div className="responses container-box" idx={response.pk}>
// <h3>Everything below this line is a comment</h3>
// <p>Response pk: {response.pk}</p>
// <p>Response user: {response.user}</p>
// <p>Response question: {response.question}</p>
// <p>Response answer: {response.answer}</p>
// <p>Response date answered: {response.date_answered}</p>
//   </div>

// )}