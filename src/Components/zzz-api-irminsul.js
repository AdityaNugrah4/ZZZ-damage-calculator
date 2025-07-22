// https://api.irminsul.gg/zzz/characters.json
const charactersURL = "https://api.irminsul.gg/zzz/characters.json";
export const AllCharactersIrminsul = async () => {
    const respond = await fetch(charactersURL);

    if (!respond) {
        throw new Error('Failed to fetch character list.')
    }
    return respond.json();
}

// https://api.irminsul.gg/zzz/weapons.json
const weaponsURL = "https://api.irminsul.gg/zzz/weapons.json";
export const AllEngine = async () => {
    const respond = await fetch(weaponsURL);
    if (!respond) {
        throw new Error('Failed to fecth Weapon list.')
    }
    return respond.json();
}

// https://api.irminsul.gg/zzz/bangboos.json
const bangboosURL = "https://api.irminsul.gg/zzz/bangboos.json";

const driveDiscsURL = "https://api.irminsul.gg/zzz/drive-discs.json";
export const allDriveDisc = async () => {
    const respond = await fetch(driveDiscsURL);
    if (!respond) {
        throw new Error('Failed to fecth Weapon list.')
    }
    return respond.json();
}

const characterBannersURL = "https://api.irminsul.gg/zzz/character-banners.json";
const weaponBannersURL = "https://api.irminsul.gg/zzz/weapon-banners.json";

// https://api.hakush.in/zzz/data/monster.json
const enemiesURL = "https://api.hakush.in/zzz/data/monster.json";
export const AllEnemies = async () => {
    const respond = await fetch(enemiesURL);

    if (!respond) {
        throw new Error('Failed to fetch character list.')
    }
    return respond.json();
}

// example https://api.hakush.in/zzz/data/en/monster/10001.json
const enemiesID = "https://api.hakush.in/zzz/data/en/monster";
export const EnemyDetail = async (fecthedID) => {
    if (!fecthedID) {
        throw new Error("Enemy ID is required to fetch details.")
    }

    const respond = await fetch(`${enemiesID}/${fecthedID}.json`);

    if (!respond.ok) {
        throw new Error(`Failed to fetch details for character ID: ${fecthedID}`);
    }

    return await respond.json();
}