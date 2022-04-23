/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Homepage from "./components/Homepage";
import SavedJourneyPage from "./components/SavedJourneyPage";
import journeyList from "./dummyJourney.json";
import userData from "./dummyUser.json";

function App() {
  // Global variables passing around
  const [isLoggedIn, setLogged] = useState(false);
  const [username, setUsername] = useState(userData.username);

  return (
    // Homepage when logged in
    // <Homepage
    //   isLoggedIn={isLoggedIn}
    //   username={username}
    //   allJourney={journeyList}
    //   savedJourney={userData.saved_journey}
    // />

    // Saved Journeys Page
    <SavedJourneyPage
      isLoggedIn={isLoggedIn}
      username={username}
      journeyList={journeyList}
      savedList={userData.saved_journey}
    />
  );
}

export default App;
