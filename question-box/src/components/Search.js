import axios from 'axios'
import { useState, useRef } from 'react'
import { QuestionCard } from "./QuestionCard";
import { Icon, Card, Media, Heading, Content, Image, Button, Container, Notification, Section } from 'react-bulma-components';

const Search = ({ token }) => {
  const searchTerm = useRef(null)
  const [searchResults, setSearchResults] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .get(
        `https://phone-a-friend.herokuapp.com/api/search?question=${searchTerm.current.value}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => {
        setSearchResults(res.data)
        console.log(res.data)
    
      })
  }

  return (
    <>
      <form className="section" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="search">
            search all questions & answers
          </label>
          <div className="control has-icons-left">
            <input
              type="text"
              id="search"
              className="input is-medium"
              required
              name="search"
              ref={searchTerm}
            />
            <span className="icon is-small is-left">
              <i className="fa-solid fa-bird"></i>
            </span>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Whatchya got for me?
            </button>
          </div>
        </div>
      </form>
      <div className="book-list container-box"> 
      
      <Section>
      {searchResults && searchResults.map((question, key) => (
        <QuestionCard
          key={question.pk}
          photo={question.photo}
          user_first_name={question.user_first_name}
          user_last_name={question.user_last_name}
          username={question.username}
          question={question.question}
          pk={question.pk}
          date_asked={question.date_asked}
        />
      ))}
      
  </Section>
      </div> 
    </>
  )
}

export default Search