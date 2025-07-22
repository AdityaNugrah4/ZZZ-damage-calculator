const attackerLevelCoefficient = [
    50, 54, 58, 62, 66, 71, 76, 82, 88, 94,
    100, 107, 114, 121, 129, 137, 145, 153, 162, 172,
    181, 191, 201, 211, 222, 233, 245, 256, 268, 281,
    293, 306, 319, 333, 347, 361, 375, 390, 405, 421,
    436, 452, 469, 485, 502, 519, 537, 555, 573, 592,
    610, 629, 649, 669, 689, 709, 730, 751, 772, 794,
    816, 838, 860, 883, 906, 930, 954, 978, 1002, 1027,
    1052, 1077, 1103, 1129, 1155, 1181, 1208, 1236, 1263, 1291,
    1319, 1347, 1376, 1405, 1435, 1464, 1494, 1525, 1555, 1586,
    1617, 1649, 1681, 1713, 1745, 1778, 1811, 1845, 1878, 1912
];

const buffLevel = [
    1.00, 1.0169, 1.0338, 1.0508, 1.0677, 1.0847, 1.1016, 1.1186, 1.1355, 1.1525,
    1.1694, 1.1864, 1.2033, 1.2203, 1.2372, 1.2542, 1.2711, 1.2881, 1.3050, 1.3220,
    1.3389, 1.3559, 1.3728, 1.3898, 1.4067, 1.4237, 1.4406, 1.4576, 1.4745, 1.4915,
    1.5084, 1.5254, 1.5423, 1.5593, 1.5762, 1.5932, 1.6101, 1.6271, 1.6440, 1.6610,
    1.6779, 1.6949, 1.7118, 1.7288, 1.7457, 1.7627, 1.7796, 1.7966, 1.8135, 1.8305,
    1.8474, 1.8644, 1.8813, 1.8983, 1.9152, 1.9322, 1.9491, 1.9661, 1.9830, 2.0000
];

let enemyLevel;
let enemyCurves;
let defenceGrowth; // Based on level curve of agentLevel
let baseDef;
const enemyDef = baseDef * defenceGrowth / 100;

let enemyStunGrowth;
let enemyBaseStun;
const enemyStun = enemyBaseStun * enemyStunGrowth / 100;

// Enemy Ressistance
let fireRes;
let electricRes;
let etherRes;
let iceRes;
let physicalRes;

let agentLevel;
let currentAgentAtackerLevelCoeficient;
let buffLevelMultiplier; // Based on buffLevel of agentLevel

let effectiveDef;
let resReduction;
let dmgReduction
let stunBonus;

const defMultiplier = currentAgentAtackerLevelCoeficient / (currentAgentAtackerLevelCoeficient + effectiveDef);
const resMultiplier = 1 + resReduction; // also need to be reduced by one (or two) of the res that depend on the agent affinity. Also 1 mean 100%
const dmgReductionMultiplier = 1 + dmgReduction;
const stunMultiplier = 1 + stunBonus;
const finalMultiplier = defMultiplier * resMultiplier * dmgReductionMultiplier * stunMultiplier;

// This is for agent stats and raw damage
let dmgType; // This for agent affinity type
let atk;
let skillMV;
let dmgPercentage;
let penRatioPercentage;
let penFlat;
let critDmg;
const finalDMG = atk * skillMV * (1 + dmgPercentage) * finalMultiplier;
const finalDMGCriticalHit = atk * skillMV * (1 + dmgPercentage) * finalMultiplier * (1 + critDmg);

// Daze build up
let impact;
let skillDaze;
let dazePercentage;
const finalDaze = impact * skillDaze * (1 + dazePercentage);

