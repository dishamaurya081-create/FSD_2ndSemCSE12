import "./App.css";
import StudentCard from "./StudentCard.jsx";

function App() {
  return (
    <div>
      <h1>Student Card</h1>
      <StudentCard name="Alice" grade="A" marks={85} />
      <StudentCard name="Bob" grade="B" marks={75} />
      <StudentCard name="Charlie" grade="A" marks={86} />
    </div>
  );

}

export default App;