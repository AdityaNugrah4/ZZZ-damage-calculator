import React, { useEffect, useState } from 'react'
import { allDriveDisc } from './zzz-api-irminsul';

const DriveDisc = () => {
    const [driveDiscGeneralData, setDriveDiscGeneralData] = useState({});
    const [isSelectedDriveDisc, setIsSelectedDriveDisc] = useState({
        disc1: 0,
        disc2: 0,
        disc3: 0,
        disc4: 0,
        disc5: 0,
        disc6: 0
    });
    const [isDriveDiscDetail, setIsDriveDiscDetail] = useState('');
    const [isLoadingDriveDisc, setIsLoadingDriveDisc] = useState(false);
    const [isError, setIsError] = useState(null);

    const driveDiscTier = {
        tierS: 14,
        tierA: 11,
        tierB: 8
    }

    const handlerSliderDriveDiscLevel = (event) => {
        const { name, value } = event.target;
        setIsSelectedDriveDisc((disc) => ({
            ...disc,
            [name]: Number(value)

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
            {Object.keys(isSelectedDriveDisc).map((discIndex) => (
                <div key={discIndex}>
                    <label htmlFor={discIndex}>{discIndex}</label>
                    <select name={discIndex} id={discIndex} value={isSelectedDriveDisc[discIndex]} onChange={handlerSliderDriveDiscLevel} disabled={isLoadingDriveDisc}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            ))}
        </div>
    )
}

export default DriveDisc