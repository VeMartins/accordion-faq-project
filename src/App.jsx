import questions from "./data";
import Questions from "./Questions";

import { useState } from "react";

const App = () => {
  const [data, setData] = useState(questions);
  const [activeId, setActiveId] = useState(null);

  const handleSingleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions
        data={data}
        handleSingleQuestion={handleSingleQuestion}
        activeId={activeId}
      />
    </main>
  );
};
export default App;
