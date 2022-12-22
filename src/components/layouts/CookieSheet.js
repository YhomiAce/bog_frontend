import React from 'react';
import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom';

const CookieSheet = () => {
    const handleAcceptCookie = () => {
        console.log('cookie accepted');
        // ga tracking if they want to do it
    }
    return (
        <CookieConsent
            enableDeclineButton
            onAccept={handleAcceptCookie}
            buttonText="Accept"
            style={{ background: "#3F79AD" }}
            buttonStyle={{ color: "#EC8B20", fontSize: "15px", padding: "5px 10px", borderRadius: "10px" }}
        >
           We use cookies to offer you a better browsing experience and analyze site traffic. If you continue to use this site, you consent to our use of cookies. <Link to="/">Learn More</Link>
        </CookieConsent>
    )
}

export default CookieSheet