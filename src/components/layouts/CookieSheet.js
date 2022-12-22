import React from 'react';
import CookieConsent from "react-cookie-consent";

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
            declineButtonText="Decline"
        >
            This website uses cookies to enhance the user experience.
        </CookieConsent>
    )
}

export default CookieSheet