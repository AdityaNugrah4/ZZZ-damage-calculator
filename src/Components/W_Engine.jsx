import React, { useMemo, useState } from 'react'
import { wEngineStatsScale } from './W_EngineLevel';

const W_Engine = ({ isWEngineDetail, isLoadingWEngine }) => {
    const [userSliderWEngineLevel, setUserSliderWEngineLevel] = useState(0);

    const wEnginseStats = useMemo(() => {
        if (!isWEngineDetail) {
            return null
        };

        const hanlderSliderWEngineLevel = (event) => {
            if (!isWEngineDetail) {
                return "No W-Engine has been choosen."
            };

            const respond = event.target.value;
            const levelChange = parseInt(respond, 10);
            setUserSliderWEngineLevel(levelChange);
        };

        let weaponLevel = null;
        let weaponStats = null;
        let speciality = null
        console.log(isWEngineDetail.stats.subStat);
        console.log(isWEngineDetail?.stats?.mainStat?.value);

        if (isWEngineDetail.rarity === 'B') {
            weaponStats = wEngineStatsScale?.rank_B?.type1?.statsScalling[userSliderWEngineLevel + 1].baseStats;
            speciality = wEngineStatsScale.rank_B.speciallityType[isWEngineDetail.stats.subStat][userSliderWEngineLevel];
        } else if (isWEngineDetail.rarity === 'A' && isWEngineDetail?.stats?.mainStat?.value === '42') {
            weaponStats = wEngineStatsScale?.rank_A?.type2?.statsScalling[userSliderWEngineLevel + 1].baseStats;
            speciality = wEngineStatsScale.rank_A.speciallityType[isWEngineDetail.stats.subStat][userSliderWEngineLevel];
        } else if (isWEngineDetail.rarity === 'A' && isWEngineDetail?.stats?.mainStat?.value === '40') {
            weaponStats = wEngineStatsScale?.rank_A?.type2?.statsScalling[userSliderWEngineLevel + 1].baseStats;
            speciality = wEngineStatsScale.rank_A.speciallityType[isWEngineDetail.stats.subStat][userSliderWEngineLevel];
        } else if (isWEngineDetail.rarity === 'S' && isWEngineDetail?.stats?.mainStat?.value === '50') {
            weaponStats = wEngineStatsScale?.rank_S?.type3?.statsScalling[userSliderWEngineLevel + 1].baseStats;
            speciality = wEngineStatsScale.rank_S.speciallityType[isWEngineDetail.stats.subStat][userSliderWEngineLevel];
        } else if (isWEngineDetail.rarity === 'S' && isWEngineDetail?.stats?.mainStat?.value === '48') {
            weaponStats = wEngineStatsScale?.rank_S?.type3?.statsScalling[userSliderWEngineLevel + 1].baseStats;
            speciality = wEngineStatsScale.rank_S.speciallityType[isWEngineDetail.stats.subStat][userSliderWEngineLevel];
        } else if (isWEngineDetail.rarity === 'S' && isWEngineDetail?.stats?.mainStat?.value === '46') {
            weaponStats = wEngineStatsScale?.rank_S?.type3?.statsScalling[userSliderWEngineLevel + 1].baseStats;
            speciality = wEngineStatsScale.rank_S.speciallityType[isWEngineDetail.stats.subStat][userSliderWEngineLevel];
        } else {
            console.log("No matching W-Engine stat block found.")
            return null
        };

        weaponLevel = wEngineStatsScale.levelWeapon[userSliderWEngineLevel + 1].Level; // +1 because it start from '1' instead of '0'

        const fetchedData = {
            baseAttack: weaponStats,
            level: weaponLevel,
            speciality: speciality / 100,
        };

        console.log(fetchedData)
        return (
            <div className='flex flex-col'>
                <input type="range" name="" value={userSliderWEngineLevel} id="" onChange={hanlderSliderWEngineLevel} min="0" max="11" step="1" />
                <span>Level: {fetchedData.level}</span>
                <span>Base Stats: {fetchedData.baseAttack}</span>
                <span>{isWEngineDetail?.stats?.subStat}: {fetchedData.speciality}{isWEngineDetail?.stats?.subStat === 'Anomaly Proficiency' ? '' : '%'}</span>
            </div>
        );

    }, [isWEngineDetail, userSliderWEngineLevel])

    return (
        <div>
            <span>Base Stat</span>
            <span>Advanced Stat</span>
            <p>Description</p>
            {wEnginseStats}
        </div>
    )
}

export default W_Engine