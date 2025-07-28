import React, { useEffect, useMemo, useState } from 'react'

const Enemy = ({ isEnemiesDetail, isLoadingEnemy, setEnemiesData }) => {
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

    useEffect(() => {
        if (calculatedEnemyStats) {
            setEnemiesData(calculatedEnemyStats)
        }
    }, [calculatedEnemyStats])

    const handleSliderEnemyLevel = (event) => {
        if (!isEnemiesDetail) {
        }
        const response = event.target.value;
        const levelChange = parseInt(response, 10);
        setUserSliderEnemyLevel(levelChange);
    }

    return (
        <fieldset>
            {isLoadingEnemy && (<div>Loading</div>)}
            {isEnemiesDetail && (
                <div className='flex flex-col'>
                    <h3>Enemy's Description</h3>
                    <p>{isEnemiesDetail ? isEnemiesDetail?.Desc : 'Choose Enemy'}</p>
                    <h4 className='level-class'><span>Level</span> <span>{userSliderEnemyLevel + 1}</span></h4>
                    <input type="range" name="" id="" value={userSliderEnemyLevel} onChange={handleSliderEnemyLevel} min="0" max="99" step="1" />
                    <div className='main-stats'>
                        <div className="character-skills-name">
                            <span>HP:</span> {Math.floor(calculatedEnemyStats.enemyHP)}
                        </div>
                        <div className="character-skills-name">
                            <span>ATK:</span> {Math.floor(calculatedEnemyStats.enemyATK)}
                        </div>
                        <div className="character-skills-name">
                            <span>DEF:</span> {Math.floor(calculatedEnemyStats.enemyDEF)}
                        </div>
                        <div className="character-skills-name">
                            <span>Physical RES:</span> {calculatedEnemyStats.enemyPhysicalDmgRes}%
                        </div>
                        <div className="character-skills-name">
                            <span>Fire RES:</span> {calculatedEnemyStats.enemyFireDmgRes}%
                        </div>
                        <div className="character-skills-name">
                            <span>Electric RES:</span> {calculatedEnemyStats.enemyElectricDmgRes}%
                        </div>
                        <div className="character-skills-name">
                            <span>Ice RES:</span> {calculatedEnemyStats.enemyIceDmgRes}%
                        </div>
                        <div className="character-skills-name">
                            <span>Ether RES:</span> {calculatedEnemyStats.enemyEtherDmgRes}%
                        </div>
                    </div>
                </div>
            )}
        </fieldset>
    )
}

export default Enemy