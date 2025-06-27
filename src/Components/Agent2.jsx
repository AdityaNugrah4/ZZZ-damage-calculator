import React, { useEffect, useMemo, useState } from 'react'

const Agent2 = ({ isAgentDetail, isLoading }) => {

    const [userSliderAgentLevel, setUserSliderAgentLevel] = useState(0);
    const [userSliderAgentSkillLevel, setUserSliderAgentSkillLevel] = useState(0);
    const [userAgentSpecificSkillLevels, SetUserAgentSpecificSkillLevels] = useState({
        basic: 0,
        dodge: 0,
        assist: 0,
        special: 0,
        chain: 0,
        core: 0,
    });
    const [userAgentLevelSkillBasic, setUserAgentLevelSkillBasic] = useState(0);
    const [userAgentLevelSkillDodge, setUserAgentLevelSkillDodge] = useState(0);
    const [userAgentLevelSkillAssist, setUserAgentLevelSkillAssist] = useState(0);
    const [userAgentLevelSkillSpecial, setUserAgentLevelSkillSpecial] = useState(0);
    const [userAgentLevelSkillChain, setUserAgentLevelSkillChain] = useState(0);
    const [userAgentLevelSkillCore, setUserAgentLevelSkillCore] = useState(0);


    const calculatedAgentStats = useMemo(() => {
        if (!isAgentDetail?.stats) {
            return null
        };
        const { stats } = isAgentDetail;

        if (userSliderAgentLevel < 0 || userSliderAgentLevel >= (stats.hp?.length ?? 0)) {
            return {};
        };

        const calculatedStats = {
            agentHP: isAgentDetail?.stats?.hp?.[userSliderAgentLevel], // ascension
            agentAttack: isAgentDetail?.stats?.atk?.[userSliderAgentLevel], // ascension
            agentDefence: isAgentDetail?.stats?.def?.[userSliderAgentLevel], // ascension
            agentImpact: isAgentDetail?.stats?.impact?.[userSliderAgentLevel], // ascension
            agentCritRate: 5, // ascension
            agentCritDamage: 50,
            agentAnomalyMastery: isAgentDetail?.stats?.am?.[userSliderAgentLevel], // ascension
            agentAnomalyProficiency: isAgentDetail?.stats?.ap?.[userSliderAgentLevel], // ascension
            agentPenetration: (isAgentDetail?.stats?.pen?.[userSliderAgentLevel] ?? 0) / 100,
            agentEnergyRegen: (isAgentDetail?.stats?.er?.[userSliderAgentLevel] ?? 0) / 100, // ascension
        };

        const { ascension } = stats;

        if (ascension) {
            const getAscensionndex = (levelSliderIndex) => { // A function to check if the slider is less or more than 3
                if (levelSliderIndex <= 2) return null;
                if (levelSliderIndex <= 6) return 0;
                if (levelSliderIndex <= 9) return 1;
                if (levelSliderIndex <= 10) return 2;
                if (levelSliderIndex === 11) return 3;
                return null;
                /* if (levelSliderIndex < 4) return null;
                { // For slider 4,5 -> index 0 | 6,7 -> index 1 | 8,9 -> index 2 | 10,11 -> index 3
                    return Math.min(Math.floor((levelSliderIndex - 4) / 2), 4)
                } */
            };

            const ascensionIndex = getAscensionndex(userSliderAgentLevel);
            console.log(`Slider index: ${userSliderAgentLevel}, Ascension bonus index: ${ascensionIndex}`);

            if (ascensionIndex !== null) {
                if ('CRIT Rate' in ascension) {
                    const bonusStats = ascension['CRIT Rate'][ascensionIndex];
                    calculatedStats.agentCritRate += (bonusStats / 100)
                } else if ('Impact' in ascension) {
                    calculatedStats.agentImpact += (ascension['Impact'][ascensionIndex])
                } else if ('Base Energy Regen' in ascension) {
                    calculatedStats.agentEnergyRegen += (ascension['Base Energy Regen'][ascensionIndex])
                } else if ('Anomaly Mastery' in ascension) {
                    calculatedStats.agentAnomalyMastery += (ascension['Anomaly Mastery'][ascensionIndex])
                } else if ('PEN Ratio' in ascension) {
                    calculatedStats.agentPenetration += (ascension['PEN Ratio'][ascensionIndex] / 100)
                } else if ('CRIT DMG' in ascension) {
                    calculatedStats.agentCritDamage += (ascension['CRIT DMG'][ascensionIndex] / 100)
                } else if ('Anomaly Proficiency' in ascension) {
                    calculatedStats.agentAnomalyProficiency += (ascension['Anomaly Proficiency'][ascensionIndex])
                } else {
                    // If none of our target keys were found, return null.
                    console.log("No specific bonus ascension stat found.");
                };
                console.log(ascensionIndex);
            }
        }

        /*function arrayIndex(i) {
            if (i < 4) {
                return 0
            } else {
                return 1 + Math.floor((i - 4) / 2)
            }
        };

        const statsAscension = isAgentDetail?.stats?.ascension;

        if ('CRIT Rate' in statsAscension) {
            calculatedStats.agentCritRate += statsAscension['CRIT Rate'][arrayIndex(userSliderAgentLevel)];
            console.log([arrayIndex(userSliderAgentLevel)]);
            // future me, there are still a bug in this function. for starter the crit start from 480 when supposedly start from 0 and you still has to convert this by multiply it with 1/100.
        } else {
            // If none of our target keys were found, return null.
            console.log("No specific bonus ascension stat found.");
        }; */

        return calculatedStats;
    }, [isAgentDetail, userSliderAgentLevel]);


    const scalledAgentLevel = useMemo(() => {
        const scalledLevel = ['1/10', '10/10', '10/20', '20/20', '20/30', '30/30', '30/40', '40/40', '40/50', '50/50', '50/60', '60/60'];
        const calculatedLevel = scalledLevel[userSliderAgentLevel]
        console.log(calculatedLevel);
        return calculatedLevel;
    }, [isAgentDetail, userSliderAgentLevel]);

    const handleSliderSpecificSkillLevel = (event, categoryName) => {
        if (!isAgentDetail) {
            return console.log('The agent has not been selected yet.')
        };

        const levelSkillChanges = event.target.value;
        const currentAgentSkill = parseInt(levelSkillChanges, 10);
        SetUserAgentSpecificSkillLevels((levelIndex) => ({
            ...levelIndex,
            [categoryName]: currentAgentSkill
        }))
    };

    const skillsAgentSection = useMemo(() => {
        if (!isAgentDetail) {
            return <p>No agent have been choosen.</p>;
        }



        const handleSliderAgentSkillLevel = (event) => { // This still need to change since it was universal for all skill and not specific // Done, can be deleted
            if (!isAgentDetail) {
                return console.log('The agent has not been selected yet.')
            };

            const levelSkillChange = event.target.value;
            const currentAgentSkill = parseInt(levelSkillChange, 10);
            setUserSliderAgentSkillLevel(currentAgentSkill);
        }


        return Object.keys(isAgentDetail.skills).map((categoryName) => {
            const skillsArray = isAgentDetail.skills[categoryName];
            const currentAgentSkillLevel = userAgentSpecificSkillLevels[categoryName];

            if (!Array.isArray(skillsArray) || skillsArray === 0) {
                return null
            };




            return (
                <div key={categoryName}>
                    <h3>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h3>
                    <input type="range" value={currentAgentSkillLevel} onChange={(event) => handleSliderSpecificSkillLevel(event, categoryName)} id='agentSkillLevel' name='agentSkillLevel' min="0" max="15" step="1" />
                    {/* Dear future me, you only need to figure out the level of core only now */}

                    {skillsArray.map((skill, index) => {
                        return (
                            <div key={index} id={`${categoryName}`}>
                                <h4>{skill.name ?? `Unnamed Skill`}</h4>
                                {Array.isArray(skill.scaling) && skill.scaling.length > 0 ? (
                                    skill.scaling.map((scalingData, scalingIndex) => {
                                        const scalingName = scalingData[0];
                                        const scalingValue = scalingData[currentAgentSkillLevel + 1];
                                        return (
                                            <div key={scalingIndex}>
                                                <span>{scalingName}: </span>
                                                <strong>{scalingValue ?? 'N/A'}</strong>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>{(skill?.description ?? '').replaceAll('<br />', ' ')}</p>
                                )}
                            </div>
                        )
                    })}
                </div>
            )
        })
    }, [isAgentDetail, userAgentSpecificSkillLevels]);

    // const calculatingAscensionSpecificStat = useMemo(() => {
    //     if (!isAgentDetail?.stats?.ascension) {
    //         return null
    //     };
    //     const statsAscension = isAgentDetail?.stats?.ascension;
    //     if ('CRIT Rate' in statsAscension) {
    //         agentCritRate + statsAscension['CRIT Rate'][0]
    //     } else {
    //         // If none of our target keys were found, return null.
    //         console.log("No specific bonus ascension stat found.");
    //         return null;
    //     }
    // }, [isAgentDetail])

    /* const agentHP = isAgentDetail?.stats?.hp?.[userSliderAgentLevel]; // ascension
    const agentAttack = isAgentDetail?.stats?.atk?.[userSliderAgentLevel]; // ascension
    const agentDefence = isAgentDetail?.stats?.def?.[userSliderAgentLevel]; // ascension
    const agentImpact = isAgentDetail?.stats?.impact?.[userSliderAgentLevel]; // ascension
    const agentCritRate = 0; // ascension
    const agentCritDamage = 0;
    const agentAnomalyMastery = isAgentDetail?.stats?.am?.[userSliderAgentLevel];
    const agentAnomalyProficiency = isAgentDetail?.stats?.ap?.[userSliderAgentLevel]; // ascension
    const agentPenetration = (isAgentDetail?.stats?.pen?.[userSliderAgentLevel] ?? 0) / 100;
    const agentEnergyRegen = isAgentDetail?.stats?.er?.[userSliderAgentLevel]; // ascension */


    const handleSliderAgentLevel = (event) => { // Handle slider that control level
        if (!isAgentDetail) {
            return console.log('The agent has not been selected yet.')
        };

        const levelAgentChange = event.target.value;
        const currentAgentLevel = parseInt(levelAgentChange, 10);
        setUserSliderAgentLevel(currentAgentLevel);
        console.log(currentAgentLevel);
    }



    return (
        <div>
            <h1>Agent2: API from Irminsul ZZZ</h1>
            <hr />
            {isLoading && (<div>Loading</div>)}

            {isAgentDetail && (
                <div className='flex flex-col'>
                    <h3>Agent: {isAgentDetail?.fullName}</h3>
                    <h2>A.K.A {isAgentDetail?.name}</h2>
                    <h3>Level {scalledAgentLevel}</h3>
                    <input type="range" id='agentLevel' name='agentLevel' min="0" max="11" step="1" value={userSliderAgentLevel} onChange={handleSliderAgentLevel} />
                    <span>HP: {calculatedAgentStats.agentHP}</span>
                    <span>ATK: {calculatedAgentStats.agentAttack}</span>
                    <span>DEF: {calculatedAgentStats.agentDefence}</span>
                    <span>Impact: {calculatedAgentStats.agentImpact}</span>
                    <span>CRIT Rate: {calculatedAgentStats.agentCritRate}%</span>
                    <span>CRIT DMG: {calculatedAgentStats.agentCritDamage}%</span>
                    <span>Anomaly Mastery: {calculatedAgentStats.agentAnomalyMastery}</span>
                    <span>Amomaly Proficiency: {calculatedAgentStats.agentAnomalyProficiency}</span>
                    <span>PEN Ratio: {calculatedAgentStats.agentPenetration}%</span>
                    <span>Energy Regen: {calculatedAgentStats.agentEnergyRegen}%</span>
                </div>
            )}
            <div className='flex flex-col'>

                <h2>Character Skills</h2>
                {skillsAgentSection}

                {/* This is for documentation only */}
                {/* <span>
                    <h3>Basic Attack</h3>
                </span>
                <div>
                    {isAgentDetail && isAgentDetail.skills.basic.map((skillObject, index) => {
                        return (
                            <div>
                                <h4 key={index}>

                                    {skillObject.name ?? `Unnamed Skill #${index + 1}`}
                                </h4>
                                {Array.isArray(skillObject.scaling) && skillObject.scaling.length > 0 ? (
                                    skillObject.scaling.map((scalingData, scalingIndex) => {
                                        const scalingName = scalingData[0];
                                        const scalingValue = scalingData[userSliderAgentSkillLevel + 1];
                                        return (
                                            <div key={scalingIndex}>
                                                <span>{scalingName}: </span>
                                                <strong>{scalingValue ?? 'N/A'}</strong>
                                            </div>
                                        );
                                    })
                                ) : (
                                    // If FALSE, we render a fallback message.
                                    <p>{(skillObject?.description ?? '').replaceAll('<br />', ' ')}</p>
                                )}
                            </div>
                        );
                    })}
                </div> */}
            </div>
        </div>
    )
}

export default Agent2