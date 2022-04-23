import CreateForm from "./components/Formpage/CreateForm";
import ProgressBar from "./components/Journeypage/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import SavedJourneyPage from "./components/SavedJourneyPage";
import LoggedHeader from "./components/shared/LoggedHeader";
import Header from "./components/shared/Header";
import {
  getUser,
  handleSignUp,
  handleLogin,
  getAllJourneys,
  getSavedJourneys,
  logout,
} from "./controllers/clientController";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

  const onClickLogOut = () => {
    const logoutCallback = () => {
      setLogged(false);
      setUsername("");
    };

    logout(logoutCallback);
  };

  // Global variables passing around
  const [isLoggedIn, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [journeyList, setJourneyList] = useState([]);
  const [savedJourneys, setSavedJourneys] = useState([]);
  return (

    <Router>
      <div>
        {isLoggedIn ? (
          <LoggedHeader username={username} logout = {onClickLogOut}/>
        ) : (
          <Header handleLogin={onClickLogin} handleSignUp={onClickSignUp} />
        )}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Homepage
                isLoggedIn={isLoggedIn}
                username={username}
                allJourney={journeyList}
                savedJourney={savedJourneys}
              />
            }
          />
          <Route
            exact
            path="/saved"
            element={
              <SavedJourneyPage
                isLoggedIn={isLoggedIn}
                username={username}
                journeyList={journeyList}
                savedList={savedJourneys}
              />
            }
          />
          <Route exact path="/create" element={<CreateForm />} />
          <Route
            exact
            path="/journey/:id"
            element={<ProgressBar journeyList={journeyList} />}
          />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
