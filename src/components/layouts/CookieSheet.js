import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieSheet = () => {
    const customButtonProps = () => {
        console.log('cookie accepted');
        // ga tracking if they want to do it
    }
    return (
        <CookieConsent
            // enableDeclineButton
            onAccept={customButtonProps}
            buttonText="Got It"
            className='!w-3/12'
            // style={{ background: "black" ,display:"block",position:"fixed", padding: "0px 10px", width:"30%", left: "2%", bottom: "30px", height: "200px"}}
            containerClasses="lg:!w-4/12 !w-11/12 rounded-lg !bg-white !text-primary shades !border-3 lg:!left-6 !left-3 !bottom-4 lg:!p-5"
            contentClasses=""
            buttonClasses="!bg-primary !text-white lg:!px-24 !py-2 !px-10 rounded"
            // buttonStyle={{ color: "black", backgroundColor: "white",fontWeight: "bold", fontSize: "16px", padding: "12px 15px", width: "100%", position: "relative", left: "-25%", borderRadius: "10px" }}
        >
          <p className='lg:fw-700 fw-600 fs-700 lg:text-xl mb-2 lg:mb-4'>We value your privacy</p> We use cookies to offer you a better browsing experience and analyze site traffic. If you continue to use this site, you consent to our use of cookies. <span className='underline'> Learn More</span>
        </CookieConsent>
    )
}

export default CookieSheet