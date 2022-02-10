import React from "react";
import Zaka from './zakaAI.jpeg';
import Outlook from './AUBOutlook.jpeg';

function Experience() {

    return (
            <section class="my-exp" id="experience">
                <h3>Experience</h3>
                <div>
                    <ul>
                        <li>
                            <p id="title-pad"><u>Web Developer</u></p>
                            <p>Loolia Closet | Full-time | <a href="https://looliacloset.com/" target="_blank">https://looliacloset.com/</a> | <span id="greys">January 10, 2021 - Present</span></p>
                        </li>
                        <li>
                            <p id="title-pad"><u>Web Developer</u></p>                        
                            <p>Presentail S.A.L. | Full-time | <a href="https://presentail.com/" target="_blank">https://presentail.com/</a> | <span id="greys">September 20, 2021 - January 10, 2022</span></p></li>
                        <li>
                            <p id="title-pad"><u>Web Developer</u></p>
                            <p>Beirut AI | Part-time | <a href="https://beirutai.org/" target="_blank">https://beirutai.org/</a> | <span id="greys">January 1, 2021 - December 31, 2021</span> </p>
                        </li>
                        <li>
                            <p id="title-pad"><u>Web Development Intern</u></p>
                            <p>Zaka AI | <a href="https://zaka.ai/" target="_blank">https://zaka.ai/</a> | <a href="https://city.ai/" target="_blank">https://city.ai/</a> | <a href={Zaka} target="_blank" class="cv" download="Zaka Certificate"><b>Download Certificate</b></a> | <span id="greys">December 18, 2020 - March 18, 2021</span> </p>
                        </li>
                        <li>
                            <p id="title-pad"><u>Web Development Intern</u></p>
                            <p>AUB Outlook Newspaper | <a href={Outlook} target="_blank" class="cv" download="AUB Outlook Certificate"><b>Download Certificate</b></a> |<span id="greys"> January 9, 2021 - February 10, 2021</span></p>
                        </li>
                    </ul>
                </div>
            </section>
    );
}

export default Experience;