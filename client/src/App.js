import CreateForm from "./components/Formpage/CreateForm";
import ProgressBar from "./components/Journeypage/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import SavedJourneyPage from "./components/SavedJourneyPage";
// import journeyList from "./dummyJourney.json";
import userData from "./dummyUser.json";
import LoggedHeader from "./components/shared/LoggedHeader";
import Header from "./components/shared/Header";
import {
  getUser,
  handleSignUp,
  handleLogin,
  getAllJourneys,
  getSavedJourneys,
  logout

} from "./controllers/clientController";
import EditForm from "./components/Formpage/EditForm";

function App() {
  useEffect(() => {
    getAllJourneys(setJourneyList);
    getSavedJourneys(setSavedJourneys);
    getUser(setUserCallback);
  }, []);

  const setUserCallback = (user) => {
    setLogged(true);
    setUsername(user.username);
  };

  const onClickLogin = (username, password) => {
    handleLogin(username, password, setUserCallback);
  };

  const onClickSignUp = (username, password) => {
    handleSignUp(username, password, setUserCallback);
  };

  
  const onClickLogOut = () =>{
    const logoutCallback = () =>{
      setLogged(false);
      setUsername("")
    }

    logout(logoutCallback);
   
  }

  // Global variables passing around
  const [isLoggedIn, setLogged] = useState(false);
  const [username, setUsername] = useState(userData.username);
  const [journeyList, setJourneyList] = useState([]);
  const [savedJourneys, setSavedJourneys] = useState([]);
  return (
    <div>
      {isLoggedIn ? (
        <LoggedHeader username={username} logout = {onClickLogOut} />
      ) : (
        <Header handleLogin={onClickLogin} handleSignUp={onClickSignUp} />
      )}
      {/* <div className = 'formPage'>
      <EditForm id = {123} savedMilestones = {
        [{title: "random", content: "content"}]
      }  />
      </div> */}
      <div className="formPage">
        <CreateForm />
      </div>
      {/* 
    // Homepage when logged in */}
      {/* <Homepage
        isLoggedIn={isLoggedIn}
        username={username}
        allJourney={journeyList}
        savedJourney={savedJourneys}
      /> */}

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
