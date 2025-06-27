import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterBaseStats from './Components/CharacterBaseStats'
import CharacterSkills from './Components/CharacterSkills'
import W_Engine from './Components/W_Engine'
import EquipmentDisc from './Components/EquipmentDisc'
import Agent from './Components/Agent'
import Agent2 from './Components/Agent2'
import { AllCharactersIrminsul } from './Components/zzz-api-irminsul'

function App() {

  const [characterGeneralData, setCharacterGeneralData] = useState({});
  const [isSelectedID, setIsSelectedID] = useState('');
  const [isAgentDetail, setIsAgentDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function firstFecth() { // First fetch the character data to dropdown list
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
    firstFecth()
  }, []);

  useEffect(() => {
    if (!isSelectedID) {
      return setIsAgentDetail(null);
    }

    function secondFetch() { // To fetch the detailed data for agent
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
    secondFetch();
  }, [isSelectedID]);

  const handleSelectedAgent = (event) => { // handle dropdown list
    setIsSelectedID(event.target.value)
  }

  return (
    <div>
      <div>Hello World</div>
      <div>
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
        <W_Engine />
      </div>
      <div>
        <h1>Equipment</h1>
        <EquipmentDisc />
      </div>
    </div>
  )
}

export default App
