import React from 'react';

import Info from "./cv/info"
import WorkExperience from "./cv/workexperience"
import AwardsSkills from "./cv/awardskills"
 
var EXPERIENCES = [
	{
		"id": 2,
		"from": "2003-01", 
		"until": "2004-12",
		"title": "FrontEnd Engineer",
		"hashtags": ['Android', 'iOS', 'reactJS'],
		"location": 'Urbanizo – Brasília, DF, Brazil',
		"contact_name": "Marcos Beto",
		"contact_phone": "+55 61 98158-5100",
		"information": "Very strong Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis turpis ac porttitor malesuada. Donec eu vehicula tortor. Nulla scelerisque augue turpis, vel vestibulum turpis gravida id. Maecenas vel efficitur ligula."
	},
	{
		"id": 1,
		"from": "2003-01", 
		"until": "2004-12",
		"title": "FrontEnd Engineer",
		"hashtags": ['Android', 'iOS', 'reactJS'],
		"location": 'Urbanizo – Brasília, DF, Brazil',
		"contact_name": "Marcos Beto",
		"contact_phone": "+55 61 98158-5100",
		"information": "Very strong Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis turpis ac porttitor malesuada. Donec eu vehicula tortor. Nulla scelerisque augue turpis, vel vestibulum turpis gravida id. Maecenas vel efficitur ligula."
	}
];

module.exports = React.createClass({


    // RENDER
    render: function() {
        
        return (
            <div className="cv">
                <div className="box">
                    <h1>CURRICULUM VITAE</h1>
                   	<Info />
                   	<WorkExperience experiences={EXPERIENCES}/>
                   	<AwardsSkills />
                </div>
                <br/>
            </div>
        );
    }
});