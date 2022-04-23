import Form from "./components/Formpage/Form";
import ProgressBar from "./components/Journeypage/ProgressBar";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Homepage from "./components/Homepage";
import SavedJourneyPage from "./components/SavedJourneyPage";
import journeyList from "./dummyJourney.json";
import userData from "./dummyUser.json";

function App() {
  // Global variables passing around
  const [isLoggedIn, setLogged] = useState(true);
  const [username, setUsername] = useState(userData.username);

  return (
    <div>
      <ChakraProvider>

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
      </ChakraProvider>
    </div>

  )}

export default App;
