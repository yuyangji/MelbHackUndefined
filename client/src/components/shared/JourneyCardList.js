import React from "react";
import JourneyCard from "./JourneyCard";

const JourneyCardList = ({ journeyList, savedList, listTitle }) => {
  return (
    <>
      <div style={{ marginBottom: "5px", marginLeft: "5px" }}>{listTitle}</div>
      {journeyList.map((journey, index) => (
        <JourneyCard key={index} journey={journey} savedList={savedList} />
      ))}
    </>
  );
};

export default JourneyCardList;
