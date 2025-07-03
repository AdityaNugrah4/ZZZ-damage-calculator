import React, { useEffect, useMemo, useState } from 'react'

const Enemy = ({ isEnemiesDetail, isLoadingEnemy }) => {
    const [userEnemyLevel, setUserEnemyLevel] = useState(0);

    const calculatedEnemyStats = useMemo(() => {
        if (!isEnemiesDetail) {
            return null
        };
        const calculatedStats = {
            enemyHP: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.Hp,
            enemyATK: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.Attack,
            enemyDEF: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.Defence,
            enemyIceDmgRes: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.IceDamageRes / 100,
            enemyEtherDmgRes: isEnemiesDetail?.MonsterInfo?.[Object.keys(isEnemiesDetail.MonsterInfo)[0]]?.Stats?.EtherDamageRes / 100
        };
        console.log(calculatedStats.enemyHP)
        return calculatedStats;
    }, [isEnemiesDetail])

    return (
        <div>
            {isLoadingEnemy && (<div>Loading</div>)}
            {isEnemiesDetail && (
                <div className='flex flex-col'>
                    <span>HP: {calculatedEnemyStats.enemyHP}</span>
                    <span>ATK: {calculatedEnemyStats.enemyATK}</span>
                    <span>DEF: {calculatedEnemyStats.enemyDEF}</span>
                    <span>Ice RES: {calculatedEnemyStats.enemyIceDmgRes}%</span>
                    <span>Ether RES: {calculatedEnemyStats.enemyEtherDmgRes}%</span>
                </div>
            )}
        </div>
    )
}

export default Enemy