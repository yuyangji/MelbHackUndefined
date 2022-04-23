import React, { useEffect, useState } from "react";
import MilestoneCard from "./MilestoneCard";
import Button from "react-bootstrap/Button";
import axios from "axios";
import FormController from "./FormController";
import JourneyForm from "./JourneyForm";

function CreateForm() {
  //state to track how many milestones added
  const [title, setTitle] = useState("");
  const [milestones, setMilestones] = useState([{ title: "", content: "" }]);

  function submitCreateTimeline(e) {
    e.preventDefault();
    let milestoneArray = [];
    milestones.map(function (milestone, idx) {
      milestoneArray.push({
        step_no: idx,
        title: milestone.title,
        content: milestone.content,
      });
    });
    console.log(milestoneArray);
    if (FormController.publishJourney(title, milestoneArray)){
      window.location.href='/'
    }
 
  }

  //Below returns the milestone-creation form
  return (
    <div className="formPage">
      <JourneyForm
        formTitle="Create Timeline"
        onSubmit={submitCreateTimeline}
        milestones={milestones}
        setMilestones={setMilestones}
        setTitle={setTitle}
      />
    </div>
  );
}

export default CreateForm;
