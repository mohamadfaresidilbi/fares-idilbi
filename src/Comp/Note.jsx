import React from "react";
import download from './download.png';
import files from './cv.pdf';

function Body() {

    return (
    
        <body class="my-body">

            <section class="my-info">
                <div class="flex-containers">
                    <div class="me">
                        <img src={download} alt="Logo" />
                        <h1>Mhd Fares Idilbi</h1>
                        <h2>Web Developer</h2>
                        <p id="summary">
                            A Computer Science graduate from The American University of Beirut. I am currently working as a Full <br />Stack Web Developer at Presentail.
                        </p>
                    </div>
                    <div class="social">
                            <a href="https://www.google.com/maps/place/Beirut,+Lebanon/@33.8892183,35.5042823,13z/data=!4m2!3m1!1s0x151f17215880a78f:0x729182bae99836b4" target="_blank"><i class="fas fa-map-pin"></i> &nbsp;<b>Beirut, Lebanon</b></a>
                            <a href="tel:+96176732957"><i class="fas fa-phone"></i> &nbsp;<b>+961 76732957</b></a>
                            <a href="mailto:mhdfaresidilbi@gmail.com"><i class="fas fa-envelope"></i> &nbsp;<b>mhdfaresidilbi@gmail.com</b></a>
                            <a href="https://www.faresidilbi.com"><i class="fas fa-paperclip"></i> &nbsp;<b>faresidilbi.com</b></a>
                            <a href={files} target="_blank" download="Fares Idilbi - CV"><i class="fas fa-file-export"></i> &nbsp;<b>My CV</b></a>
                    </div>
                </div>
            </section>

            <section class="my-skills" id="skills">
            <h3>Skills</h3>
                <div class="flex-container">
                    <div class="colone"> 
                        <ul>
                            <li class="title"><u>Web Development</u></li>
                            <li>JavaScript</li>
                            <li>Wordpress / Woocommerce</li>
                            <li>HTML5</li>
                            <li>CSS / SASS</li>
                            <li>Bootstrap</li>
                            <li>PHP</li>
                            <li>Jquery</li>
                        </ul>
                    </div>
                    <div class="coltwo"> 
                        <ul>
                                <li class="title"><u>Programming Languages</u></li>
                                <li>JavaScript</li>
                                <li>C++</li>
                                <li>Python</li>
                                <li>PHP</li>
                        </ul>
                    </div>
                    <div class="colthree"> 
                        <ul>
                            <li class="title"><u>Frameworks / Platforms</u></li>
                            <li>React.js</li>
                            <li>Wordpress / Woocommerce</li>
                            <li>Laravel</li>
                        </ul>
                    </div>
                    <div class="colfour"> 
                        <ul>
                            <li class="title"><u>DataBase</u></li>
                            <li>MySql</li>
                            <li>PHPMyAdmin</li>
                            <li>SQLServer</li>
                        </ul>
                    </div>
                    <div class="colfive"> 
                        <ul>
                            <li class="title"><u>Extra Skills</u></li>
                            <li>Team Leadership</li>
                            <li>Communication</li>
                            <li>Collaboration</li>
                            <li>Creativity</li>
                            <li>Agile Development</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="my-exp" id="experience">
                <h3>Experience</h3>
                <div>
                    <ul>
                        <li><p id="title-pad"><u>Web Developer</u></p><p>Presentail S.A.L. | <a href="https://presentail.com/" target="_blank">https://presentail.com/</a> | <span id="greys">September 20, 2021 - Present</span></p></li>
                        <li><p id="title-pad"><u>Web Developer</u></p><p>Beirut AI | <a href="https://beirutai.org/" target="_blank">https://beirutai.org/</a> | <span id="greys">January 1, 2021 - December 31, 2021</span> </p></li>
                        <li><p id="title-pad"><u>Web Development Intern</u></p><p>Zaka AI | <a href="https://zaka.ai/" target="_blank">https://zaka.ai/</a> | <span id="greys">December 18, 2020 - March 18, 2021</span> </p></li>
                        <li><p id="title-pad"><u>Web Development Intern</u></p><p>AUB Outlook Newspaper | <span id="greys">January 9, 2021 - February 10, 2021</span></p></li>
                    </ul>
                </div>
            </section>

            <section class="my-exp" id="education">
                <h3>Education</h3>
                <div>
                    <ul>
                        <li><p id="title-pad"><u>American University of Beirut</u></p><p><span id="greys">2017 - 2020</span></p></li>
                        <li><p id="title-pad"><u>City International School</u></p><p><span id="greys">2012 - 2017</span></p></li>
                    </ul>
                </div>
            </section>

            <section class="my-exp">
                <h3>Volunteering</h3>
                <div>
                    <ul>
                        <li><p id="title-pad"><u>Ajialouna Organization</u></p><p><span id="greys">2017</span></p></li>
                        <li><p id="title-pad"><u>Foodblessed</u></p><p><span id="greys">2019 - 2021</span></p></li>
                    </ul>
                </div>
            </section>

            <section id="contact-us">
                <h3>Contact Me</h3>
                <div>
                    <form action="mailto:mhdfaresidilbi@gmail.com" method="POST">            
                        <input type="text" id="fname" name="fname" placeholder="First Name"/>
                        <input type="text" id="lname" name="lname" placeholder="Last Name"/><br/>
                        <input type="email" id="email" name="email" placeholder="Email"/> <br/>
                        <textarea id="msg" name="msg" rows="4" cols="50" placeholder="Your Message" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section>

        </body>
    );
}

export default Body;