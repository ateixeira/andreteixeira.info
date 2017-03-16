import React from 'react';

import Info from "./cv/info"
import WorkExperience from "./cv/workexperience"
import AwardsSkills from "./cv/awardskills"

import data from "../data/seed"


module.exports = React.createClass({
    // RENDER
    render: function() {        
        return (
            <div className="cv">
                <div className="box">
                    <h1>CURRICULUM VITAE</h1>
                   	<Info />
                   	<WorkExperience experiences={data.EXPERIENCES}/>
                   	<AwardsSkills skills={data.SKILLS}/>
                </div>
                <br/>
            </div>
        );
    }
});