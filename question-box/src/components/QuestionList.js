//aka HOMEPAGE
import axios from "axios"
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Card, Media, Heading, Content, Image, Button, Container, Notification, Section } from 'react-bulma-components';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { QuestionCard } from "./QuestionCard";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  // const [questionId, setQuestionId] = useState(null)
  
  useEffect(() => {
    axios
      .get("https://phone-a-friend.herokuapp.com/api/questions")
      .then((response) => {
        console.log(response.data)
        setQuestions(response.data)
      })
  }, [])

  return (
    <>
    
    <div className="columns is-mobile mt-6 mb-6">
      <div className="column is-half is-offset-one-quarter">
      <Heading><Icon><FontAwesomeIcon icon={faHeart}/></Icon> We all have questions, friend. <Icon><FontAwesomeIcon icon={faHeart} /></Icon> </Heading> 
      <div className="column is-half is-offset-one-quarter">
      <Link to="/ask"><Button color="link"><strong>Phone a Friend!</strong></Button></Link>
      </div>
      </div>
    </div>
 
    <Section className="header-home">
    <div className="columns is-mobile mt-6 mb-6">
      <div className="column is-half is-offset-one-quarter">
      <h1>These friends are calling. Ready to answer a call?...</h1> 
        </div>
      </div>
      {questions.map((question ) => 
        <QuestionCard
          key={question.pk}
          photo={question.photo}
          user_first_name={question.user_first_name}
          user_last_name={question.user_last_name}
          username={question.username}
          title={question.title}
          question={question.question}
          pk={question.pk}
          date_asked={question.date_asked}
        />
      
  )}
  </Section>
</>
  );
};

export default QuestionList;
// <Card.Image
// size="4by3"
// src="http://bulma.io/images/placeholders/1280x960.png"
// />
  
  // return (
  //   <>
  //     <div className="header">
  //       <h1>List of Questions</h1>
  //     </div>
  //       <h1 className="page-title">All categories</h1>
  //       {questions.map((question, key) => 
  //       <h2>{question.title}</h2>
        
        
  //       )}
        
  //   </>
 



         {/* {questions.map(quest => ( */}
        //   <>
        //   <div className="question-thumbnail">
        //     <Question title={quest.title} user={quest.user} />
        //   </div>
        //   </>
        // ))}
        {/* <div className="book-container">
      
        {test_data.map((quest, idx) => {
          return <Question
            user={quest.user}
            title={quest.title}
            question={quest.question}
            date={quest.date_asked}
            key={idx}
            />
        })}
        </div>  */}