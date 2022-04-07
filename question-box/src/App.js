// import { useState } from 'react';
import Topbar from './components/Topbar';
import QuestionList from './components/QuestionList'


function App () {

  return (   
    <div className="App">
      <Topbar />
      {/* <h1 className='container is-fluid'>Phone a Friend!</h1> */}
    <body style={{ margin: '4%' }}>
      <div className="question-list">
        <QuestionList />
      </div>
      </body>
    </div>
  )
  }

  export default App;

