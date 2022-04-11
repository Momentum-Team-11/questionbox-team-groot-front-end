import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Form, Button, } from 'react-bulma-components';

// import { Link } from 'react-router-dom'

export default function AnswerForm({ token }) {
    const [answer, setAnswer] = useState('')
    const params = useParams()

    const handleAnswer = (e) => {
      e.preventDefault()
      axios
      .post(`https://phone-a-friend.herokuapp.com/api/question/${params.questionId}/response`, {
          "question": params.questionId,
          "answer": answer
      },
      {
        headers: {
          'Authorization': `Token ${token}`
        }
      }
      ).then(res => {
        console.log("post answer")
        setAnswer('')
          
      })
  }

    const handleChange = (inputType, e) => {
        if (inputType === 'answerText') {
          setAnswer(e.target.value)
        }
    }

    return (
      <>
        <form className='answer-form' onSubmit={handleAnswer}>    
            <Form.Field>
              <Form.Control>
                <Form.Textarea 
                  color=""
                  className='input-field'
                  type='text'
                  placeholder="Add a comment..."
                  value={answer}
                  onChange={(e) => handleChange('answerText', e)}
                  />
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Form.Control>
                <Button className='submit-button'>Post comment</Button>
              </Form.Control>
            </Form.Field>
        </form>
      </>
    )
}
{/* <form className='question-form' onSubmit={handleAsk}>
              <Form.Label className='form-label'>What's your Question, friend? </Form.Label>
                <Form.Input
                  className='input-field'
                  type='text'
                  placeholder='Put question title here'
                  value={questionTitle}
                  onChange={(e) => handleChange('questTitle', e)}
                /> */}

{/* <Box>
      <Media renderAs="article">
          <Media.Item align="left">
            <Image
              src="http://bulma.io/images/placeholders/128x128.png"
              size={64}
            />
          </Media.Item>
          <Media.Item align="center">
            <Form.Field>
              <Form.Control renderAs="p">
                <Form.Textarea placeholder="Add a comment..." />
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Form.Control renderAs="p">
                <Button>Post comment</Button>
              </Form.Control>
            </Form.Field>
          </Media.Item>
        </Media>
      </Box> */}