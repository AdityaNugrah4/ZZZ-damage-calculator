import React, { useEffect, useState } from 'react'
import { allDriveDisc } from './zzz-api-irminsul';

const DriveDisc = () => {
    const [driveDiscGeneralData, setDriveDiscGeneralData] = useState({});
    const [isSelectedDriveDisc, setIsSelectedDriveDisc] = useState({
        disc1: {
            discType: '',
            rank: '',
            level: 0,
            mainStats: 0,
            mainType: '',
            subsStatsParent: {
                subStats1: { value: 0, subType: '' },
                subStats2: { value: 0, subType: '' },
                subStats3: { value: 0, subType: '' }
            },
        },
        disc2: {
            discType: '',
            rank: '',
            level: 0,
            mainStats: 0,
            mainType: '',
            subsStatsParent: {
                subStats1: { value: 0, subType: '' },
                subStats2: { value: 0, subType: '' },
                subStats3: { value: 0, subType: '' }
            },
        },
        disc3: {
            discType: '',
            rank: '',
            level: 0,
            mainStats: 0,
            mainType: '',
            subsStatsParent: {
                subStats1: { value: 0, subType: '' },
                subStats2: { value: 0, subType: '' },
                subStats3: { value: 0, subType: '' }
            },
        },
        disc4: {
            discType: '',
            rank: '',
            level: 0,
            mainStats: 0,
            mainType: '',
            subsStatsParent: {
                subStats1: { value: 0, subType: '' },
                subStats2: { value: 0, subType: '' },
                subStats3: { value: 0, subType: '' }
            },
        },
        disc5: {
            discType: '',
            rank: '',
            level: 0,
            mainStats: 0,
            mainType: '',
            subsStatsParent: {
                subStats1: { value: 0, subType: '' },
                subStats2: { value: 0, subType: '' },
                subStats3: { value: 0, subType: '' }
            },
        },
        disc6: {
            discType: '',
            rank: '',
            level: 0,
            mainStats: 0,
            mainType: '',
            subsStatsParent: {
                subStats1: { value: 0, subType: '' },
                subStats2: { value: 0, subType: '' },
                subStats3: { value: 0, subType: '' }
            },
        }
    });
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
        "HP", "ATK", "DEF", "HP%", "ATK%", "DEF%", "CRIT Rate%", "CRIT DMG%",
        "Anomaly Proficiency", "PEN"
    ];

    const handlerDriveDiscRank = (event) => {
        // const { name, value } = event.target;
        const discName = event.target.name;
        const discTier = event.target.value;

        setIsSelectedDriveDisc((disc) => ({
            ...disc,
            [discName]: {
                ...disc[discName],
                rank: discTier,
            }
        }))
    };

    const handlerDriveDiscMainStats = (event) => {
        const discName = event.target.name;
        const discTier = event.target.value;
        setIsSelectedDriveDisc((disc) => ({
            ...disc,
            [discName]: {
                ...disc[discName],
                mainStats: discTier,
            }
        }))
    };

    const handlerDriveDiscMainType = (event) => {
        const discName = event.target.name; // e.g., "disc1"
        const newType = event.target.value;

        setIsSelectedDriveDisc(prev => ({
            ...prev,
            [discName]: {
                ...prev[discName],
                mainType: newType
            }
        }));
    };

    const handlerDriveDiscSubstats = (discKey, subKey, field) => (e) => {
        const newValue = field === 'value' ? Number(e.target.value) : e.target.value;
        setIsSelectedDriveDisc(disc => ({
            ...disc,
            [discKey]: {
                ...disc[discKey],
                subsStatsParent: {
                    ...disc[discKey].subsStatsParent,
                    [subKey]: {
                        ...disc[discKey].subsStatsParent[subKey],
                        [field]: newValue
                    }
                }
            }
        }));
    };

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
    console.log(isSelectedDriveDisc.disc1.subsStatsParent.subStats1.subType)

    return (
        <div>
            {Object.entries(isSelectedDriveDisc).map(([discIndex, discValue]) => (
                <div key={discIndex} className='flex flex-col'>
                    <label htmlFor={discIndex}>{discIndex}</label>
                    {/* <select name={discIndex} id={discIndex} value={isSelectedDriveDisc[discIndex]} onChange={handlerSliderDriveDiscLevel} disabled={isLoadingDriveDisc}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select> */}
                    <div>
                        <select name={discIndex} id={discIndex} value={isSelectedDriveDisc[discIndex].rank} onChange={handlerDriveDiscRank} disabled={isLoadingDriveDisc}>
                            <option value={null}>-- Select Drive Disc Tier --</option>
                            {Object.entries(driveDiscTier).map(([discKeys, discTier]) => (
                                <option value={discKeys} key={discKeys} data-field="rank">{discTier.name}</option>
                            ))}
                        </select>
                    </div>
                    <label>
                        Main Stats
                        <input name={discIndex} value={discValue.mainStats} type="number" min={0} max={10} data-field="mainStats" onChange={handlerDriveDiscMainStats} />
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
        </div>
    )
}

export default DriveDisc