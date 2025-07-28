import React, { useEffect } from 'react'
import { h2ClassColour } from './ResponsiveColour';

const Background1 = ({ isAgentDetail }) => {
    function renderSpans(text, placeholder, count = 3) {
        const display = text ?? placeholder
        const spans = [];
        for (let i = 0; i < count; i++) {
            spans.push(<span key={i}>{display}</span>);
        }
        return spans;
    };

    // controlling 
    useEffect(() => {
        h2ClassColour(isAgentDetail?.colors);
        console.log(isAgentDetail?.colors?.accent);
        console.log(isAgentDetail?.colors?.primary);
        console.log(isAgentDetail?.colors?.secondary);
    }, [isAgentDetail])

    return (
        <div className='background1'>
            <div className='ticker'>
                <ul>
                    <li>
                        {renderSpans(isAgentDetail?.fullName.toUpperCase(), "Agent Name")}
                    </li>
                    <li>
                        {renderSpans(isAgentDetail?.fullName.toUpperCase(), "Agent Name")}
                    </li>
                </ul>
                <ul aria-hidden="false">
                    <li>
                        {renderSpans(isAgentDetail?.fullName.toUpperCase(), "Agent Name")}
                    </li>
                    <li>
                        {renderSpans(isAgentDetail?.fullName.toUpperCase(), "Agent Name")}
                    </li>
                </ul>
            </div>
            <div className='ticker'>
                <ul>
                    <li>
                        {renderSpans(isAgentDetail?.faction.toUpperCase(), "Faction")}
                    </li>
                    <li>
                        {renderSpans(isAgentDetail?.faction.toUpperCase(), "Faction")}
                    </li>
                </ul>
                <ul aria-hidden="false">
                    <li>
                        {renderSpans(isAgentDetail?.faction.toUpperCase(), "Faction")}
                    </li>
                    <li>
                        {renderSpans(isAgentDetail?.faction.toUpperCase(), "Faction")}
                    </li>
                </ul>
            </div>
            <div className='ticker'>
                <ul>
                    <li>{renderSpans(isAgentDetail?.element.toUpperCase(), "Element", 6)}</li>
                </ul>
                <ul aria-hidden="false">
                    <li>{renderSpans(isAgentDetail?.element.toUpperCase(), "Element", 6)}</li>
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