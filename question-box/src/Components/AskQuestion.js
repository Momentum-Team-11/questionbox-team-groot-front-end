import { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bulma-components';


export default function QuestionForm({ token }) {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')

    const handleAsk = (event) => {
      const questionApi = "https://phone-a-friend.herokuapp.com/api/questions"
      event.preventDefault()
      axios.post(questionApi, {
          "title": questionTitle,
          "question": questionBody,
      },
      {
          headers: {
              'Authorization': `Token ${token}`
          }
      }
      ).then(response => {
          setQuestionTitle('')
          setQuestionBody('')
          console.log(response)
          return response
      })
  }

    const handleChange = (inputType, event) => {
        if (inputType === 'questionTitle') {
            setQuestionTitle(event.target.value)
        }
        if (inputType === 'questionBody') {
            setQuestionBody(event.target.value)
        }
    }

    return (
        <div className='form-container'>
            <form className='question-form' onSubmit={handleAsk}>
                <label className='form-label'>Question Title: </label>
                <input
                    className='input-field'
                    type='text'
                    placeholder='Question title'
                    value={questionTitle}
                    onChange={(event) => handleChange('questionTitle', event)}
                />
                <label className='form-label'>Question Details: </label>
                <textarea
                    className='textarea-field'
                    type='text'
                    placeholder='Question details'
                    value={questionBody}
                    onChange={(event) => handleChange('questionBody', event)}
                />
                <Button className='submit-button'>Submit Question</Button>
            </form>
        </div>

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