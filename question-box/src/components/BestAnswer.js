import { useState } from 'react'
import axios from 'axios'
import { Container, Button, Form } from 'react-bulma-components';
import { useParams } from 'react-router-dom'


export default function BestAnswer({ token, responseId, questionId, acceptedResponse}) {
    const [bestAnswer, setBestAnswer] = useState(false)
    const [bestQuestionPk, setBestQuestionPk] = useState(null)
    const [acceptedExists, setAcceptedExists] = useState(false)

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
        setBestAnswer(true)
        setBestQuestionPk(res.data.question)
        console.log(res)
        console.log("best answer pk:" + res.data.question)
        console.log(questionId)

      })
  }



    return (
      
      <>
      {(!acceptedResponse && (bestQuestionPk === questionId))  ? (
        ""
      ) : (

      <Button onClick={(e) => handleBest(e)}>
        Award best answer?
    </Button>
      )
    }
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