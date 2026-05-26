// import "./App.css";
// import StudentCard from "./StudentCard.jsx";

// function App() {
//   return (
//     <div>
//       <h1>Student Card</h1>
//       <StudentCard name="Alice" grade="A" marks={85} />
//       <StudentCard name="Bob" grade="B" marks={75} />
//       <StudentCard name="Charlie" grade="A" marks={86} />
//     </div>
//   );

// }

// export default App;
import {useState} from 'react';
function GameScore(){
  const [score, setScore] = useState(0);
  return (
    <div>
      <h1>Current Score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>Score a Point</button>
    </div>
  );
}
export default GameScore;

// import React from "react";
// import {useState} from 'react';
// function App(){
//   const [isOn, setIsOn] = useState(false);
//   // const toggleButton = () => {
//   //   setIsOn(!isOn);
//   // };
//   return(
//     <div style= {{textAlign:"center", marginTop:"50px"}}>
//       <h1>Toggle Button</h1>
//       <button onClick={() => setIsOn(!isOn)}>
//         {isOn ? "ON" : "OFF"}
//       </button>
//     </div>
//   );
// }
// export default App;