import React from 'react'

const Background1 = ({ isAgentDetail }) => {
    return (
        <div className='background1'>
            <div className='ticker'>
                <ul>
                    <li>{isAgentDetail?.fullName}</li>
                    <li>{isAgentDetail?.fullName}</li>
                    <li>{isAgentDetail?.fullName}</li>
                </ul>
                <ul aria-hidden="false">
                    <li>{isAgentDetail?.fullName}</li>
                    <li>{isAgentDetail?.fullName}</li>
                    <li>{isAgentDetail?.fullName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Background1

/*import React from 'react'

const Background1 = ({ isAgentDetail }) => {
    function createLiTag(index) {
        if (!isAgentDetail) return null;
        const list = [];
        for (let i = 1; i > 0 && i < 6; i++) {
            list.push(<li key={i}>{index}</li>)
        };
        return list
    }

    return (
        <div className='background1'>
            <div className='ticker'>
                <ul>
                    {createLiTag(isAgentDetail?.fullName)}
                </ul>
                <ul aria-hidden="false">
                    {createLiTag(isAgentDetail?.fullName)}
                </ul>
            </div>
            <div className='ticker'>
                <ul>
                    {createLiTag(isAgentDetail?.faction)}
                </ul>
                <ul aria-hidden="false">
                    {createLiTag(isAgentDetail?.faction)}
                </ul>
            </div>
            <div className='ticker'>
                <ul>
                    {createLiTag(isAgentDetail?.element)}
                </ul>
                <ul aria-hidden="false">
                    {createLiTag(isAgentDetail?.element)}
                </ul>
            </div>
        </div>
    )
}

export default Background1 */