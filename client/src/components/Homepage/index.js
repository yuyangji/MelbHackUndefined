import React, { useState, useEffect } from "react";
import JourneyCardList from "../shared/JourneyCardList";
import homepagePic from "./images/homepage_pic.jpg";
import { Button } from "react-bootstrap";

const Homepage = ({ isLoggedIn, username, allJourney, savedJourney }) => {
  console.log(allJourney);
  useEffect(() => {
    setButtonText("Create a Journey")
  },[])

  const [buttonText, setButtonText] = useState("Create a Journey")
  const handleCreateBtn = (e)=>{
    if(!isLoggedIn){
      e.preventDefault();
      setButtonText("Please login!")
    }
  }

  return (
    <>
      {/* Layout placed under header */}
      <div style={{ minWidth: "100vw", minHeight: `calc(100vh - 56px)` }}>
        <div className="homepage_banner">
          <div className="homepage_banner-container">
            <div className="homepage_img-container">
              <img src={homepagePic} className="homepage_img" />
            </div>
            <div className="homepage_description-container">
              <h3>Start a new learning journey</h3>
              <p>
                Access resources and work through step-by-step milestones
                created by other users. Enhance your self-learning process!
              </p>
              <p>Or want to share your expertise?</p>
              <Button
                variant="success"
                style={{
                  width: "150px",
                  marginLeft: "10px",
                }}
                id="createJourney_btn"
                href="/create"
                onClick = {handleCreateBtn}
              >
                {isLoggedIn ? "Create a Journey" : buttonText}
              </Button>
            </div>
          </div>
        </div>
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
