import React, { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import W_Engine from './Components/W_Engine'
import Agent2 from './Components/Agent2'
import { AllCharactersIrminsul, allDriveDisc, AllEnemies, AllEngine, EnemyDetail } from './Components/zzz-api-irminsul'
import Enemy from './Components/Enemy'
import DriveDisc from './Components/DriveDisc'
import WelcomePage from './Components/WelcomePage'
import Header from './Components/Header'
import Footer from './Components/Footer'
import DescriptionPage from './Components/DescriptionPage'
import Background1 from './Components/Background1'
import Background2 from './Components/Background2'

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
  const [wEngineData, setWEngineData] = useState({
    baseAttack: 0,
    level: 0,
    specialityValue: 0,
    specialityType: ''
  });
  const [enemiesData, setEnemiesData] = useState({
    enemyHP: 0,
    enemyATK: 0,
    enemyDEF: 0,
    enemyFireDmgRes: 0,
    enemyPhysicalDmgRes: 0,
    enemyElectricDmgRes: 0,
    enemyIceDmgRes: 0,
    enemyEtherDmgRes: 0
  })
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
        subStats3: { value: 0, subType: '' },
        subStats4: { value: 0, subType: '' }
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
        subStats3: { value: 0, subType: '' },
        subStats4: { value: 0, subType: '' }
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
        subStats3: { value: 0, subType: '' },
        subStats4: { value: 0, subType: '' }
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
        subStats3: { value: 0, subType: '' },
        subStats4: { value: 0, subType: '' }
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
        subStats3: { value: 0, subType: '' },
        subStats4: { value: 0, subType: '' }
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
        subStats3: { value: 0, subType: '' },
        subStats4: { value: 0, subType: '' }
      },
    }
  });

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

  // Handlers for driveDisc
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

  const isAgentSelected = isAgentDetail !== null;

  return (
    <div>
      <Header />
      <WelcomePage />
      <DescriptionPage />
      {/* Agent Selection */}
      <div className='page-container'>
        <div className='page-control'>
          <h1>CHARACTER</h1>
          <select value={isSelectedID} onChange={handleSelectedAgent} disabled={isLoading} className='main-select'>
            <option> -- Choose -- </option>
            {Object.entries(characterGeneralData).map(([id, agentId]) => (
              <option value={id} key={id}>{agentId.name}</option>
            ))}
          </select>
        </div>
        <Agent2
          isAgentDetail={isAgentDetail}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          isSelectedDriveDisc={isSelectedDriveDisc}
          wEngineData={wEngineData}
          enemiesData={enemiesData}
        />
        {isError && <p style={{ color: 'red' }}>Error: {isError}</p>}
      </div>
      {/* W-Engine */}
      <div className='page-container'>
        <div className='page-control'>
          <h1>W-ENGINE</h1>
          <select value={isWEngineSelectedID} onChange={handleSelectedWEngine} disabled={!isAgentSelected || isLoadingWEngine} className='main-select'>
            <option>-- Choose W-Engine --</option>
            {Object.entries(wEngineGeneralData).map(([id, wEngine]) => (
              <option value={id} key={id}>
                {wEngine.name} Rank-{wEngine.rarity}
              </option>
            ))}
          </select>
        </div>
        <W_Engine
          isWEngineDetail={isWEngineDetail}
          isLoadingWEngine={isLoadingWEngine}
          wEngineData={wEngineData}
          setWEngineData={setWEngineData}
          isEnabled={isAgentSelected}
        />
        {isError && <p style={{ color: 'red' }}>Error: {isError}</p>}
      </div>
      {/* Drive Disc */}
      <div className='page-container'>
        <div className='page-control'>
          <h1>EQUIPMENT</h1>
        </div>
        <DriveDisc
          setIsSelectedDriveDisc={setIsSelectedDriveDisc}
          isSelectedDriveDisc={isSelectedDriveDisc}
          handlerDriveDiscRank={handlerDriveDiscRank}
          handlerDriveDiscMainStats={handlerDriveDiscMainStats}
          handlerDriveDiscMainType={handlerDriveDiscMainType}
          handlerDriveDiscSubstats={handlerDriveDiscSubstats}
          isEnabled={isAgentSelected}
        />
      </div>
      {/* Enemy */}
      <div className='page-container'>
        <div className='page-control'>
          <h1>Enemy</h1>
          <select value={isEnemiesSelectedID} onChange={handleSelectedEnemy} disabled={isLoadingEnemy} className='main-select'>
            <option>-- Choose Enemy --</option>
            {Object.entries(enemiesGeneralData).map(([id, selected]) => (
              <option value={id} key={id}>{selected.EN}</option>
            ))}
          </select>
        </div>
        <Enemy
          isEnemiesDetail={isEnemiesDetail}
          isLoadingEnemy={isLoadingEnemy}
          setIsLoadingEnemy={setIsLoadingEnemy}
          setEnemiesData={setEnemiesData}
        />
        {isError && <p style={{ color: 'red' }}>Error: {isError}</p>}
      </div>
      <Background2 />
      <Background1 isAgentDetail={isAgentDetail} />
      <Footer />
    </div>
  )
}

export default App
