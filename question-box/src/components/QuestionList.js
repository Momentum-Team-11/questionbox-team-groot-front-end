//aka HOMEPAGE
import axios from "axios"
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Card, Media, Heading, Content, Image, Button, Container, Notification, Section } from 'react-bulma-components';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { QuestionCard } from "./QuestionCard";

const Home = () => {
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
    <Button className="ml-6"><Link to="/">Back Home</Link></Button>
    <Section className="header-home">
    <div className="columns is-mobile mt-6 mb-2 ml-0 pl-0">
      <div className="column is-half is-offset-one-quarter">
      <Heading className="title is-2 is-gray ml-0 pl-0">These friends are calling. Ready to answer?...</Heading> 
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

export default Home;