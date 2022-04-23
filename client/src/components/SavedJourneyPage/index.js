import React from "react";
import LoggedSavedJourneyPage from "./LoggedSavedJourneyPage";
import NotLoggedSavedJourneyPage from "./NotLoggedSavedJourneyPage";

const SavedJourneyPage = ({ isLoggedIn, username, journeyList, savedList }) => {
  if (isLoggedIn) {
    return (
      <LoggedSavedJourneyPage
        username={username}
        journeyList={journeyList}
        savedList={savedList}
      />
    );
  } else {
    return <NotLoggedSavedJourneyPage />;
  }
};

export default SavedJourneyPage;
