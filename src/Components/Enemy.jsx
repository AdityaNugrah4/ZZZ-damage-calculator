import React, { useEffect, useMemo, useState } from 'react'

const Enemy = ({ isEnemiesDetail, isLoadingEnemy }) => {
    const [userSliderEnemyLevel, setUserSliderEnemyLevel] = useState(0);

    const calculatedEnemyStats = useMemo(() => {
        if (!isEnemiesDetail) {
            return null
        };

        const enemyCurves = {
            curvesHP: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Curves.Hp.Curve[userSliderEnemyLevel],
            curvesATK: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Curves.Attack.Curve[userSliderEnemyLevel],
            curvesDEF: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Curves.Defence.Curve[userSliderEnemyLevel],
            ratioHP: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Curves.Hp.Ratio,
            ratioATK: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Curves.Attack.Ratio,
            ratioDEF: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Curves.Defence.Ratio
        };

        const calculatedStats = {
            enemyHP: (isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.Hp) * enemyCurves.curvesHP / enemyCurves.ratioHP,
            enemyATK: (isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.Attack) * enemyCurves.curvesATK / enemyCurves.ratioATK,
            enemyDEF: (isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.Defence) * enemyCurves.curvesDEF / enemyCurves.ratioDEF,
            enemyFireDmgRes: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.FireDamageRes / 100,
            enemyPhysicalDmgRes: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.PhysicalDamageRes / 100,
            enemyElectricDmgRes: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.ElectricDamageRes / 100,
            enemyIceDmgRes: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.IceDamageRes / 100,
            enemyEtherDmgRes: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.EtherDamageRes / 100
        };
        return calculatedStats;
    }, [isEnemiesDetail, userSliderEnemyLevel])

    const handleSliderEnemyLevel = (event) => {
        if (!isEnemiesDetail) {
            return console.log('No enemy has been selected.')
        }
        const response = event.target.value;
        const levelChange = parseInt(response, 10);
        setUserSliderEnemyLevel(levelChange);
    }

    return (
        <div>
            {isLoadingEnemy && (<div>Loading</div>)}
            {isEnemiesDetail && (
                <div className='flex flex-col'>
                    <h3>{userSliderEnemyLevel + 1}</h3>
                    <input type="range" name="" id="" value={userSliderEnemyLevel} onChange={handleSliderEnemyLevel} min="0" max="99" step="1" />
                    <span>HP: {Math.floor(calculatedEnemyStats.enemyHP)}</span>
                    <span>ATK: {Math.floor(calculatedEnemyStats.enemyATK)}</span>
                    <span>DEF: {Math.floor(calculatedEnemyStats.enemyDEF)}</span>
                    <span>Physical RES: {calculatedEnemyStats.enemyPhysicalDmgRes}%</span>
                    <span>FIre RES: {calculatedEnemyStats.enemyFireDmgRes}%</span>
                    <span>Electric RES: {calculatedEnemyStats.enemyElectricDmgRes}%</span>
                    <span>Ice RES: {calculatedEnemyStats.enemyIceDmgRes}%</span>
                    <span>Ether RES: {calculatedEnemyStats.enemyEtherDmgRes}%</span>
                </div>
            )}
        </div>
    )
}

export default Enemy