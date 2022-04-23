import React, { useEffect } from "react";
import JourneyCardList from "../shared/JourneyCardList";

const Homepage = ({ isLoggedIn, username, allJourney, savedJourney }) => {
  console.log(allJourney);
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
              journeyList={allJourney}
              savedList={savedJourney}
              listTitle="All Journeys"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
