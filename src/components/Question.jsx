const Question = ({ handleSelectAnswer, question,addToLog }) => {

  const handleClick=(elem)=>{
    handleSelectAnswer(elem)
    addToLog(elem.answer_text)
  }
  return (
    <div className="question">
      <h1>{question?.question_text}</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {question?.answers.map((elem) => (
          <p key={elem.id} className="answer" onClick={() => handleClick(elem)}>
            {elem.answer_text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Question;
