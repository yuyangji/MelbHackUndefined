import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Homepage from "./components/Homepage";
import LoggedSavedJourneyPage from "./components/LoggedSavedJourneyPage";
import SavedJourneyPage from "./components/SavedJourneyPage";
import journeyList from "./dummyJourney.json";
import userData from "./dummyUser.json";

function App() {
  // Global variables passing around
  const [isLoggedIn, setLogged] = useState(true);
  const [username, setUsername] = useState(userData.username);

  return (
    // Homepage when logged in
    // <Homepage
    //   isLoggedIn={isLoggedIn}
    //   username={username}
    //   allJourney={journeyList}
    //   savedJourney={userData.saved_journey}
    // />

    // Saved Journeys when logged in
    // <LoggedSavedJourneyPage
    //   username={userData.username}
    //   journeyList={journeyList}
    //   savedList={userData.saved_journey}
    // />

    // Saved Journeys when not logged in
    <SavedJourneyPage />
  );
}

export default App;
