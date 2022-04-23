import FormController from "./FormController";
import JourneyForm from "./JourneyForm";
import {useState} from 'react'

export const EditForm = ({ id, savedMilestones }) => {
  const [title, setTitle] = useState("");
  const [milestones, setMilestones] = useState(savedMilestones);

  function submitEditTimeline(e) {
    e.preventDefault();
    let milestoneArray = [];
    milestones.map(function (milestone, idx) {
      const milestoneObj = {
        step_no: idx,
        title: milestone.title,
        content: milestone.content,
      };
      milestoneArray.push({ milestoneObj });
    });
    console.log(milestoneArray);
    FormController.editJourney(id, title, milestoneArray);
  }

  return (
    <JourneyForm
      formTitle = "Edit Timeline"
      onSubmit={submitEditTimeline}
      milestones={milestones}
      setMilestones={setMilestones}
      setTitle={setTitle}
    />
  );
};

export default EditForm;