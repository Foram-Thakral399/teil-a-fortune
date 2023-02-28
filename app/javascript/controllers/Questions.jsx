
import React, { useState, useEffect } from "react";

const answers = ["Yes", "No"];
function Questions() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [useQuestions, setuseQuestions] = useState([]);
  const [returnValue, setreturnValue] = useState(null);

  useEffect(() => {
    fetch("/getquetions")
      .then((response) => response.json())
      .then((data) => setuseQuestions(data));
  }, []);

  const handleAnswerResponse = (answer) => {
    let question = useQuestions[currentQuestion];

    setuseQuestions(
      useQuestions.map((item) =>{
        if(item.id == question.id){
          item.answers = answer
          return item
        }
        return item
      })
    );

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < useQuestions.length) {
      setcurrentQuestion(nextQuestion);
    } else {
      let url = "/getresult?data=" + JSON.stringify(useQuestions)
      fetch(url)
        .then((response) => response.json())
        .then((data) => setreturnValue(data.message));
    }
  };

  let item = useQuestions[currentQuestion];
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        {returnValue == null ? (
          <div className="container secondary-colo">
            <h2 className="questions">
              Question {currentQuestion + 1} {item != null ? item.question : ""}
            </h2>
            <br />
            {answers.map((answer, key) => (
              <button
                onClick={() => handleAnswerResponse(answer)}
                className="btn btn-lg custom-button answer"
                key={key}
              >
                {answer}
              </button>
            ))}
            <hr className="my-4" />
          </div>
        ) : (
          <div className="container secondary-color">
            <h1 className="display-4">Fortune</h1>
            <hr></hr>
            <h2>
             {returnValue == null ? "" : returnValue}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Questions;
