import MilestoneCard from "./MilestoneCard";
import Button from "react-bootstrap/Button";

export const journeyForm = ({
  formTitle,
  onSubmit,
  milestones,
  setMilestones,
  setTitle,
}) => {
  function handleAddMilestone() {
    //update number + render input
    setMilestones([...milestones, { title: "", content: "" }]);
  }

  return (
    <form onSubmit={onSubmit} className="formContainer">
      <h1>{formTitle}</h1>
      <label className="form_journeyTitle">Journey Title</label>
      <input
        type="text"
        required="requried"
        name="title"
        id="timeline-title"
        placeholder="e.g. Python"
        className="formTitleInput"
        onChange={(e) => setTitle(e.currentTarget.value)}
      />

      <div id="milestone_container">
        {milestones.map(function (milestone, num) {
          return (
            <MilestoneCard
              name={"milestone"}
              key={num}
              index={num}
              milestones={milestones}
              setMilestones={setMilestones}
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

        <Button
          bsPrefix="formSaveBtn"
          type="submit"
          value="createTimeline"
          id="createTimeline"
        
        >
          Save Journey
        </Button>
 
      </p>
    </form>
  );
};

export default journeyForm;
