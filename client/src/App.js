import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import LoggedSavedJourneyPage from "./components/LoggedSavedJourneyPage";
import journeyList from "./dummyJourney.json";
import userData from "./dummyUser.json";

function App() {
  return (
    <LoggedSavedJourneyPage
      username={userData.username}
      journeyList={journeyList}
      savedList={userData.saved_journey}
    />
  );
}

export default App;
