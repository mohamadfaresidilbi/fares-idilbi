import React from "react";
import download from './mee.png';
import files from './cv.pdf';

function Desc() {

    return (

            <section class="my-info">
                <div class="flex-containers">
                    <div class="me">
                        <img src={download} alt="Logo" />
                        <h1>Mhd Fares Idilbi</h1>
                        <h2>Web Developer</h2>
                        <p id="summary">
                            A Computer Science graduate from The American University of Beirut. I am currently working as a Full Stack Web Developer at Presentail.
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

    );
}

export default Desc;