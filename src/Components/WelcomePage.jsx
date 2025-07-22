import React from 'react'

// Version: [major].[minor].[release].[build]

const WelcomePage = ({ isAgentDetail }) => {
    return (
        <div className='page-container'>
            <h1>Welcome to Zenless Zone Zero Damage Calculator</h1>
            <h3>Version (Beta) 0.0.25.1 </h3>
            <div className='ticker'>
                <ul>
                    <li>{isAgentDetail?.fullName}</li>
                    <li>{isAgentDetail?.faction}</li>
                    <li>{isAgentDetail?.element}</li>
                </ul>
                <ul aria-hidden="false">
                    <li>{isAgentDetail?.fullName}</li>
                    <li>{isAgentDetail?.faction}</li>
                    <li>{isAgentDetail?.element}</li>
                </ul>
            </div>
        </div>
    )
}

export default WelcomePage