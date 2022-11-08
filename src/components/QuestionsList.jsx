const QuestionsList = ({setQuestionnaire,list}) => {
const handleClick=(elem)=>{
  setQuestionnaire(elem)
}
  return (
    <div>
      <h1>Choose your Questionnaire</h1>

      <div className="list-wrapper">
        {list.map((elem)=>(
            <div key={elem.id} onClick={()=>handleClick(elem)} className="list-content">
          <h4>{elem.name}</h4>
        </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsList;
