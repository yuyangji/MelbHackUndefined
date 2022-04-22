import React from "react";

function MilestoneInput({number}){

    //Returns milestone input areas
    return (
        <div id="milestone-input-row">
            <h3>{`Milestone ${number}`}</h3>
            <span hidden name="milestone_id" id={number} value={number}/>
            <p>
                <label>Milestone Name: </label>
                <input 
                type="text"
                name='milestoneTitles[]'
                id={number} />
            </p>
            <p>
                <label>Milestone content: </label>
                <textarea 
                name='milestoneContent[]'
                id={number} 
                style={{verticalAlign:"top"}}></textarea>
            </p>
        </div>
    )
}

export default MilestoneInput;