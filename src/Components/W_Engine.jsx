import React, { useEffect, useMemo, useState } from 'react'
import { wEngineStatsScale } from './W_EngineLevel';
// This work but viloates rules
const W_Engine = ({ wEngineData, setWEngineData, isWEngineDetail, isLoadingWEngine, isEnabled }) => {
    const [userSliderWEngineLevel, setUserSliderWEngineLevel] = useState(0);

    const hanlderSliderWEngineLevel = (event) => {
        if (!isWEngineDetail) {
            return "No W-Engine has been choosen."
        };

        const respond = event.target.value;
        const levelChange = parseInt(respond, 10);
        setUserSliderWEngineLevel(levelChange);
    };

    const wEnginseStats = useMemo(() => {
        if (!isWEngineDetail) {
            return null
        };

        const calculatedStats = {
            baseAttack: 0,
            level: 0,
            specialityValue: 0,
            specialityType: null
        }

        console.log(isWEngineDetail.stats.subStat);
        console.log(isWEngineDetail?.stats?.mainStat?.value);

        if (isWEngineDetail.rarity === 'B') {
            calculatedStats.baseAttack = wEngineStatsScale?.rank_B?.type1?.statsScalling[userSliderWEngineLevel + 1].baseStats;
            calculatedStats.specialityValue = wEngineStatsScale.rank_B.speciallityType[isWEngineDetail.stats.subStat][userSliderWEngineLevel] / 100;
        } else if (isWEngineDetail.rarity === 'A') {
            const typeKey = isWEngineDetail?.stats?.mainStat?.value === '42' ? 'type2' : 'type1';
            calculatedStats.baseAttack = wEngineStatsScale?.rank_A?.[typeKey]?.statsScalling[userSliderWEngineLevel + 1].baseStats;
            calculatedStats.specialityValue = wEngineStatsScale.rank_A.speciallityType[isWEngineDetail.stats.subStat][userSliderWEngineLevel] / 100;
        } else if (isWEngineDetail.rarity === 'S') {
            const typeKey = isWEngineDetail?.stats?.mainStat?.value === '50' ? 'type3' : isWEngineDetail?.stats?.mainStat?.value === '48' ? 'type2' : 'type3';
            calculatedStats.baseAttack = wEngineStatsScale?.rank_S?.[typeKey]?.statsScalling[userSliderWEngineLevel + 1].baseStats;
            calculatedStats.specialityValue = wEngineStatsScale.rank_S.speciallityType[isWEngineDetail.stats.subStat][userSliderWEngineLevel] / 100;
        } else {
            console.log("No matching W-Engine stat block found.")
            return null
        };

        calculatedStats.specialityType = isWEngineDetail?.stats?.subStat;
        calculatedStats.level = wEngineStatsScale.levelWeapon[userSliderWEngineLevel + 1].Level; // +1 because it start from '1' instead of '0'

        console.log(wEngineData.speciality)
        return calculatedStats;

    }, [isWEngineDetail, userSliderWEngineLevel])

    useEffect(() => {
        if (wEnginseStats) {
            setWEngineData(wEnginseStats);
        };
    }, [wEnginseStats]);

    return (
        <fieldset disabled={!isEnabled}>
            {wEnginseStats && (
                <div className='flex flex-col'>
                    <p>Description</p>
                    <input type="range" name="" value={userSliderWEngineLevel} id="" onChange={hanlderSliderWEngineLevel} min="0" max="11" step="1" />
                    <span>Level: {wEngineData.level}</span>
                    <span>Base Stats: {wEngineData.baseAttack}</span>
                    <span>{isWEngineDetail?.stats?.subStat}: {wEngineData.specialityValue}{isWEngineDetail?.stats?.subStat === 'Anomaly Proficiency' ? '' : '%'}</span>
                </div>
            )}

        </fieldset>
    )
}

export default W_Engine