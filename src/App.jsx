import React, { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterBaseStats from './Components/CharacterBaseStats'
import CharacterSkills from './Components/CharacterSkills'
import W_Engine from './Components/W_Engine'
import EquipmentDisc from './Components/EquipmentDisc'
import Agent from './Components/Agent'
import Agent2 from './Components/Agent2'
import { AllCharactersIrminsul, AllEnemies, AllEngine, EnemyDetail } from './Components/zzz-api-irminsul'
import Enemy from './Components/Enemy'

function App() {

  const [characterGeneralData, setCharacterGeneralData] = useState({});
  const [isSelectedID, setIsSelectedID] = useState('');
  const [isAgentDetail, setIsAgentDetail] = useState(null);
  const [enemiesGeneralData, setEnemiesGeneralData] = useState({});
  const [isEnemiesSelectedID, setIsEnemiesSelectedID] = useState('');
  const [isEnemiesDetail, setIsEnemiesDetail] = useState(null);
  const [wEngineGeneralData, setWEngineGeneralData] = useState({});
  const [isWEngineSelectedID, setIsWEngineSelectedID] = useState('');
  const [isWEngineDetail, setIsWEngineDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingEnemy, setIsLoadingEnemy] = useState(false);
  const [isLoadingWEngine, setIsLoadingWEngine] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function charactersFirstFecth() { // First fetch the character data to dropdown list
      try {
        setIsError(null);
        setIsLoading(true);
        const listID = await AllCharactersIrminsul();
        console.log('Initial fetched data', listID);
        setCharacterGeneralData(listID);
      } catch (error) {
        setIsError(error.message)
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };
    charactersFirstFecth()
  }, []);

  useEffect(() => {
    if (!isSelectedID) {
      return setIsAgentDetail(null);
    }

    function charactersSecondFetch() { // To fetch the detailed data for agent
      try {
        setIsError(null);
        setIsLoading(true);
        console.log(isSelectedID);
        const agentDetailObject = characterGeneralData?.[isSelectedID] // To set the the data without converting it first using Object.[values, or key ,or entries]
        setIsAgentDetail(agentDetailObject);
        console.log(agentDetailObject)
      } catch (error) {
        setIsError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    charactersSecondFetch();
  }, [isSelectedID]);

  useEffect(() => {
    const firstEnemyFetch = async () => {
      try {
        setIsError(null);
        setIsLoadingEnemy(true);
        const enemiesListID = await AllEnemies();
        console.log('Initial fetched data', enemiesListID);
        setEnemiesGeneralData(enemiesListID);
      } catch (error) {
        setIsError(error.message);
        console.log(error);
      } finally {
        setIsLoadingEnemy(false);
      }
    }
    firstEnemyFetch();
  }, []);

  useEffect(() => {
    const enemySecondFetch = async () => {
      if (!isEnemiesSelectedID) {
        return null
      }

      try {
        setIsError(null);
        setIsLoadingEnemy(true);
        console.log(isEnemiesSelectedID);
        const fetchedEnemydetail = await EnemyDetail(isEnemiesSelectedID);
        console.log(fetchedEnemydetail);
        setIsEnemiesDetail(fetchedEnemydetail);
      } catch (error) {
        setIsError(error.message);
        console.log(error);
      } finally {
        setIsLoadingEnemy(false);
      }
    }
    enemySecondFetch();
  }, [isEnemiesSelectedID]);

  useEffect(() => {
    const wEngineFirstFetch = async () => {
      try {
        setIsError(false);
        setIsLoadingWEngine(true);
        const listID = await AllEngine();
        console.log(listID);
        setWEngineGeneralData(listID);
      } catch (error) {
        setIsError(error.message);
        console.log(error);
      } finally {
        setIsLoadingWEngine(false);
      }
    }
    wEngineFirstFetch();
  }, []);

  useEffect(() => {
    const WEngineSecondFetch = async () => {
      if (!isWEngineSelectedID) {
        return null
      }
      try {
        setIsError(null);
        setIsLoadingWEngine(true);
        console.log(isWEngineSelectedID);
        const fetchedWEngineDetail = await wEngineGeneralData?.[isWEngineSelectedID];
        console.log(fetchedWEngineDetail);
        setIsWEngineDetail(fetchedWEngineDetail);
      } catch (error) {
        setIsError(error.message);
        console.log(error);
      } finally {
        setIsLoadingWEngine(false);
      }
    }
    WEngineSecondFetch();
  }, [isWEngineSelectedID])

  const handleSelectedAgent = (event) => { // handle dropdown list
    setIsSelectedID(event.target.value)
  };

  const handleSelectedWEngine = (event) => {
    setIsWEngineSelectedID(event.target.value)
  };

  const handleSelectedEnemy = (event) => {
    setIsEnemiesSelectedID(event.target.value);
  };

  return (
    <div>
      <div>Hello World</div>
      <div>
        {/* Agent Selection */}
        <h1>Character</h1>
        <div>
          <select value={isSelectedID} onChange={handleSelectedAgent} disabled={isLoading}>
            <option> -- Choose -- </option>
            {Object.entries(characterGeneralData).map(([id, agentId]) => (
              <option value={id} key={id}>{agentId.name}</option>
            ))}
          </select>
        </div>
        <Agent2 isAgentDetail={isAgentDetail} isLoading={isLoading} setIsLoading={setIsLoading} />
        {isError && <p style={{ color: 'red' }}>Error: {isError}</p>}
      </div>
      <div>
        <h1>W-Engine</h1>
        <select value={isWEngineSelectedID} onChange={handleSelectedWEngine} disabled={isLoadingWEngine}>
          <option>-- Choose W-Engine --</option>
          {Object.entries(wEngineGeneralData).map(([id, wEngine]) => (
            <option value={id} key={id}>
              {wEngine.name} Rank-{wEngine.rarity}
            </option>
          ))}
        </select>
        <W_Engine />
      </div>
      <div>
        <h1>Equipment</h1>
        <EquipmentDisc />
      </div>
      <div>
        <h1>Enemy</h1>
        <div>
          {/* Enemy Selection */}
          <select value={isEnemiesSelectedID} onChange={handleSelectedEnemy} disabled={isLoadingEnemy}>
            <option>-- Choose Enemy --</option>
            {Object.entries(enemiesGeneralData).map(([id, selected]) => (
              <option value={id} key={id}>{selected.EN}</option>
            ))}
          </select>
          <Enemy isEnemiesDetail={isEnemiesDetail} isLoadingEnemy={isLoadingEnemy} setIsLoadingEnemy={setIsLoadingEnemy} />
          {isError && <p style={{ color: 'red' }}>Error: {isError}</p>}
        </div>
      </div>
    </div>
  )
}

export default App
