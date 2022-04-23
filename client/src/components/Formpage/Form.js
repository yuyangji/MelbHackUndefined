import React, { useEffect, useState } from "react";
import MilestoneInput from "./Milestone";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Form() {
  //state to track how many milestones added
  const [numOfMilestones, setNumOfMilestones] = useState([1]);

  //set to one at start
  useEffect(() => {
    setNumOfMilestones([1]);
  }, []);

  function handleAddMilestone() {
    //How many milestones user added
    const arrayOfMilestones = numOfMilestones;
    const lastMilestone = arrayOfMilestones[arrayOfMilestones.length - 1];

    //update number + render input
    setNumOfMilestones([...arrayOfMilestones, lastMilestone + 1]);
  }

  function submitCreateTimeline(e) {
    e.preventDefault();
    //1. milestone title + content in arrays
    const allTitles = [];
    const allContents = [];

    //2. Array of milestone objects
    const milestoneObjArray = [];

    //function to save milestone data
    function getvalues() {
      //milestone title
      const milestoneTitleInput =
        document.getElementsByName("milestoneTitles[]");

      for (let i = 0; i < milestoneTitleInput.length; i++) {
        const eachTitle = milestoneTitleInput[i];
        allTitles.push(eachTitle.value);
      }

      //for milestone content
      const milestoneContentInput =
        document.getElementsByName("milestoneContent[]");

      for (let i = 0; i < milestoneContentInput.length; i++) {
        const eachContent = milestoneContentInput[i];
        allContents.push(eachContent.value);
      }
    }

    //call above function when form submits
    getvalues();

    //turn above arrays into object key + values
    numOfMilestones.map(function (milestone) {
      const milestoneObj = {
        step_no: milestone,
        title: allTitles[milestone - 1],
        content: allContents[milestone - 1],
      };
      milestoneObjArray.push(milestoneObj);
    });

    ///////////////////////////Logs
    console.log(allTitles);
    console.log(allContents);
    console.log(milestoneObjArray);

    ///////////////Need axious post to Node/Mongoose
  }

  //Below returns the milestone-creation form
  return (
    <form onSubmit={submitCreateTimeline} className="formContainer">
        
      <h1>Create a Journey</h1>
      <label className="form_journeyTitle">Journey Title</label>
      <input
        type="text"
        required="requried"
        name="title"
        id="timeline-title"
        placeholder="e.g. Python"
        className = "formTitleInput"
      />

      <div id="milestone_container">
        {numOfMilestones.map(function (milestone) {
          return (
            <MilestoneInput
              name={"milestone"}
              number={milestone}
              key={milestone}
              id={milestone}
            />
          );
        })}
      </div>

      <p>
        <Button
          type="button"
          value="addMilestone"
          id="addMilestone"
          onClick={handleAddMilestone}
          variant="outline-primary"
        >
          Add milestone
        </Button>
      </p>

      <p>
        <Button type="submit" value="createTimeline" id="createTimeline">
          Create Journey
        </Button>
      </p>
    </form>
  );
}

export default Form;
