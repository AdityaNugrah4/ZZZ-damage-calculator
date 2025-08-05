import React, { useEffect, useMemo, useState } from 'react'
import { skillsIcon } from './SkillsIcon';

const Agent2 = ({ isAgentDetail, isLoading, isSelectedDriveDisc, wEngineData, enemiesData }) => {

    const [userSliderAgentLevel, setUserSliderAgentLevel] = useState(0);
    const [userAgentSpecificSkillLevels, SetUserAgentSpecificSkillLevels] = useState({
        basic: 0,
        dodge: 0,
        assist: 0,
        special: 0,
        chain: 0,
        core: 0,
    });

    const calculatedAgentStats = useMemo(() => {
        if (!isAgentDetail?.stats || !isSelectedDriveDisc) {
            return null;
        }

        const { stats } = isAgentDetail;

        if (userSliderAgentLevel < 0 || userSliderAgentLevel >= (stats.hp?.length ?? 0)) {
            return {};
        };

        let enemyReduce = 0; // This part for enemy stats
        if (enemyReduce === 0) {
            enemyReduce = 0.9
        } else {
            // this part will be filled with enemy stats
        }
        console.log(enemyReduce);

        const calculatedStats = {
            agentType: isAgentDetail?.element,
            agentHP: isAgentDetail?.stats?.hp?.[userSliderAgentLevel], // ascension
            agentAttack: Math.floor(isAgentDetail?.stats?.atk?.[userSliderAgentLevel] * enemyReduce), // ascension
            agentDefence: isAgentDetail?.stats?.def?.[userSliderAgentLevel], // ascension
            agentImpact: isAgentDetail?.stats?.impact?.[userSliderAgentLevel], // ascension
            agentCritRate: 5, // ascension
            agentCritDamage: 50,
            agentAnomalyMastery: isAgentDetail?.stats?.am?.[userSliderAgentLevel], // ascension
            agentAnomalyProficiency: isAgentDetail?.stats?.ap?.[userSliderAgentLevel], // ascension
            agentPenetration: (isAgentDetail?.stats?.pen?.[userSliderAgentLevel] ?? 0) / 100,
            agentEnergyRegen: (isAgentDetail?.stats?.er?.[userSliderAgentLevel] ?? 0) / 100, // ascension
        }

        if (userSliderAgentLevel < 0 || userSliderAgentLevel >= (stats.hp?.length ?? 0)) {
            return {};
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
        };

        const totalFromDisc = {
            "HP": 0,
            "ATK": 0,
            "DEF": 0,
            "HP%": 0,
            "ATK%": 0,
            "DEF%": 0,
            "CRIT Rate%": 0,
            "CRIT DMG%": 0,
            "Anomaly Proficiency": 0,
            "PEN Ratio": 0,
            "Attribute DMG Bonus%": 0,
            "Anomaly Mastery%": 0,
            "Impact%": 0,
            "Energy Regen%": 0
        };

        for (const disc of Object.values(isSelectedDriveDisc)) {
            if (!disc) continue;

            const mainStatValue = Number(disc.mainStats) || 0;
            if (disc.mainType in totalFromDisc) {
                totalFromDisc[disc.mainType] += mainStatValue;
            };

            if (disc.subsStatsParent && typeof disc.subsStatsParent === 'object') {
                for (const substat of Object.values(disc.subsStatsParent)) {
                    if (substat.subType in totalFromDisc) {
                        totalFromDisc[substat.subType] += substat.value;
                    }
                }
            }
        };


        if (wEngineData) {
            totalFromDisc.ATK += wEngineData?.baseAttack;
            if (!wEngineData || wEngineData?.specialityType === null) {
                return null
            } else if (wEngineData?.specialityType === 'ATK') {
                totalFromDisc['ATK%'] += wEngineData?.specialityValue;
            } else if (wEngineData?.specialityType === 'DEF') {
                totalFromDisc['DEF%'] += wEngineData?.specialityValue;
            } else if (wEngineData?.specialityType === 'HP') {
                totalFromDisc['HP%'] += wEngineData?.specialityValue;
            } else if (wEngineData?.specialityType === 'Energy Regen') {
                totalFromDisc['Energy Regen%'] += wEngineData?.specialityValue;
            } else if (wEngineData?.specialityType === 'Impact') {
                totalFromDisc['Impact%'] += wEngineData?.specialityValue;
            } else if (wEngineData?.specialityType === 'CRIT Rate') {
                totalFromDisc['CRIT Rate%'] += wEngineData?.specialityValue;
            } else if (wEngineData?.specialityType === 'Anomaly Proficiency') {
                totalFromDisc['Anomaly Proficiency'] += wEngineData?.specialityValue;
            } else if (wEngineData?.specialityType === 'PEN Ratio') {
                totalFromDisc['PEN Ratio'] += wEngineData?.specialityValue;
            };
        } else return null;

        // Stats calculated from Disc Drive and W-Engine
        console.log('Total from all disc drive:', totalFromDisc);
        calculatedStats.agentAttack += totalFromDisc["ATK"];
        calculatedStats.agentDefence += totalFromDisc["DEF"];
        calculatedStats.agentHP += totalFromDisc["HP"];

        calculatedStats.agentAttack += calculatedStats.agentAttack * ((totalFromDisc["ATK%"] / 100));
        calculatedStats.agentDefence += calculatedStats.agentDefence * ((totalFromDisc["DEF%"] / 100));
        calculatedStats.agentHP += calculatedStats.agentHP * ((totalFromDisc["HP%"] / 100));

        calculatedStats.agentCritRate += calculatedStats.agentCritRate * (totalFromDisc['CRIT Rate%'] / 100);
        calculatedStats.agentCritDamage += calculatedStats.agentCritDamage * (totalFromDisc['CRIT DMG%'] / 100);
        calculatedStats.agentPenetration += calculatedStats.agentPenetration * (totalFromDisc['PEN Ratio'] / 100);
        calculatedStats.agentImpact += (calculatedStats.agentImpact * (totalFromDisc['Impact%'] / 100)); // Impact %
        calculatedStats.agentEnergyRegen += calculatedStats.agentEnergyRegen * (totalFromDisc['Energy Regen%'] / 100); // Energy Regen %
        calculatedStats.agentAnomalyMastery += calculatedStats.agentAnomalyMastery * (totalFromDisc['Anomaly Mastery%'] / 100); // Anomaly Mastery %
        calculatedStats.agentAnomalyProficiency += totalFromDisc['Anomaly Proficiency']; // Flat Anomaly Proficiency

        return calculatedStats
    }, [isAgentDetail, userSliderAgentLevel, isSelectedDriveDisc, wEngineData]);

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
            return <p className='agent-not-selected'>No agent have been choosen.</p>;
        }

        return Object.keys(isAgentDetail.skills).map((categoryName) => {
            const skillsArray = isAgentDetail.skills[categoryName];
            const currentAgentSkillLevel = userAgentSpecificSkillLevels[categoryName];

            if (!Array.isArray(skillsArray) || skillsArray === 0) {
                console.log('skillsArray has issue!')
                return null
            };

            let maxScaling = 0; // As default for length of scaling

            if (categoryName === 'core') {
                maxScaling = skillsArray[0].scaling[0].length - 1;
                const scalingName = skillsArray[0].name;
                const scalingValue = skillsArray[0].scaling[0][currentAgentSkillLevel];
                return (
                    <div key={categoryName} id={categoryName}>
                        <div className='agent-skill-name'>
                            <img src={skillsIcon.core} alt={categoryName} />
                            <h3 className='character-skills-title'>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h3>
                        </div>
                        <h4 className='level-class'>
                            <span>Skill Level</span> <span>{currentAgentSkillLevel + 1}</span>
                        </h4>
                        <input type="range" value={currentAgentSkillLevel} onChange={(event) => handleSliderSpecificSkillLevel(event, categoryName)} id="agentSkillLevel" name='agentSkillLevel' min="0" max={maxScaling} step="1" />
                        <div key={categoryName} id={`${categoryName}`}>
                            <h4 className='character-skills-title'>{scalingName ?? `Unnamed Skill`}</h4>
                            <div className='character-skills-name core'>
                                <p><strong>DMG Multiplier:</strong>{' '}
                                    {
                                        (() => {
                                            const pct = Number(scalingValue.replace('%', ''));
                                            const dmg = Math.floor(calculatedAgentStats.agentAttack * (pct / 100));
                                            return isNaN(pct) ? 'Error' : dmg;
                                        })()
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                )
            } else {
                const displayIcon = skillsIcon[categoryName];
                return (
                    <div key={categoryName} id={categoryName}>
                        <div className='agent-skill-name'>
                            <img src={displayIcon} alt={categoryName} />
                            <h3 className='character-skills-title'>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h3>
                        </div>
                        <h4 className='level-class'>
                            <span>Skill Level</span> <span>{currentAgentSkillLevel + 1}</span>
                        </h4>
                        <input type="range" value={currentAgentSkillLevel} onChange={(event) => handleSliderSpecificSkillLevel(event, categoryName)} id='agentSkillLevel' name='agentSkillLevel' min="0" max="15" step="1" />
                        {/* Dear future me, you only need to figure out the level of core only now => Done */}
                        {skillsArray.map((skill, index) => {
                            return (
                                <div key={index} id={`${categoryName}`}>
                                    <h4 className='character-skills-title'>{skill.name ?? `Unnamed Skill`}</h4>
                                    {Array.isArray(skill.scaling) && skill.scaling.length > 0 ? (
                                        skill.scaling.map((scalingData, scalingIndex) => {
                                            const scalingName = scalingData[0];
                                            const scalingValue = scalingData[currentAgentSkillLevel + 1];
                                            return (
                                                <div key={scalingIndex} className='character-skills-name'>
                                                    <span>{scalingName}: </span>
                                                    {
                                                        (() => {
                                                            const pct = Number(scalingValue.replace('%', ''));
                                                            const dmg = Math.floor(calculatedAgentStats.agentAttack * (pct / 100));
                                                            return isNaN(pct) ? 'Still in development' : dmg;
                                                        })()
                                                    }
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <span>{(skill?.description ?? '').replaceAll('<br />', ' ')}</span>
                                    )}
                                </div>
                            )
                        })}
                        <hr />
                    </div>
                )
            }
        })
    }, [isAgentDetail, userAgentSpecificSkillLevels, userSliderAgentLevel, wEngineData]);

    const handleSliderAgentLevel = (event) => { // Handle slider that control level
        if (!isAgentDetail) {
            return console.log('The agent has not been selected yet.')
        };

        const levelAgentChange = event.target.value;
        const currentAgentLevel = parseInt(levelAgentChange, 10);
        setUserSliderAgentLevel(currentAgentLevel);
        console.log(currentAgentLevel);
    };

    return (
        <fieldset>
            <h1>AGENT STATS</h1> {/* Agent2: API from Irminsul ZZZ */}
            <hr />
            {isLoading && (<div>Loading</div>)}

            {isAgentDetail && (
                <div className='flex flex-col'>
                    <div className='agent-name-description'>
                        <h3>Agent: {isAgentDetail?.fullName}</h3>
                        <h3>Type: {isAgentDetail?.element}</h3>
                        <h3>{isAgentDetail?.faction.toUpperCase()}</h3>
                        <h1>{isAgentDetail?.name.toUpperCase()}</h1>
                        <div className='agent-name-description-card'>
                        </div>
                    </div>
                    <h3 className='level-class'><span>Level</span> <span>{scalledAgentLevel}</span></h3>
                    <input type="range" id='agentLevel' name='agentLevel' min="0" max="11" step="1" value={userSliderAgentLevel} onChange={handleSliderAgentLevel} />
                    <div className='main-stats'>
                        <div className='character-skills-name'>
                            <span>HP:</span> {calculatedAgentStats.agentHP}
                        </div>
                        <div className='character-skills-name'>
                            <span>ATK:</span> {calculatedAgentStats.agentAttack}
                        </div>
                        <div className='character-skills-name'>
                            <span>DEF:</span> {calculatedAgentStats.agentDefence}
                        </div>
                        <div className='character-skills-name'>
                            <span>Impact:</span> {calculatedAgentStats.agentImpact}
                        </div>
                        <div className='character-skills-name'>
                            <span>CRIT Rate:</span> {calculatedAgentStats.agentCritRate}%
                        </div>
                        <div className='character-skills-name'>
                            <span>CRIT DMG:</span> {calculatedAgentStats.agentCritDamage}%
                        </div>
                        <div className='character-skills-name'>
                            <span>Anomaly Mastery:</span> {calculatedAgentStats.agentAnomalyMastery}
                        </div>
                        <div className='character-skills-name'>
                            <span>Anomaly Proficiency:</span> {calculatedAgentStats.agentAnomalyProficiency}
                        </div>
                        <div className='character-skills-name'>
                            <span>PEN Ratio:</span> {calculatedAgentStats.agentPenetration}%
                        </div>
                        <div className='character-skills-name'>
                            <span>Energy Regen:</span> {calculatedAgentStats.agentEnergyRegen}%
                        </div>
                    </div>

                </div>
            )}

            <div className='flex flex-col'>

                <h2>Character Skills</h2>
                {skillsAgentSection}
            </div>
        </fieldset>
    )
}

export default Agent2