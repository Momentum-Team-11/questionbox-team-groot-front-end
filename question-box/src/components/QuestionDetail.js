import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import AnswerForm from './Answer'
import { AnswerCard } from './AnswerCard'
import { Icon, Container, Notification, Section, Box, Heading, Card, Media, Content, Image, Button } from 'react-bulma-components';
import BestAnswer  from "./BestAnswer";
import { faAward, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const QuestionDetail = ({ token, setBestAnswer, bestAnswer, username, bestQuestionPk }) => {
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
        console.log(username)
      })
  }, [params.questionId, acceptedResponse, username, token])

    

  //   responses.map(responses => [{name: 'post.firstname', 
  //   dateregistered: 'post.date', 
  //   department: 'post.department'}])
  
  //   ];

  return (
    <>
      <Button><Link to="/">Back to all questions</Link></Button>
    
      {question && (
        <>
      
      <Section style={{ width: '65%', margin: 'auto' }} > 
      {/* <Card style={{ width: 500, margin: 'auto' }}> */}
      <Card style={{
      border: '2px dotted gray'
    }}>
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" align="left">
            <Image
              size={64}
              alt="avatar"
              src= "https://source.unsplash.com/random/128X128/?phone"
              mb="3"
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>{question.user}</Heading>
            <Heading subtitle size={6}>
            {question.user_first_name} {question.user_last_name} 
            </Heading>
            <Heading subtitle size={6}>
            {question.date_asked}
            </Heading>
          </Media.Item>
        </Media>
     
        <strong>{question.title}</strong>
          <br />
          <Container>
            <Notification color="info-light" mt="3" mb="2">
              {question.question}
            </Notification>
            </Container>
      
      </Card.Content>
    </Card>
  </Section>
 
  
  <Section style={{ width:'65%', margin: 'auto' }}>    
  {question.responses && ( 
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
              <Box className="mr-6 mt-4 pt-5 pb-4" style={{
      border: '1.5px dotted turquoise'
    }}>
                {response.answer}
               
                <br />
                
        {/* <Icon className="mr-4 mt-3 pink"><FontAwesomeIcon icon={faAward}/></Icon>    */}
        <Icon className="mr-4 mt-6 pink"><FontAwesomeIcon icon={faHeart}/></Icon>  
            {response.accepted && 
            <Notification className="is-danger is-light mr-6 p-3">
              <strong>Thanks Bestie!</strong>
            </Notification>}

            {(!question.accepted_response && (username === question.user) &&
            <BestAnswer
              token={token}
              responseId={response.pk}     
              questionId={question.pk}
              setAcceptedResponse={setAcceptedResponse}        
              />
            )}
            </Box>
           
              </div>
            </Content>
          </Media.Item>
        </Media>
      )}
    </Box>
    )}


  {/* Here is where a user can reply */}
    <Box mt="4" >
  
      <Media id={question.pk} renderAs="article" >
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