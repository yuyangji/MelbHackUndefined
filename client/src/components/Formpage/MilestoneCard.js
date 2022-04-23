import React, { useEffect, useRef } from "react";
import {Button} from 'react-bootstrap'
function MilestoneCard({ index, setMilestones, milestones }) {
  const title = useRef();
  const content = useRef();

  useEffect(()=>{
      title.current.value = milestones[index].title
      content.current.value = milestones[index].content
  })

  const updateValues = () => {
    const currentMilestones = [...milestones];
    // Replace the current expense item
    currentMilestones.splice(index, 1, {
      title: title.current.value,
      content: content.current.value,
    });
    // Update the parent state
    setMilestones(currentMilestones);
  };

  const handleRemove = () => {
    var currentMilestones = [...milestones];
    currentMilestones.splice(index,1)
    setMilestones(currentMilestones);
  }

  //Returns milestone input areas
  return (
    <div className="milestoneContainer">
      <h3>{`Milestone ${index + 1}`}</h3>
      <span hidden name="milestone_id" id={index} value={index} />
      <div className="milestone_input_row">
        <label>Name</label>
        <input
          ref={title}
      
          onChange={updateValues}
          type="text"
          name="milestoneTitles[]"
          id={index}
        />
      </div>
      <div className="milestone_input_row">
        <label>Content</label>
        <textarea
          name="milestoneContent[]"
          id={index}
          ref={content}
          onChange={updateValues}
          style={{ verticalAlign: "top" }}
        ></textarea>
      </div>
      <Button
        onClick = {handleRemove}
      >
          Remove
      </Button>
    </div>
  );
}

export default MilestoneCard;
