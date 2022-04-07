import { testData } from './DataFile';

const QuestionList = () => {
  const test_data = testData;

  return (
    <>
      <div className="header">
        <h1>List of Questions</h1>
      </div>
        <h1 className="page-title">All categories</h1>
        <div className="book-container">
        {test_data.map((quest, idx) => {
          return <QuestionList
            user={quest.user}
            title={quest.title}
            question={quest.question}
            date={quest.date_asked}
            key={idx}
            />
        })}
        </div> 
    </>
  );
};

export default QuestionList;