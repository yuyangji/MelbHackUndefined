import React from "react";

function MilestoneInput({number}){

    //Returns milestone input areas
    return (
        <div  className='milestoneContainer'>
            <h3>{`Milestone ${number}`}</h3>
            <span hidden name="milestone_id" id={number} value={number}/>
            <div className="milestone_input_row">
                <label>Name</label>
                <input 
                type="text"
                name='milestoneTitles[]'
                id={number} />
            </div>
            <div className="milestone_input_row">
                <label>Content</label>
                <textarea 
                name='milestoneContent[]'
                id={number} 
                style={{verticalAlign:"top"}}></textarea>
            </div>
        </div>
    )
}

export default MilestoneInput;