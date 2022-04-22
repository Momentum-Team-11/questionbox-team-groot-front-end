import { useState } from 'react'
import axios from 'axios'
import { Container, Button, Form } from 'react-bulma-components';
import { Link } from 'react-router-dom'
import LoginAlert from './LoginAlert'

export default function QuestionForm({ token, username }) {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionDetail, setQuestionDetail] = useState('')

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
      </>
    )
}

// return (
//   <>
//     <div>
//       <Link to="/">Back to all questions</Link>
//     </div>
  
//     <Container className='form-container'>
//       <form className='question-form' onSubmit={handleAsk}>
//       <Form.Field className="field-controls">
//         <Form.Label className='form-label'>Your Question Title: </Form.Label>
//           <Form.Input
//               className='input-field'
//               type='text'
//               placeholder='What would you like to ask?'
//               value={questionTitle}
//               onChange={(e) => handleInput(e, 'questionTitle')}
//           />
//         </Form.Field>
//         <Form.Field className="field-controls">
//           <Form.Label className='form-label'>Question Details: </Form.Label>
//           <Form.Input
//               className='input-field'
//               type='text'
//               placeholder='Tell us more...'
//               value={questionDeets}
//               onChange={(e) => handleInput(e, 'questionDeets')}
//           />
//         </Form.Field>
//           <Button mt='2' className='submit-button'>Submit Question</Button>
//       </form>
//     </Container>
//   </>
//   )

// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { Button } from 'react-bulma-components';

// export const AskQuestion = ({ token }) => {
//   const [inputTextQ, setInputTextQ] = useState('')
//   const [inputTextDet, setInputTextDet] = useState('')

//   const handleChangeQ = (e) => {
//     // I want to update the state of inputTextQ
//     setInputTextQ(e.target.value)
//   }

//   const handleChangeDet = (e) => {
//     // I want to update the state of inputText
//     setInputTextDet(e.target.value)
//   }
//   useEffect(() => {
//     axios
//       .post("https://phone-a-friend.herokuapp.com/api/questions", {
//         "title": inputTextQ,
// 	      "question": inputTextDet
	
//       }, {
//         headers: {
//           Authorization: `Token ${token}`,

//         },
//       })
//       .then((res) => {
//         console.log(res)
//       })
//   }, [token, inputTextQ, inputTextDet])

//   return (
   
  
//   <form onSubmit={AskQuestion}>    
//     <div className="input-question-title">
//       <label htmlFor="text-input-title">What is your question?</label>
//       <input
//         type="text"
//         className="input-title"
//         id="text-input"
//         value={inputTextQ}
//         onChange={handleChangeQ}
//       />
//     <div>here is the question: {inputTextQ}</div>
//   </div>

//   <div className="input-question-body">
//       <label htmlFor="text-input-body">Tell us all the details:</label>
//       <input
//         type="text"
//         className="input-body"
//         id="text-input"
//         value={inputTextDet}
//         onChange={handleChangeDet}
//       />
//     <div>here are the details: {inputTextDet}</div>
//     <div className="field-controls">
//           <Button type="submit">Submit Question</Button>
//     </div>
//   </div>
//   </form>
//   </>
//   )
// }
// export default AskQuestion