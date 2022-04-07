// for example from GET /questions
export const questionList= [
{
  user: "Brittany Craig", 
  user_name: "Picklescat7",
  title: 'My Cat',
  question: "My cat is troubled. How should I proceed?", 
  date_asked: "04/07/2022",
},

{
  user: "Amanda Martin", 
  user_name: "BeepBeep1",
  title:'My dog does not seem to love me',
  question: "I don't think he even likes me. What should I do?", 
  date_asked: "04/07/2022", 
}
  
]

// GET /questions/:pk
// url would look something like 'questionbox-groot.herokuapp.com/questions/${pk}'
export const questionDetail = {
    user: "Brittany Craig", 
    user_name: "Picklescat7",
    title: 'My Cat',
    question: "My cat is troubled. How should I proceed?", 
    date_asked: "04/07/2022",
    answers: [
      {
        pk: 1,
        text: "Try feeding your cat more treats?",
        user: "Amy"
      }, 
      {
        pk: 6,
        text: "You need to get more cats.",
        user: "Belletrix"
      },
    ]
  }

// axios.get(`questionbox-groot.herokuapp.com/questions/${pk}`).then(res => res.data)

// {
//   user_id: 1, 
//   name: "Brittany Craig",
//   username: "PicklesCat7",
//   password: "1234",
//   profile_pic: "https://i.etsystatic.com/12423396/r/il/4d44c5/1980074087/il_794xN.1980074087_7grb.jpg", 
//   bio_text: "Oh hey- it's me Brittany from Durham, NC."
  
// }, 
// {
//   user_id: 2, 
//   name: "Henry Martin-Craig",
//   username: "PicklesCat7",
//   password: "1234",
//   profile_pic: "https://i.etsystatic.com/12423396/r/il/4d44c5/1980074087/il_794xN.1980074087_7grb.jpg", 
//   bio_text: "Hello I am Henry, I am 2."
// }