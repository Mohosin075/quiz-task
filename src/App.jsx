import { useState } from 'react';
import questions from './data/questions';
import Question from './components/Question';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // handle Answer
  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // manage current question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg">
      {
          questions.length === currentQuestion + 1 && (
            <div>
            <h1 className="text-3xl font-bold mb-4">Game Over!</h1>
            <p>Your Score: {score}/{questions.length-1}</p>
            {console.log("ase na")}
          </div>
          )
        }
        {currentQuestion < questions.length - 1 ? (
          <Question
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        ) : (
          <div className='mt-3'>
            <button onClick={()=>window.location.reload()} className='btn btn-xs'>play again</button>
          </div>
        )
        }
      </div>
    </div>
  );
}

export default App;
