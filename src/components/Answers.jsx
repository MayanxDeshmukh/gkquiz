

const Answers = ({ans, question, resetQuiz = ()=>{}})=>{
    const correctAns = ans.filter((answer)=>answer).length;
    return ( 
        <div> 
            <p> You've answered {correctAns} correct answers out of {question.length} questions </p>
         </div>
        
    );
}

export default Answers;