import { useEffect, useState } from 'react';
import { getAllCharacters, getCharacterDetails } from './zzz-api';

const Agent = () => {

    const [characterGeneralData, setCharacterGeneralData] = useState({});
    const [isSelectedID, setIsSelectedID] = useState('');
    const [isAgentDetail, setIsAgentDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [userSliderLevel, setUserSliderLevel] = useState(1); // This is for user interactivity to change agent's level


    useEffect(() => { // First use this to fecth agent code that will be used to fecth the detailed data of the agent
        async function firstFetch() {
            try {
                setIsError(null);
                setIsLoading(true);
                const listID = await getAllCharacters();
                console.log('Initial fetched data', listID)
                setCharacterGeneralData(listID);
            } catch (err) {
                setIsError(err.message);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }
        firstFetch();
    }, []); // fetch one time only

    useEffect(() => {
        if (!isSelectedID) {
            setIsAgentDetail(null);
            return
        }

        async function secondFetch() { // Third the ID is being use to fetch detailed data
            try {
                setIsError(null);
                setIsLoading(true);
                const dataAgent = await getCharacterDetails(isSelectedID);
                console.log('Second fetched data', dataAgent);
                setIsAgentDetail(dataAgent);
            } catch (err) {
                setIsError(err.message);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }

        secondFetch();
    }, [isSelectedID]); // This is so the function repeat everytime user change the agent

    useEffect(() => { // This is for the specific ascension stats since each agent have different ascension stats
        if (!isSelectedID || !isAgentDetail) {
            return console.log('The agent has not been selected yet.')
        }

        const agentLevel = isAgentDetail && Object.values(isAgentDetail.ExtraLevel['1'].Extra)[1].Value;
        console.log(agentLevel);

    }, [isAgentDetail])

    const handleSelectedAgent = (event) => {
        setIsSelectedID(event.target.value)
    };

    const handleSliderAgentLevel = (event) => { // This is for slider level

        // Get the value from the event (it's always a string)
        const newLevelString = event.target.value;

        // Convert the string to a number
        const newLevelNumber = parseInt(newLevelString, 10);

        setUserSliderLevel(newLevelNumber);
        // For shorter use => setUserSliderLevel(parseInt(event.target.value))
        console.log(newLevelNumber)
    }

    const agentHP = isAgentDetail?.Stats?.HpMax + 0;
    const agentAttack = isAgentDetail?.Stats.Attack + 0;
    const agentDefence = isAgentDetail?.Stats.Defence + 0;
    const agentImpact = isAgentDetail?.Stats.BreakStun + 0;
    const agentCritRate = (isAgentDetail?.Stats?.Crit + 0) / 100;
    const agentCritDamage = (isAgentDetail?.Stats?.CritDamage + 0) / 100;
    const agentAnomalyMastery = isAgentDetail?.Stats?.ElementAbnormalPower + 0;
    const agentAnomalyProficiency = (isAgentDetail?.Stats?.ElementMystery + 0);
    const agentPenetration = (isAgentDetail?.Stats?.PenRate + 0) / 100;
    const agentEnergyRegen = (isAgentDetail?.Stats?.SpRecover + 0);

    // This part for ascension stats
    const agentHPAscension = '';
    const agentAttackAscension = '';
    const agentDefenceAscension = '';
    const agentImpactAscension = ''; // yes
    const agentCritRateAscension = ''; // yes
    const agentCritDamageAscension = '';
    const agentAnomalyMasteryAscension = ''; // yes
    const agentAnomalyProficiencyAscension = '';
    const agentPenetrationAscension = '';
    const agentEnergyRegenAscension = ''; // Yes


    return (
        <div>
            {/* Second is to create a menu to select which agent id to be use to fetch the detailed data */}
            <div>
                <select value={isSelectedID} onChange={handleSelectedAgent} disabled={isLoading}>
                    <option value="">Choose</option>
                    {Object.entries(characterGeneralData).map(([ID, agent]) => (
                        <option key={ID} value={ID}>{agent.code}</option>
                    ))}
                </select>
            </div>
            <hr />
            {isLoading && (<div>Loading...</div>)}
            {isError && (<div>Error: {isError}</div>)}

            {isAgentDetail && (
                <div>
                    <div>
                        <h3>Agent: {isAgentDetail?.PartnerInfo?.FullName ?? "No agent has have been selected."}</h3>
                        <h2>A.K.A "{isAgentDetail?.CodeName}"</h2>
                    </div>
                    <div>Member of {isAgentDetail?.Camp && Object.values(isAgentDetail.Camp).map((value, index) => (
                        <span key={index}>{String(value)}</span> // This is if there are multiple value inside the object
                    ))} faction.</div>
                    <div className='flex flex-col'>
                        <span>Attribute: {isAgentDetail?.ElementType && Object.values(isAgentDetail?.ElementType).join()}</span> {/* This is for single line inside heading */}
                        <span>Speciality: {isAgentDetail?.WeaponType && Object.values(isAgentDetail?.WeaponType).join()}</span>
                    </div>
                    <div className='flex flex-col'>
                        <h3>Character Base Stats</h3>
                        <div>
                            <input type="range" id='agentLevel' value={userSliderLevel} onChange={handleSliderAgentLevel} name='agentLevel' min="1" max="6" step="1" />
                        </div>
                        <span>HP: {agentHP}</span>
                        <span>ATK: {agentAttack}</span>
                        <span>DEF: {agentDefence}</span>
                        <span>Impact: {agentImpact}</span>
                        <span>CRIT Rate: {agentCritRate}%</span>
                        <span>CRIT DMG: {agentCritDamage}%</span>
                        <span>Anomaly Mastery: {agentAnomalyMastery}</span>
                        <span>Amomaly Proficiency: {agentAnomalyProficiency}</span>
                        <span>PEN Ratio: {agentPenetration}%</span>
                        <span>Energy Regen: {agentEnergyRegen}</span>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Agent