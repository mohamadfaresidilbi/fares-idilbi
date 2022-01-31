import React from "react";

function Email() {

    return (

            <section id="contact-us">
                <h3>Contact Me</h3>
                <p class="business">
                    For Business Inquiries feel free to contact me.
                </p>
                <div>
                    <form action="mailto:mhdfaresidilbi@gmail.com" method="POST" enctype="text/plain">            
                        <input type="text" id="fname" name="First name " placeholder="First Name *" required="required"/>
                        <input type="text" id="lname" name="Last name " placeholder="Last Name *" required="required"/><br/>
                        <input type="email" id="email" name="Email " placeholder="Email *" required="required" />
                        <input type="tel" id="tel" name="Phone number " placeholder="+961 76727376" /> <br/>
                        <textarea id="msg" name="Message " rows="4" cols="50" placeholder="Your Message *" required="required" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section>


    );
}

export default Email;