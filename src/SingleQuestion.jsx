import { useState } from "react";

const SingleQuestion = ({
  id,
  title,
  info,
  handleSingleQuestion,
  activeId,
}) => {
  //   const [showInfo, setShowInfo] = useState(false);
  //   const showAnswer = () => {

  //     return setShowInfo(!showInfo);
  //   };
  const isActive = id === activeId;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="btn"
          type="button"
          onClick={() => {
            handleSingleQuestion(id);
          }}
        >
          {/* {showInfo ? "-" : "+"} */}
          {isActive ? "-" : "+"}
        </button>
      </header>
      {/* {showInfo && <p>{info} </p>} */}
      {isActive && <p>{info} </p>}
    </article>
  );
};
export default SingleQuestion;
