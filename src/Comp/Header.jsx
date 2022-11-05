import React from "react";
import files from './cvNew.pdf';

function Header() {
    return (
        <nav>
            <div class="container-fluid">
                <div class="navbar-header">
                    <p class="my-name"><b>Mhd Fares Idilbi </b></p>
                    
                    <p class="my-job"><b>Web Developer </b></p>
                </div>
                
                <ul class="my-title">
                    <li>

                    </li>
                    <li><a href="#skills"><b>Skills</b></a></li>
                    <li><a href="#experience"><b>Experience</b></a></li>
                    <li><a href="#freelance"><b>Freelancing</b></a></li>
                    <li><a href="#education"><b>Education</b></a></li>
                    <li><a href="#contact-us"><b>Contact Me</b></a></li>
                    <li><a href={files} target="_blank" download="Fares Idilbi - CV"><b>Download Resume</b></a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;