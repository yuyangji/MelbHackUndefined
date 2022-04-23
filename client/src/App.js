import Form from "./components/Formpage/Form";
import ProgressBar from "./components/Journeypage/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import SavedJourneyPage from "./components/SavedJourneyPage";
// import journeyList from "./dummyJourney.json";
import userData from "./dummyUser.json";

const getAllJourneys = async () => {
  var result = [];
  const response = await fetch("/journey");
  const body = await response.json();
  console.log(body)
  for(var item in body){
    result.push(item)
  }
  console.log(result)
  return body;
};

function App() {
  useEffect(() => {
    const journeys = getAllJourneys()
    setJourneyList(journeys)
  }, []);

  // Global variables passing around
  const [isLoggedIn, setLogged] = useState(true);
  const [username, setUsername] = useState(userData.username);
  const [journeyList, setJourneyList] = useState([]);
  return (
    <div>
      {/* <div className = 'formPage'>
      <Form />
      </div> */}

      {/* 
    // Homepage when logged in */}
      <Homepage
        isLoggedIn={isLoggedIn}
        username={username}
        allJourney={journeyList}
        savedJourney={userData.saved_journey}
      />

      {/* <SavedJourneyPage
      isLoggedIn={isLoggedIn}
      username={username}
      journeyList={journeyList}
      savedList={userData.saved_journey}
    /> */}
      {/* <ProgressBar data={data} setData={setData} />; */}
    </div>
  );
}

export default App;
