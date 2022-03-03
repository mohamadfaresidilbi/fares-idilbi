import React from "react";
import insta from './ins.png';
import whatsapp from './whatsapp.png';
import linkedin from './li.png';

function Media() {

    return (
        <div class="cont">
            <a href="https://api.whatsapp.com/send?phone=96176732957" target="_blank">
                <p>
                    <img class="whatsapp" src={whatsapp} alt="Logo" />
                </p>
            </a>
            <a href="https://www.linkedin.com/in/fares-idilbi-454b2119a/" target="_blank">
                <p>
                    <img class="linkedin" src={linkedin} alt="Logo" />
                </p>
            </a>
        </div>
    );
}

export default Media;