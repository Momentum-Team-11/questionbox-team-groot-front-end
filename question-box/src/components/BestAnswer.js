import { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bulma-components';



export default function BestAnswer({ token, responseId, setAcceptedResponse}) {


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
        console.log(res)
        console.log("best answer pk:" + res.data.question)
      


      })
  }

    return (
      
      <>
      <Button className="is-small is-primary mt-6" onClick={(e) => handleBest(e)}>
        <strong>Award best answer?</strong>
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