import React from "react";

function Footer() {
    var d = new Date();
    var y = d.getFullYear();
    return (
    <footer>
        <div class="my-footer">
            <p class="footer-content"><b> Copyright © {y} mhdfaresidilbi.com</b></p>
        </div>
    </footer>

    );
}


export default Footer;