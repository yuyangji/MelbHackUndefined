import React from "react";
import JourneyCard from "./JourneyCard";

const JourneyCardList = ({ journeyList, savedList }) => {
  return (
    <>
      {journeyList.map((journey, index) => (
        <JourneyCard key={index} journey={journey} savedList={savedList} />
      ))}
    </>
  );
};

export default JourneyCardList;
