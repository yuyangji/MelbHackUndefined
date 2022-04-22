import React from "react";
import Homepage from "./components/Homepage";
import Form from "./components/Formpage/Form";
import ProgressBar from "./components/Journeypage/ProgressBar";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = React.useState([
    {
      id: 1,
      title: "Day 1",
      content:
        "Python is a programming language that is used to create programs that run on a computer. It is a very popular language for beginners.",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Day 2",
      content:
        "Python is a programming language that is used to create programs that run on a computer. It is a very popular language for beginners.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Day 3",
      content:
        "Python is a programming language that is used to create programs that run on a computer. It is a very popular language for beginners.",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Day 4",
      content:
        "Python is a programming language that is used to create programs that run on a computer. It is a very popular language for beginners.",
      isCompleted: false,
    },
  ]);



  return (
  <div>
  <ProgressBar data={data} setData={setData}/>;
  </div>
  )
}

export default App;
