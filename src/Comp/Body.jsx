import React from "react";
import Email from "./Email";
import Desc from "./Desc";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Volunteer from "./Volunteer";
import Freelance from "./Freelance";

function Body() {

    return (
    
        <body class="my-body">

            <Desc />

            <Skills />
            
            <Experience />

            <Education />

            <Volunteer />

            <Freelance />

            <Email />

        </body>
    );
}

export default Body;