// The api from https://github.com/seriaati/hakushin-py
// const LIST_API_URL = "https://api.hakush.in/zzz/data";
// const DETAIL_API_URL = "https://api.hakush.in/zzz/data/en";
const LIST_API_URL = "/api/zzz/data"; // Base URL path for API calls that get master list.
const DETAIL_API_URL = "/api/zzz/data/en"; // Base URL path for API calls that get specific details.

export async function getAllCharacters() {
    const response = await fetch(`${LIST_API_URL}/character.json`)

    if (!response.ok) {
        throw new Error('Failed to fetch character list.')
    }
    return response.json();
}

export async function getCharacterDetails(characterID) {
    if (!characterID) {
        throw new Error("Character ID is required to fetch details.");
    }

    const response = await fetch(`${DETAIL_API_URL}/character/${characterID}.json`);

    if (!response.ok) {
        throw new Error(`Failed to fetch details for character ID: ${characterID}`);
    }
    return response.json()
}