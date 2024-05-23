import "./questions.css"

const Questions = ({question, onanswerCLick}) =>{
    return( 
        <div className="divs">
            <h2>{question.question}</h2>  
            <div className="options"></div>
            <ul>
                {question.answers.map((option)=>{  //for taking answers from the question.json we used map function as it is an object or array
                return (
                    <li  key = {option.text}>  
                        <button className = "btn" onClick = {() => onanswerCLick(option.isCorrect)}>
                            {option.text}
                        </button> 
                    </li>
                    )
                   })}
                 </ul>            
        </div>

    );
}

export default Questions;