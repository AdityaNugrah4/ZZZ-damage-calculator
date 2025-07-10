import React, { useEffect, useState } from 'react'
import { allDriveDisc } from './zzz-api-irminsul';

const DriveDisc = () => {
    const [driveDiscGeneralData, setDriveDiscGeneralData] = useState({});
    const [isSelectedDriveDisc, setIsSelectedDriveDisc] = useState({
        disc1: {
            rank: '',
            level: 0,
            mainStats: 0,
            subsStatsParent: {
                subStats1: 0,
                subStats2: 0,
                subStats3: 0
            },
        },
        disc2: {
            rank: '',
            level: 0,
            mainStats: 0,
            subsStatsParent: {
                subStats1: 0,
                subStats2: 0,
                subStats3: 0
            },
        },
        disc3: {
            rank: '',
            level: 0,
            mainStats: 0,
            subsStatsParent: {
                subStats1: 0,
                subStats2: 0,
                subStats3: 0
            },
        },
        disc4: {
            rank: '',
            level: 0,
            mainStats: 0,
            subsStatsParent: {
                subStats1: 0,
                subStats2: 0,
                subStats3: 0
            },
        },
        disc5: {
            rank: '',
            level: 0,
            mainStats: 0,
            subsStatsParent: {
                subStats1: 0,
                subStats2: 0,
                subStats3: 0
            },
        },
        disc6: {
            rank: '',
            level: 0,
            mainStats: 0,
            subsStatsParent: {
                subStats1: 0,
                subStats2: 0,
                subStats3: 0
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

    const handlerSliderDriveDiscLevel = (event) => {
        // const { name, value } = event.target;
        const discName = event.target.name;
        const discTier = event.target.value;
        const parent = event.target.dataset.parent;
        const childKey = event.target.dataset.child;
        const field = event.target.dataset.field;
        const val = field === 'rank' ? discTier : Number(discTier);

        setIsSelectedDriveDisc((disc) => ({
            // ...disc,
            // [name]: Number(value)
            ...disc,
            [discName]: {
                ...disc[discName],
                ...(parent ? { [parent]: { ...disc[discName][parent], [childKey]: val } } : { [field]: val })
            }
        }))
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
                        <select name={discIndex} id={discIndex} value={isSelectedDriveDisc[discIndex].rank} onChange={handlerSliderDriveDiscLevel} disabled={isLoadingDriveDisc}>
                            <option value={null}>-- Select Drive Disc Tier --</option>
                            {Object.entries(driveDiscTier).map(([discKeys, discTier]) => (
                                <option value={discKeys} key={discKeys} data-field="rank">{discTier.name}</option>
                            ))}
                        </select>
                    </div>
                    <label>
                        Main Stats
                        <input value={discValue.mainStats} type="number" min={0} max={10} data-field="mainStats" onChange={handlerSliderDriveDiscLevel} />
                    </label>
                    <div>
                        Sub Stats
                        {Object.entries(discValue.subsStatsParent).map(([subsStatsName, subStatValue]) => (
                            <div key={subsStatsName}>{subsStatsName}: <input type="number" name="" data-parent="subStats" data-child={subsStatsName} data-field="value" value={discValue.subsStatsParent.subsStatsName} id={subsStatsName.discIndex} onChange={handlerSliderDriveDiscLevel} /></div>
                        ))}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default DriveDisc