/* eslint-disable react/prop-types */
function Question({ question, onAnswer , number}) {
  console.log(number);
  return (
    <div>
      <div className="text-xl">{number}/10</div>
      <h1 className="text-2xl font-bold mb-4">{question.question}</h1>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="block w-full bg-blue-200 hover:bg-blue-300 text-gray-800 font-semibold p-2 mb-2 rounded"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
