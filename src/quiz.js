import React from "react";
import questions from "./data/questions.json";

export default function App() {
  const [allQuestions, setAllQuestions] = React.useState(questions);

  const onSelectOption = (qid, op) => {
    const copyQuestions = [...allQuestions];
    const question = copyQuestions.find(q => q.id === qid);
    question.selectedOption = op;
    setAllQuestions(copyQuestions);
    console.log(allQuestions); // test
  }

  const getOptionStyle = (q, op) => {
    let style = "list-group-item";

     if(op === q.selectedOption)
      style = style + " bg-success";
    else if(op !== q.selectedOption)
       style = style + " bg-danger";
    else
         style = style;

    return style;
  }

  return (
    <div className="container my-3">
      <h4>Quiz Demo</h4>
      {allQuestions.map((q) => (
        <div className="card my-2" key={q.id}>
          <div className="card-header"> {q.statement} </div>
          <ul className="list-group list-group-flush">
            {q.options.map((op) => (
              <li
                key={op}
                className={getOptionStyle(q, op)}
                onClick={() => onSelectOption(q.id, op)}
              >
                {op}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
