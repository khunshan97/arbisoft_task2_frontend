import { useState, useEffect } from "react";
import Question from "../components/Question";
import QuestionsList from "../components/QuestionsList";
import {
  getQuestions,
  getQuestionnaire,
  getQuestionFromAnswer,
  sendLog
} from "../services/Quiz";

const Quiz = () => {
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedQuestion,setSelectedQuestion]=useState(null)
  const [list, setList] = useState([]);
  const [logs,setLogs]=useState([])

  useEffect(() => {
    if (selectedQuestionnaire) {
      if (selectedAnswer) {
        handleGetQuestionFromAnswer();
      } else {
        handleGetQuestionnaire();
      }
    } else {
      getQuestionsList();
    }
  }, [selectedQuestionnaire, selectedAnswer]);

  useEffect(()=>{
    if(selectedQuestion?.answers.length===0){
      sendLog({questionnaire:selectedQuestionnaire.id,choices:logs})
    }
  },[selectedQuestion])

  const getQuestionsList = async () => {
    const res = await getQuestions();
    if (res.success) {
      setList(res.data);
    }
  };

  const handleGetQuestionnaire = async () => {
    const res = await getQuestionnaire(selectedQuestionnaire.id);
    if (res.success) {
        const question = res.data.question
        setSelectedQuestion(question)

    }
  };

  const handleGetQuestionFromAnswer = async () => {
    const res = await getQuestionFromAnswer(selectedAnswer.id);
    if (res.success) {
        const question = res.data
        setSelectedQuestion(question)
    }
  };

const  handleAddToLog =(str)=>{
  let temp=[...logs]
  temp.push(str)
setLogs(temp)
}

  return (
    <div>
   <h1> {selectedQuestionnaire? selectedQuestionnaire.name: 'Welcome to Quiz Page'}</h1>
      {selectedQuestionnaire ? (
        <div style={{display:'flex', justifyContent:'center'}}>
          <Question handleSelectAnswer={setSelectedAnswer} question={selectedQuestion} addToLog={handleAddToLog}/>
        </div>
      ) : (
        <div>
          <QuestionsList
            list={list}
            setQuestionnaire={setSelectedQuestionnaire}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;
