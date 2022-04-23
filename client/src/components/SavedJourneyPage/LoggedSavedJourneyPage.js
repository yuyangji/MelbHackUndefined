import React from "react";
import JourneyCardList from "../shared/JourneyCardList";

const LoggedSavedJourneyPage = ({ username, journeyList, savedList }) => {
  // get my journey and saved journey
  var myJourneyList = [];
  var savedJourneyList = [];

  for (let i in journeyList) {
    if (journeyList[i].author_name === username) {
      myJourneyList.push(journeyList[i]);
    }
    for (let saved in savedList) {
      if (journeyList[i]._id === savedList[saved]._id) {
        savedJourneyList.push(journeyList[i]);
       
      }
    }
  }

  return (
    <>
      {/* Layout placed under header */}
      <div style={{ minWidth: "100vw", minHeight: `calc(100vh - 56px)` }}>
        <div
          style={{
            padding: "20px 24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "0 auto",
            maxWidth: "1248px",
          }}
        >
          <div>
            <JourneyCardList
              style={{ display: "block" }}
              journeyList={savedJourneyList}
              savedList={savedList}
              listTitle="Saved Journeys"
            />
          <br/>
            <JourneyCardList
              style={{ display: "block" }}
              journeyList={myJourneyList}
              savedList={savedList}
              listTitle="My Journeys"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedSavedJourneyPage;
