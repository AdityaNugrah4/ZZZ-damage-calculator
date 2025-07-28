import { useEffect, useState } from "react";
import { getAllCharacters, getCharacterDetails } from "./zzz-api";

const CharacterBaseStats = () => {
    const [isCharacterList, setIsCharacterList] = useState({});
    const [isSelectedID, setIsSelectedID] = useState('');
    const [isDetails, setIsDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const fetchInitialList = async () => {
            try {
                setIsError(null);
                setIsLoading(true);
                const listData = await getAllCharacters();

                console.log("Fetched All Agents List:", listData);

                setIsCharacterList(listData);
            } catch (err) {
                setIsError(err.message);
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchInitialList();
    }, []);

    useEffect(() => {
        // Don't run if the user hasn't selected an agent yet.
        if (!isSelectedID) {
            setIsDetails(null); // Clear previous details if user deselects
            return;
        }

        const fetchDetailsForId = async () => {
            try {
                setIsError(null);
                setIsLoading(true);
                const detailData = await getCharacterDetails(isSelectedID);

                console.log("Fetched Single Agent's Details:", detailData);

                setIsDetails(detailData);
            } catch (err) {
                setIsError(err.message);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDetailsForId();
    }, [isSelectedID]); // This runs whenever `selectedId` changes!

    // Step 2.5: Handle the change when the user selects from the dropdown.
    const handleSelectChange = (event) => {
        setIsSelectedID(event.target.value);
    };

    return (
        <div>
            <h2>Character Base Stats</h2>
            <span>HP</span>
            <span>ATK</span>
            <span>DEF</span>
            <span>Impact</span>
            <span>CRIT Rate</span>
            <span>CRIT DMG</span>
            <span>Anomaly Mastery</span>
            <span>Amomaly Proficiency</span>
            <span>PEN Ratio</span>
            <span>Energy Regen</span>
            <div>
                <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
                    <h1>Zenless Zone Zero Agent Browser</h1>
                    <p>Data from <a href="https://github.com/seriaati/hakushin-py" target="_blank" rel="noopener noreferrer">Hakush.in API</a>. All rights to HoYoverse.</p>

                    <h2>Select an Agent</h2>
                    <select value={isSelectedID} onChange={handleSelectChange} disabled={isLoading}>
                        <option value="">-- Choose --</option>
                        {/* The API gives us an object, so we use Object.entries to map over it */}
                        {Object.entries(isCharacterList).map(([id, charData]) => (
                            <option key={id} value={id}>
                                {charData.code}
                            </option>
                        ))}
                    </select>

                    <hr style={{ margin: '20px 0' }} />

                    {/* Show loading or error states */}
                    {isLoading && <p>Loading...</p>}
                    {isError && <p style={{ color: 'red' }}>Error: {isError}</p>}

                    {/* If we have details, display them! */}
                    {isDetails && (
                        <div className="agent-details">
                            <h2>{isDetails.CodeName}</h2>
                            <p>Description: {isDetails?.PartnerInfo?.ProfileDesc ?? "No agent has have been selected."}</p>
                            <div></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CharacterBaseStats