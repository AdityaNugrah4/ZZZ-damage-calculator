import React, { useEffect, useState } from 'react'
import { allDriveDisc } from './zzz-api-irminsul';

const DriveDisc = ({ setIsSelectedDriveDisc, isSelectedDriveDisc, handlerDriveDiscRank, handlerDriveDiscMainStats, handlerDriveDiscMainType, handlerDriveDiscSubstats, isEnabled }) => {
    const [driveDiscGeneralData, setDriveDiscGeneralData] = useState({});
    const [isDriveDiscDetail, setIsDriveDiscDetail] = useState('');
    const [isLoadingDriveDisc, setIsLoadingDriveDisc] = useState(false);
    const [isError, setIsError] = useState(null);

    const driveDiscTier = {
        S: { name: 'S Rank Drive Disc', value: 14 },
        A: { name: 'A Rank Drive Disc', value: 11 },
        B: { name: 'B Rank Drive Disc', value: 8 }
    }

    const mainStatTypes = [
        "HP", "ATK", "DEF", "HP%", "ATK%", "DEF%", "CRIT Rate%",
        "CRIT DMG%", "Anomaly Proficiency", "PEN Ratio", "Attribute DMG Bonus%",
        "Anomaly Mastery%", "Impact%", "Energy Regen%"
    ];

    const subStatTypes = [
        "HP", "ATK", "DEF", "HP%", "ATK%", "DEF%", "CRIT Rate%",
        "CRIT DMG%", "Anomaly Proficiency", "PEN Ratio", "Attribute DMG Bonus%",
        "Anomaly Mastery%", "Impact%", "Energy Regen%"
    ];

    useEffect(() => {
        const firstDriveDiscFetch = async () => {
            try {
                setIsError(null);
                setIsLoadingDriveDisc(true);
                const listDriveDisc = await allDriveDisc();
                console.log(listDriveDisc)
            } catch (error) {
                setIsError(error.message);
                console.log(error)
            } finally {
                setIsLoadingDriveDisc(false);
            }
        };
        firstDriveDiscFetch();
    }, []);
    console.log(isSelectedDriveDisc.disc1.subsStatsParent.subStats1.value)

    return (
        <fieldset disabled={!isEnabled}>
            {Object.entries(isSelectedDriveDisc).map(([discIndex, discValue]) => (
                <div key={discIndex} className='flex flex-col'>
                    <label htmlFor={discIndex}><h3>{discIndex}</h3></label>
                    {/* <select name={discIndex} id={discIndex} value={isSelectedDriveDisc[discIndex]} onChange={handlerSliderDriveDiscLevel} disabled={isLoadingDriveDisc}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select> */}
                    <div>
                        <select name={discIndex} id={discIndex} value={isSelectedDriveDisc[discIndex].rank} onChange={handlerDriveDiscRank}>
                            <option value={null}>-- Select Drive Disc Tier --</option>
                            {Object.entries(driveDiscTier).map(([discKeys, discTier]) => (
                                <option value={discKeys} key={discKeys} data-field="rank">{discTier.name}</option>
                            ))}
                        </select>
                    </div>
                    <label>
                        Main Stats
                        <input name={discIndex} value={discValue.mainStats} type="number" min={0.001} max={10} data-field="mainStats" onChange={handlerDriveDiscMainStats} />
                        <select name={`${isSelectedDriveDisc[discIndex]} Type`} value={discValue.mainType} onChange={handlerDriveDiscMainType}>
                            <option>-- Select Stat Type --</option>
                            {mainStatTypes.map(name => (
                                <option key={name} value={name}>{name}</option>
                            ))}
                        </select>
                    </label>
                    <div>
                        Sub Stats
                        {Object.entries(discValue.subsStatsParent).map(([subsStatsName, subStatValue]) => (
                            <div key={subsStatsName}>
                                {subsStatsName}: <input type="number" name={`${discIndex}-${subsStatsName}`} data-parent="subStats" data-child={subsStatsName} data-field="value" value={subStatValue.value} id={`${subsStatsName}-${discIndex}`} onChange={handlerDriveDiscSubstats(discIndex, subsStatsName, 'value')} />
                                <select value={discValue.subsStatsParent[subsStatsName].subType} onChange={handlerDriveDiscSubstats(discIndex, subsStatsName, 'subType')}>
                                    <option value={null}>-- Choose Type --</option>
                                    {subStatTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                    <hr />
                </div>
            ))}
        </fieldset>
    )
}

export default DriveDisc