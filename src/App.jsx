import { useState } from 'react';
import './App.css';
import Answers from './components/Answers';
import questions from "./questions.json";
import Questions from './components/Questions';



function App() {

  const [currentQuestion, setQue] = useState(0);
  const [correct, setCorrect] = useState([0]);

  const handleChange = (isCorrect)=>{
    setQue(currentQuestion+1);
    setCorrect([...correct, isCorrect]);
  }

  const resetQuiz = ()=>{
    setQue(0);
    setCorrect([0])
  }

  

  return (
    <div className="App">
      <div className="App-header">
      <h1>GK quiz</h1>
      {currentQuestion < questions.length && (
        <div>
         <Questions question = {questions[currentQuestion]} onanswerCLick = {handleChange}  />   
        </div>
)}
        <br />
        <div>
          { currentQuestion === questions.length &&
          <Answers 
          question = {questions}
          ans = {correct}
          const = {resetQuiz}
          />}
        </div>
      </div>
    </div>
  );
}

export default App;
