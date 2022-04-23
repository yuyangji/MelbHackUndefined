import Form from "./components/Formpage/Form";
import ProgressBar from "./components/Journeypage/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import SavedJourneyPage from "./components/SavedJourneyPage";
// import journeyList from "./dummyJourney.json";
import userData from "./dummyUser.json";
import LoggedHeader from "./components/shared/LoggedHeader";
import Header from "./components/shared/Header";
const getAllJourneys = async (setJourneys) => {
  var res = [];
  const response = await fetch("/journey");
  const json = await response.json();
  Object.keys(json).map((data) => res.push(json[data]));
  setJourneys(res);
};

const getSavedJourneys = async (setJourneys) => {
  var res = [];
  const response = await fetch("/user/savedJourneys");
  const json = await response.json();
  if (json.status == 500) {
    return;
  }
  Object.keys(json).map((data) => res.push(json[data]));
  setJourneys(res);
  return res;
};

function App() {
  useEffect(() => {
    getAllJourneys(setJourneyList);
    getSavedJourneys(setSavedJourneys);
  }, []);

  async function handleLogin(username, password) {
    console.log(username)
    console.log(password)

    const loginResult = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const res = await loginResult.json();
    console.log(res)

    if (loginResult.status === 201) {
      setLogged(true);
      setUsername(username);
    }
  }

  // Global variables passing around
  const [isLoggedIn, setLogged] = useState(false);
  const [username, setUsername] = useState(userData.username);
  const [journeyList, setJourneyList] = useState([]);
  const [savedJourneys, setSavedJourneys] = useState([]);
  return (
    <div>
      {isLoggedIn ? (
        <LoggedHeader username={username} />
      ) : (
        <Header handleLogin={handleLogin} />
      )}
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
