import { useState } from 'react'
import axios from 'axios'
import { Container, Button, Form } from 'react-bulma-components';
import { useParams } from 'react-router-dom'


export default function BestAnswer({ token, responseId, questionId, setAcceptedResponse}) {
    const [bestAnswer, setBestAnswer] = useState(false)
    const [bestQuestionPk, setBestQuestionPk] = useState(null)
    const [acceptedExists, setAcceptedExists] = useState('')

    const params = useParams()
    // const [questionDetail, setQuestionDetail] = useState('')

    const handleBest = (e) => {
      e.preventDefault()
      axios
      .patch(`https://phone-a-friend.herokuapp.com/api/question/response/${responseId}/`, {
    
          "pk": `${responseId}`,
          "accepted": true,
      },
      {
        headers: {
          'Authorization': `Token ${token}`
        }
      }
      ).then(res => {
        setAcceptedResponse(true)
        setBestAnswer(true)
        setBestQuestionPk(res.data.question)
        console.log(res)
        console.log("best answer pk:" + res.data.question)
        console.log(questionId)
        console.log(acceptedExists)


      })
  }

///how do I get "acceptedExists to set to true so I can use that?? I tried to do it on QuestionDetail also and it's not working
//originally had a nested ternary in the return to set the selected answer here and somehow ended up with it now in the question detail, but it should go here,

    return (
      
      <>
      <Button onClick={(e) => handleBest(e)}>
        Award best answer?
    </Button>
      </>
    )
}

// {bestAnswer ? (
//   <h3>Best Answer Awarded</h3>

// ) : (
//   (bestQuestionPk === questionId) ? (
//     <Button onClick={(e) => handleBest(e)}>
//     Award best answer?
//     </Button>
//   ) : (
//     ""
//   )
// )}