import { useState } from 'react'
import axios from 'axios'
import { Container, Button, Form } from 'react-bulma-components';
import { useParams } from 'react-router-dom'


export default function BestAnswer({ token}) {
    const [bestAnswer, setBestAnswer] = useState(false)
    const [bestQuestionPk, setBestQuestionPk] = useState(null)
    const params = useParams()
    // const [questionDetail, setQuestionDetail] = useState('')

    const handleBest = (e) => {
      e.preventDefault()
      axios
      .patch(`https://phone-a-friend.herokuapp.com/api/question/response/${params.responseId}/`, {
    
          "pk": `${params.responseId}`,
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
        console.log(res.data.question)
      })
  }

    return (
      <>
      {bestAnswer ? (
        <h3>Best Answer Awarded</h3>

      ) : (
        <Button onClick={(e) => handleBest(e)}>
          Award best answer?
        </Button>
      )}
      </>
    )
}