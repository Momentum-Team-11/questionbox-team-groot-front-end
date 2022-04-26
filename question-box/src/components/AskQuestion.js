import { useState } from 'react'
import axios from 'axios'
import { Container, Button, Form } from 'react-bulma-components';
import { Link, useNavigate } from 'react-router-dom'
import LoginAlert from './LoginAlert'

export default function QuestionForm({ token, username, isLoggedIn }) {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionDetail, setQuestionDetail] = useState('')
    const navigate = useNavigate();

    const handleAsk = (e) => {
      e.preventDefault()
      axios
      .post('https://phone-a-friend.herokuapp.com/api/questions', {
    
          "title": questionTitle,
          "question": questionDetail,
      },
      {
        headers: {
          'Authorization': `Token ${token}`
        }
      }
      ).then(res => {
        console.log(res)
        setQuestionTitle('')
        setQuestionDetail('')
          
      })
      navigate("/questions")
  }

    const handleChange = (inputType, e) => {
        if (inputType === 'questTitle') {
          setQuestionTitle(e.target.value)
        }
        if (inputType === 'questDetail') {
          setQuestionDetail(e.target.value)
        }
    }

    return (
    <>
    <div>
      <LoginAlert
      username={username}
      token={token}
      />
    </div>
      <Link to="/">
        <Button className="is-link is-outlined ml-6">Back to all questions</Button>
        </Link>
    {isLoggedIn &&
        <Container className='form-container mt-6'>
          <form className='question-form' onSubmit={handleAsk}>
              <Form.Label className='form-label'>What's your Question, friend? </Form.Label>
                <Form.Input
                  className='input-field'
                  type='text'
                  placeholder='Put question title here'
                  value={questionTitle}
                  onChange={(e) => handleChange('questTitle', e)}
                />
              <Form.Label className='form-label'>Tell us the details! </Form.Label>
                <Form.Textarea
                  className='textarea-field'
                  type='text'
                  placeholder='Question details here...'
                  value={questionDetail}
                  onChange={(e) => handleChange('questDetail', e)}
                />
             {/* <Link to="/"> */}
            <Button className='submit-button is-primary mt-3'>Submit Question</Button>
            {/* </Link> */}
          </form>
        </Container>
        }
      </>
    )
}
