import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieSheet = () => {
    const handleAcceptCookie = () => {
        console.log('cookie accepted');
        // ga tracking if they want to do it
    }
    return (
        <CookieConsent
            // enableDeclineButton
            onAccept={handleAcceptCookie}
            buttonText="Got It"
            style={{ background: "#3F79AD" }}
            buttonStyle={{ color: "black", backgroundColor: "white",fontWeight: "bold", fontSize: "16px", padding: "12px 15px", width: "100%", position: "relative", left: "-25%", borderRadius: "10px" }}
        >
           We use cookies to offer you a better browsing experience and analyze site traffic. If you continue to use this site, you consent to our use of cookies.
        </CookieConsent>
    )
}

export default CookieSheet