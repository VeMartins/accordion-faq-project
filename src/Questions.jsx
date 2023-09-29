import SingleQuestion from "./SingleQuestion";

const Questions = ({ data, activeId, handleSingleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {data.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            data={data}
            {...question}
            activeId={activeId}
            handleSingleQuestion={handleSingleQuestion}
          />
        );
      })}
    </section>
  );
};
export default Questions;
