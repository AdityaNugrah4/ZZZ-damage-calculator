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

// https://api.irminsul.gg/zzz/bangboos.json
const bangboosURL = "https://api.irminsul.gg/zzz/bangboos.json";

const driveDiscsURL = "https://api.irminsul.gg/zzz/drive-discs.json";

const characterBannersURL = "https://api.irminsul.gg/zzz/character-banners.json";
const weaponBannersURL = "https://api.irminsul.gg/zzz/weapon-banners.json";