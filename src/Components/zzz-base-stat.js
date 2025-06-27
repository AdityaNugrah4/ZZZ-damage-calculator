export const agentBaseStat = {
    1011: {
        id: 1011,
        codeName: "Anby",
        characterInfo: {
            name: "Anby Demara",
            rank: "A-Rank",
            attribute: "Electric",
            type: "Attack",
        },
        base_stats: {
            // Static stats, typically identical for characters of the same rank.
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 0.0,
        },
        level_growth: {
            // Key 0: Level 1
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 685,
                    atk: 124,
                    def: 38,
                    impact: 88,
                    anomaly_mastery: 98,
                    anomaly_proficiency: 95,
                },
            },
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1378,
                    atk: 247,
                    def: 75,
                    impact: 99,
                    anomaly_mastery: 112,
                    anomaly_proficiency: 109,
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1728,
                    atk: 309,
                    def: 94,
                    impact: 99,
                    anomaly_mastery: 112,
                    anomaly_proficiency: 109,
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2588,
                    atk: 463,
                    def: 141,
                    impact: 115,
                    anomaly_mastery: 129,
                    anomaly_proficiency: 126,
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3069,
                    atk: 549,
                    def: 167,
                    impact: 115,
                    anomaly_mastery: 129,
                    anomaly_proficiency: 126,
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3529,
                    atk: 631,
                    def: 192,
                    impact: 128,
                    anomaly_mastery: 140,
                    anomaly_proficiency: 137,
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4010,
                    atk: 717,
                    def: 218,
                    impact: 128,
                    anomaly_mastery: 140,
                    anomaly_proficiency: 137,
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 4467,
                    atk: 799,
                    def: 243,
                    impact: 142,
                    anomaly_mastery: 153,
                    anomaly_proficiency: 150,
                },
            },
        },
    },

    1021: {
        id: 1021,
        codeName: "Nekomata",
        characterInfo: {
            name: "Nekomiya Mana",
            rank: "S-Rank",
            attribute: "Physical",
            type: "Attack",
        },
        base_stats: {
            // Static stats for S-Rank characters.
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 608,
                    atk: 131,
                    def: 47,
                    impact: 92,
                    anomaly_mastery: 96,
                    anomaly_proficiency: 97,
                },
            },
            // Key 1: Level 20 (Before Ascension 1) - Data not explicitly available for this exact breakpoint, estimating based on trends.
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1391, // Placeholder, as exact data for this level and ascension state isn't explicitly provided.
                    atk: 255, // Placeholder
                    def: 63, // Placeholder
                    impact: 102, // Placeholder
                    anomaly_mastery: 92, // Placeholder
                    anomaly_proficiency: 89, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1) - Data not explicitly available for this exact breakpoint, estimating based on trends.
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1745, // Placeholder
                    atk: 320, // Placeholder
                    def: 79, // Placeholder
                    impact: 102, // Placeholder
                    anomaly_mastery: 92, // Placeholder
                    anomaly_proficiency: 89, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2) - Data not explicitly available for this exact breakpoint, estimating based on trends.
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2614, // Placeholder
                    atk: 480, // Placeholder
                    def: 119, // Placeholder
                    impact: 118, // Placeholder
                    anomaly_mastery: 106, // Placeholder
                    anomaly_proficiency: 103, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2) - Data not explicitly available for this exact breakpoint, estimating based on trends.
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3101, // Placeholder
                    atk: 569, // Placeholder
                    def: 141, // Placeholder
                    impact: 118, // Placeholder
                    anomaly_mastery: 106, // Placeholder
                    anomaly_proficiency: 103, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3) - Data not explicitly available for this exact breakpoint, estimating based on trends.
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3566, // Placeholder
                    atk: 654, // Placeholder
                    def: 162, // Placeholder
                    impact: 131, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 112, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3) - Data not explicitly available for this exact breakpoint, estimating based on trends.
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4053, // Placeholder
                    atk: 743, // Placeholder
                    def: 184, // Placeholder
                    impact: 131, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 112, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 7560,
                    atk: 835,
                    def: 587,
                    impact: 92,
                    anomaly_mastery: 96,
                    anomaly_proficiency: 97,
                },
            },
        },
    },
    1031: {
        id: 1031,
        codeName: "Nicole",
        characterInfo: {
            name: "Nicole Demara",
            rank: "A-Rank",
            attribute: "Ether",
            type: "Support",
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 655,
                    atk: 93,
                    def: 50,
                    impact: 88,
                    anomaly_mastery: 98,
                    anomaly_proficiency: 100,
                },
            },
            // The following levels are placeholder values, as exact incremental growth data for all levels/ascensions is not readily available in the search results.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1391, // Placeholder
                    atk: 255, // Placeholder
                    def: 63, // Placeholder
                    impact: 102, // Placeholder
                    anomaly_mastery: 92, // Placeholder
                    anomaly_proficiency: 89, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1745, // Placeholder
                    atk: 320, // Placeholder
                    def: 79, // Placeholder
                    impact: 102, // Placeholder
                    anomaly_mastery: 92, // Placeholder
                    anomaly_proficiency: 89, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2614, // Placeholder
                    atk: 480, // Placeholder
                    def: 119, // Placeholder
                    impact: 118, // Placeholder
                    anomaly_mastery: 106, // Placeholder
                    anomaly_proficiency: 103, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3101, // Placeholder
                    atk: 569, // Placeholder
                    def: 141, // Placeholder
                    impact: 118, // Placeholder
                    anomaly_mastery: 106, // Placeholder
                    anomaly_proficiency: 103, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3566, // Placeholder
                    atk: 654, // Placeholder
                    def: 162, // Placeholder
                    impact: 131, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 112, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4053, // Placeholder
                    atk: 743, // Placeholder
                    def: 184, // Placeholder
                    impact: 131, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 112, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 8145,
                    atk: 574, // Note: Some sources state 649 ATK at Lv60. Using 574 based on another detailed source.
                    def: 622,
                    impact: 88,
                    anomaly_mastery: 90, // Note: Some sources state 98, others 90. Using 90 based on a detailed source.
                    anomaly_proficiency: 93, // Note: Some sources state 100, others 93. Using 93 based on a detailed source.
                },
            },
        },
    },
    1041: {
        id: 1041,
        codeName: "Soldier 11",
        characterInfo: {
            name: "Soldier 11",
            rank: "S-Rank",
            attribute: "Fire",
            type: "Attack",
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 617,
                    atk: 128,
                    def: 49,
                    impact: 93,
                    anomaly_mastery: 94,
                    anomaly_proficiency: 93,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1391, // Placeholder
                    atk: 255, // Placeholder
                    def: 63, // Placeholder
                    impact: 102, // Placeholder
                    anomaly_mastery: 92, // Placeholder
                    anomaly_proficiency: 89, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1745, // Placeholder
                    atk: 320, // Placeholder
                    def: 79, // Placeholder
                    impact: 102, // Placeholder
                    anomaly_mastery: 92, // Placeholder
                    anomaly_proficiency: 89, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2614, // Placeholder
                    atk: 480, // Placeholder
                    def: 119, // Placeholder
                    impact: 118, // Placeholder
                    anomaly_mastery: 106, // Placeholder
                    anomaly_proficiency: 103, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3101, // Placeholder
                    atk: 569, // Placeholder
                    def: 141, // Placeholder
                    impact: 118, // Placeholder
                    anomaly_mastery: 106, // Placeholder
                    anomaly_proficiency: 103, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3566, // Placeholder
                    atk: 654, // Placeholder
                    def: 162, // Placeholder
                    impact: 131, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 112, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4053, // Placeholder
                    atk: 743, // Placeholder
                    def: 184, // Placeholder
                    impact: 131, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 112, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 7673,
                    atk: 813,
                    def: 612,
                    impact: 93,
                    anomaly_mastery: 94,
                    anomaly_proficiency: 93,
                },
            },
        },
    },
    1061: {
        id: 1061,
        codeName: "Corin",
        characterInfo: {
            name: "Corin Wickes",
            rank: "A-Rank",
            attribute: "Physical",
            type: "Attack",
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 561,
                    atk: 116,
                    def: 48,
                    impact: 93,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 96,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1391, // Placeholder
                    atk: 255, // Placeholder
                    def: 63, // Placeholder
                    impact: 102, // Placeholder
                    anomaly_mastery: 92, // Placeholder
                    anomaly_proficiency: 89, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1745, // Placeholder
                    atk: 320, // Placeholder
                    def: 79, // Placeholder
                    impact: 102, // Placeholder
                    anomaly_mastery: 92, // Placeholder
                    anomaly_proficiency: 89, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2614, // Placeholder
                    atk: 480, // Placeholder
                    def: 119, // Placeholder
                    impact: 118, // Placeholder
                    anomaly_mastery: 106, // Placeholder
                    anomaly_proficiency: 103, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3101, // Placeholder
                    atk: 569, // Placeholder
                    def: 141, // Placeholder
                    impact: 118, // Placeholder
                    anomaly_mastery: 106, // Placeholder
                    anomaly_proficiency: 103, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3566, // Placeholder
                    atk: 654, // Placeholder
                    def: 162, // Placeholder
                    impact: 131, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 112, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4053, // Placeholder
                    atk: 743, // Placeholder
                    def: 184, // Placeholder
                    impact: 131, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 112, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 6976,
                    atk: 807,
                    def: 604,
                    impact: 93,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 96,
                },
            },
        },
    },
    1071: {
        id: 1071,
        codeName: "Caesar",
        characterInfo: {
            name: "Caesar King",
            rank: "S-Rank",
            attribute: "Physical",
            type: "Defense", // Also functions as Stun/Support
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 766,
                    atk: 101,
                    def: 61,
                    impact: 105,
                    anomaly_mastery: 87,
                    anomaly_proficiency: 90,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 2000, // Placeholder
                    atk: 200, // Placeholder
                    def: 150, // Placeholder
                    impact: 110, // Placeholder
                    anomaly_mastery: 87, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 2500, // Placeholder
                    atk: 250, // Placeholder
                    def: 190, // Placeholder
                    impact: 110, // Placeholder
                    anomaly_mastery: 87, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 4000, // Placeholder
                    atk: 400, // Placeholder
                    def: 300, // Placeholder
                    impact: 115, // Placeholder
                    anomaly_mastery: 87, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 5000, // Placeholder
                    atk: 480, // Placeholder
                    def: 380, // Placeholder
                    impact: 115, // Placeholder
                    anomaly_mastery: 87, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 6000, // Placeholder
                    atk: 550, // Placeholder
                    def: 450, // Placeholder
                    impact: 120, // Placeholder
                    anomaly_mastery: 87, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 7000, // Placeholder
                    atk: 620, // Placeholder
                    def: 550, // Placeholder
                    impact: 120, // Placeholder
                    anomaly_mastery: 87, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 9526,
                    atk: 712,
                    def: 754,
                    impact: 123,
                    anomaly_mastery: 87,
                    anomaly_proficiency: 90,
                },
            },
        },
    },
    // Billy's data is now keyed by his unique identifier '1081'.
    1081: {
        id: 1081,
        codeName: "Billy",
        characterInfo: {
            name: "Billy Kid",
            rank: "A-Rank",
            attribute: "Physical",
            type: "Attack",
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 555,
                    atk: 113,
                    def: 49,
                    impact: 91,
                    anomaly_mastery: 98,
                    anomaly_proficiency: 102,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1391, // Placeholder
                    atk: 255, // Placeholder
                    def: 63, // Placeholder
                    impact: 102, // Placeholder
                    anomaly_mastery: 92, // Placeholder
                    anomaly_proficiency: 89, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1745, // Placeholder
                    atk: 320, // Placeholder
                    def: 79, // Placeholder
                    impact: 102, // Placeholder
                    anomaly_mastery: 92, // Placeholder
                    anomaly_proficiency: 89, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2614, // Placeholder
                    atk: 480, // Placeholder
                    def: 119, // Placeholder
                    impact: 118, // Placeholder
                    anomaly_mastery: 106, // Placeholder
                    anomaly_proficiency: 103, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3101, // Placeholder
                    atk: 569, // Placeholder
                    def: 141, // Placeholder
                    impact: 118, // Placeholder
                    anomaly_mastery: 106, // Placeholder
                    anomaly_proficiency: 103, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3566, // Placeholder
                    atk: 654, // Placeholder
                    def: 162, // Placeholder
                    impact: 131, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 112, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4053, // Placeholder
                    atk: 743, // Placeholder
                    def: 184, // Placeholder
                    impact: 131, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 112, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 6907,
                    atk: 787,
                    def: 606,
                    impact: 91,
                    anomaly_mastery: 92,
                    anomaly_proficiency: 91,
                },
            },
        },
    },
    1091: {
        id: 1091,
        codeName: "Miyabi",
        characterInfo: {
            name: "Hoshimi Miyabi",
            rank: "S-Rank",
            attribute: "Frost",
            type: "Anomaly", // Primarily functions as a Main DPS
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 617,
                    atk: 127,
                    def: 49,
                    impact: 86,
                    anomaly_mastery: 116,
                    anomaly_proficiency: 90, // Note: Initial anomaly proficiency varies in sources, using a common base value
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1400, // Placeholder
                    atk: 260, // Placeholder
                    def: 65, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 120, // Placeholder
                    anomaly_proficiency: 95, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1750, // Placeholder
                    atk: 325, // Placeholder
                    def: 80, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 120, // Placeholder
                    anomaly_proficiency: 95, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2650, // Placeholder
                    atk: 490, // Placeholder
                    def: 120, // Placeholder
                    impact: 105, // Placeholder
                    anomaly_mastery: 130, // Placeholder
                    anomaly_proficiency: 100, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3150, // Placeholder
                    atk: 580, // Placeholder
                    def: 145, // Placeholder
                    impact: 105, // Placeholder
                    anomaly_mastery: 130, // Placeholder
                    anomaly_proficiency: 100, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3600, // Placeholder
                    atk: 660, // Placeholder
                    def: 165, // Placeholder
                    impact: 115, // Placeholder
                    anomaly_mastery: 140, // Placeholder
                    anomaly_proficiency: 105, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4100, // Placeholder
                    atk: 750, // Placeholder
                    def: 185, // Placeholder
                    impact: 115, // Placeholder
                    anomaly_mastery: 140, // Placeholder
                    anomaly_proficiency: 105, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 7673,
                    atk: 880,
                    def: 606,
                    impact: 86,
                    anomaly_mastery: 116,
                    anomaly_proficiency: 238, // Note: This high value is specific to Lv60 with core passive bonuses
                },
            },
        },
    },
    1101: {
        id: 1101,
        codeName: "Koleda",
        characterInfo: {
            name: "Koleda Belobog",
            rank: "S-Rank",
            attribute: "Fire",
            type: "Stun",
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 653,
                    atk: 106,
                    def: 48,
                    impact: 116,
                    anomaly_mastery: 97,
                    anomaly_proficiency: 96,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1400, // Placeholder
                    atk: 210, // Placeholder
                    def: 60, // Placeholder
                    impact: 125, // Placeholder
                    anomaly_mastery: 97, // Placeholder
                    anomaly_proficiency: 96, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1750, // Placeholder
                    atk: 260, // Placeholder
                    def: 75, // Placeholder
                    impact: 125, // Placeholder
                    anomaly_mastery: 97, // Placeholder
                    anomaly_proficiency: 96, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2600, // Placeholder
                    atk: 390, // Placeholder
                    def: 115, // Placeholder
                    impact: 130, // Placeholder
                    anomaly_mastery: 97, // Placeholder
                    anomaly_proficiency: 96, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3100, // Placeholder
                    atk: 460, // Placeholder
                    def: 140, // Placeholder
                    impact: 130, // Placeholder
                    anomaly_mastery: 97, // Placeholder
                    anomaly_proficiency: 96, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3600, // Placeholder
                    atk: 530, // Placeholder
                    def: 165, // Placeholder
                    impact: 132, // Placeholder
                    anomaly_mastery: 97, // Placeholder
                    anomaly_proficiency: 96, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4100, // Placeholder
                    atk: 600, // Placeholder
                    def: 190, // Placeholder
                    impact: 132, // Placeholder
                    anomaly_mastery: 97, // Placeholder
                    anomaly_proficiency: 96, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 8127,
                    atk: 736,
                    def: 595,
                    impact: 134,
                    anomaly_mastery: 97,
                    anomaly_proficiency: 96,
                },
            },
        },
    },
    1111: {
        id: 1111,
        codeName: "Anton",
        characterInfo: {
            name: "Anton Ivanov",
            rank: "A-Rank",
            attribute: "Electric",
            type: "Attack",
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 588,
                    atk: 122,
                    def: 50,
                    impact: 95,
                    anomaly_mastery: 86,
                    anomaly_proficiency: 90,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1400, // Placeholder
                    atk: 250, // Placeholder
                    def: 65, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1750, // Placeholder
                    atk: 310, // Placeholder
                    def: 80, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2600, // Placeholder
                    atk: 470, // Placeholder
                    def: 120, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3100, // Placeholder
                    atk: 560, // Placeholder
                    def: 145, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3600, // Placeholder
                    atk: 640, // Placeholder
                    def: 165, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4100, // Placeholder
                    atk: 730, // Placeholder
                    def: 185, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 7219,
                    atk: 791,
                    def: 622,
                    impact: 95,
                    anomaly_mastery: 86,
                    anomaly_proficiency: 90,
                },
            },
        },
    },
    1121: {
        id: 1121,
        codeName: "Ben",
        characterInfo: {
            name: "Ben Bigger",
            rank: "A-Rank",
            attribute: "Fire",
            type: "Defense",
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2, // Base Energy Regen, not affected by core skill enhancements
        },
        level_growth: {
            // Key 0: Level 1
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 686,
                    atk: 91,
                    def: 58,
                    impact: 95,
                    anomaly_mastery: 86,
                    anomaly_proficiency: 90,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1700, // Placeholder
                    atk: 180, // Placeholder
                    def: 140, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 2100, // Placeholder
                    atk: 220, // Placeholder
                    def: 170, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 3200, // Placeholder
                    atk: 340, // Placeholder
                    def: 270, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3800, // Placeholder
                    atk: 420, // Placeholder
                    def: 330, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 4400, // Placeholder
                    atk: 480, // Placeholder
                    def: 390, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 5000, // Placeholder
                    atk: 550, // Placeholder
                    def: 450, // Placeholder
                    impact: 95, // Placeholder
                    anomaly_mastery: 86, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 8577,
                    atk: 1232, // Note: Ben's ATK scales off his DEF. The given ATK here is his final ATK, including the DEF conversion.
                    def: 724,
                    impact: 95,
                    anomaly_mastery: 86,
                    anomaly_proficiency: 90,
                },
            },
        },
    },
    1131: {
        id: 1131,
        codeName: "Soukaku",
        characterInfo: {
            name: "Soukaku",
            rank: "A-Rank",
            attribute: "Ice",
            type: "Support",
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1 (Base)
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 645, // Base HP for Lv1 is not directly stated, using Lv60 as a placeholder for consistency
                    atk: 96, // Base ATK for Lv1
                    def: 48, // Base DEF for Lv1
                    impact: 93, // Base Impact for Lv1
                    anomaly_mastery: 96, // Base Anomaly Mastery for Lv1
                    anomaly_proficiency: 93, // Base Anomaly Proficiency for Lv1
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1400, // Placeholder
                    atk: 210, // Placeholder
                    def: 60, // Placeholder
                    impact: 100, // Placeholder
                    anomaly_mastery: 100, // Placeholder
                    anomaly_proficiency: 95, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1750, // Placeholder
                    atk: 260, // Placeholder
                    def: 75, // Placeholder
                    impact: 100, // Placeholder
                    anomaly_mastery: 100, // Placeholder
                    anomaly_proficiency: 95, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2600, // Placeholder
                    atk: 390, // Placeholder
                    def: 115, // Placeholder
                    impact: 110, // Placeholder
                    anomaly_mastery: 110, // Placeholder
                    anomaly_proficiency: 105, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3100, // Placeholder
                    atk: 460, // Placeholder
                    def: 140, // Placeholder
                    impact: 110, // Placeholder
                    anomaly_mastery: 110, // Placeholder
                    anomaly_proficiency: 105, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3600, // Placeholder
                    atk: 530, // Placeholder
                    def: 165, // Placeholder
                    impact: 115, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 110, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4100, // Placeholder
                    atk: 600, // Placeholder
                    def: 190, // Placeholder
                    impact: 115, // Placeholder
                    anomaly_mastery: 115, // Placeholder
                    anomaly_proficiency: 110, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max, including Core passive bonuses)",
                level: 60,
                stats: {
                    hp: 8025,
                    atk: 665,
                    def: 597,
                    impact: 93,
                    anomaly_mastery: 96,
                    anomaly_proficiency: 93,
                },
            },
        },
    },
    1141: {
        id: 1141,
        codeName: "Lycaon",
        characterInfo: {
            name: "Von Lycaon",
            rank: "S-Rank",
            attribute: "Ice",
            type: "Stun",
            faction: "Victoria Housekeeping Co."
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1 (Base)
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 677,
                    atk: 105,
                    def: 49,
                    impact: 119,
                    anomaly_mastery: 91,
                    anomaly_proficiency: 90,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1800, // Placeholder
                    atk: 220, // Placeholder
                    def: 60, // Placeholder
                    impact: 125, // Placeholder
                    anomaly_mastery: 91, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 2200, // Placeholder
                    atk: 270, // Placeholder
                    def: 75, // Placeholder
                    impact: 125, // Placeholder
                    anomaly_mastery: 91, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 3400, // Placeholder
                    atk: 400, // Placeholder
                    def: 115, // Placeholder
                    impact: 130, // Placeholder
                    anomaly_mastery: 91, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 4000, // Placeholder
                    atk: 480, // Placeholder
                    def: 140, // Placeholder
                    impact: 130, // Placeholder
                    anomaly_mastery: 91, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 4600, // Placeholder
                    atk: 550, // Placeholder
                    def: 165, // Placeholder
                    impact: 135, // Placeholder
                    anomaly_mastery: 91, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 5200, // Placeholder
                    atk: 620, // Placeholder
                    def: 190, // Placeholder
                    impact: 135, // Placeholder
                    anomaly_mastery: 91, // Placeholder
                    anomaly_proficiency: 90, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max, including Core passive bonuses)",
                level: 60,
                stats: {
                    hp: 8416,
                    atk: 653,
                    def: 606,
                    impact: 137,
                    anomaly_mastery: 91,
                    anomaly_proficiency: 90,
                },
            },
        },
    },
    1151: {
        id: 1151,
        codeName: "Lucy",
        characterInfo: {
            name: "Luciana Auxesis Theodoro de Montefio",
            rank: "A-Rank",
            attribute: "Fire",
            type: "Support",
            faction: "Sons of Calydon"
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2, // Base Energy Regen. Can be higher with promotions/W-Engine.
        },
        level_growth: {
            // Key 0: Level 1 (Base) - Specific base stats for Lucy are not clearly delineated for level 1 from available sources.
            // Using Level 60 (Max) stats from a reliable source as a reference, and scaling down placeholder values.
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 600, // Placeholder
                    atk: 100, // Placeholder
                    def: 50, // Placeholder
                    impact: 86, // Retaining Max Level Impact as it's often consistent
                    anomaly_mastery: 94, // Retaining Max Level Anomaly Mastery
                    anomaly_proficiency: 93, // Retaining Max Level Anomaly Proficiency
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1500, // Placeholder
                    atk: 200, // Placeholder
                    def: 100, // Placeholder
                    impact: 86, // Placeholder
                    anomaly_mastery: 94, // Placeholder
                    anomaly_proficiency: 93, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1900, // Placeholder
                    atk: 250, // Placeholder
                    def: 120, // Placeholder
                    impact: 86, // Placeholder
                    anomaly_mastery: 94, // Placeholder
                    anomaly_proficiency: 93, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2800, // Placeholder
                    atk: 380, // Placeholder
                    def: 180, // Placeholder
                    impact: 86, // Placeholder
                    anomaly_mastery: 94, // Placeholder
                    anomaly_proficiency: 93, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3300, // Placeholder
                    atk: 450, // Placeholder
                    def: 220, // Placeholder
                    impact: 86, // Placeholder
                    anomaly_mastery: 94, // Placeholder
                    anomaly_proficiency: 93, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3800, // Placeholder
                    atk: 520, // Placeholder
                    def: 250, // Placeholder
                    impact: 86, // Placeholder
                    anomaly_mastery: 94, // Placeholder
                    anomaly_proficiency: 93, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4300, // Placeholder
                    atk: 590, // Placeholder
                    def: 290, // Placeholder
                    impact: 86, // Placeholder
                    anomaly_mastery: 94, // Placeholder
                    anomaly_proficiency: 93, // Placeholder
                },
            },
            // Key 7: Level 60 (Max) - Consolidated from various sources (Prydwen, Genshin.gg)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 8025,
                    atk: 658,
                    def: 612,
                    impact: 86,
                    anomaly_mastery: 94,
                    anomaly_proficiency: 93,
                },
            },
        },
    },
    1161: {
        id: 1161,
        codeName: "Lighter",
        characterInfo: {
            name: "Lighter",
            rank: "S-Rank",
            attribute: "Fire",
            type: "Stun",
            faction: "Sons of Calydon"
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2, // Base Energy Regen
        },
        level_growth: {
            // Key 0: Level 1 (Base)
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 677, // Estimated base HP (as specific Lv1 is not always available, using a placeholder scaled from Lv60)
                    atk: 105, // Estimated base ATK
                    def: 49, // Estimated base DEF
                    impact: 119, // Base Impact
                    anomaly_mastery: 91, // Base Anomaly Mastery
                    anomaly_proficiency: 90, // Base Anomaly Proficiency
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1700, // Placeholder
                    atk: 220, // Placeholder
                    def: 100, // Placeholder
                    impact: 125, // Placeholder
                    anomaly_mastery: 95, // Placeholder
                    anomaly_proficiency: 95, // Placeholder
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 2100, // Placeholder
                    atk: 270, // Placeholder
                    def: 120, // Placeholder
                    impact: 125, // Placeholder
                    anomaly_mastery: 95, // Placeholder
                    anomaly_proficiency: 95, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 3200, // Placeholder
                    atk: 400, // Placeholder
                    def: 180, // Placeholder
                    impact: 130, // Placeholder
                    anomaly_mastery: 100, // Placeholder
                    anomaly_proficiency: 100, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3800, // Placeholder
                    atk: 480, // Placeholder
                    def: 220, // Placeholder
                    impact: 130, // Placeholder
                    anomaly_mastery: 100, // Placeholder
                    anomaly_proficiency: 100, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 4400, // Placeholder
                    atk: 550, // Placeholder
                    def: 250, // Placeholder
                    impact: 135, // Placeholder
                    anomaly_mastery: 105, // Placeholder
                    anomaly_proficiency: 105, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 5000, // Placeholder
                    atk: 620, // Placeholder
                    def: 290, // Placeholder
                    impact: 135, // Placeholder
                    anomaly_mastery: 105, // Placeholder
                    anomaly_proficiency: 105, // Placeholder
                },
            },
            // Key 7: Level 60 (Max) - Consolidated from various sources (Genshin.gg, Mobalytics, Prydwen)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 8253,
                    atk: 797,
                    def: 612,
                    impact: 139,
                    anomaly_mastery: 91,
                    anomaly_proficiency: 90,
                },
            },
        },
    },
    1171: {
        id: 1171,
        codeName: "Burnice",
        characterInfo: {
            name: "Burnice White",
            rank: "S-Rank",
            attribute: "Fire",
            type: "Anomaly",
            faction: "Sons of Calydon"
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.56,
        },
        level_growth: {
            // Key 0: Level 1 (Base)
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 592,
                    atk: 124,
                    def: 48,
                    impact: 83,
                    anomaly_mastery: 118,
                    anomaly_proficiency: 120,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1500, // Placeholder
                    atk: 250, // Placeholder
                    def: 60, // Placeholder
                    impact: 83, // Placeholder (Impact generally doesn't change with level)
                    anomaly_mastery: 118, // Placeholder (Anomaly Mastery generally doesn't change with level)
                    anomaly_proficiency: 120, // Placeholder (Anomaly Proficiency generally doesn't change with level)
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 1900, // Placeholder
                    atk: 310, // Placeholder
                    def: 75, // Placeholder
                    impact: 83, // Placeholder
                    anomaly_mastery: 118, // Placeholder
                    anomaly_proficiency: 120, // Placeholder
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 2800, // Placeholder
                    atk: 470, // Placeholder
                    def: 115, // Placeholder
                    impact: 83, // Placeholder
                    anomaly_mastery: 118, // Placeholder
                    anomaly_proficiency: 120, // Placeholder
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3300, // Placeholder
                    atk: 560, // Placeholder
                    def: 140, // Placeholder
                    impact: 83, // Placeholder
                    anomaly_mastery: 118, // Placeholder
                    anomaly_proficiency: 120, // Placeholder
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 3800, // Placeholder
                    atk: 640, // Placeholder
                    def: 165, // Placeholder
                    impact: 83, // Placeholder
                    anomaly_mastery: 118, // Placeholder
                    anomaly_proficiency: 120, // Placeholder
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4300, // Placeholder
                    atk: 730, // Placeholder
                    def: 185, // Placeholder
                    impact: 83, // Placeholder
                    anomaly_mastery: 118, // Placeholder
                    anomaly_proficiency: 120, // Placeholder
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 7368,
                    atk: 863,
                    def: 601,
                    impact: 83,
                    anomaly_mastery: 118,
                    anomaly_proficiency: 120,
                },
            },
        },
    },
    1181: {
        id: 1181,
        codeName: "Grace",
        characterInfo: {
            name: "Grace Howard",
            rank: "S-Rank",
            attribute: "Electric",
            type: "Anomaly",
            faction: "Belobog Heavy Industries"
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1 (Base)
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 602,
                    atk: 119,
                    def: 48,
                    impact: 83,
                    anomaly_mastery: 115,
                    anomaly_proficiency: 116,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1700, // Placeholder
                    atk: 240, // Placeholder
                    def: 60, // Placeholder
                    impact: 83,
                    anomaly_mastery: 125, // Placeholder
                    anomaly_proficiency: 116,
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 2100, // Placeholder
                    atk: 300, // Placeholder
                    def: 75, // Placeholder
                    impact: 83,
                    anomaly_mastery: 135, // Placeholder
                    anomaly_proficiency: 116,
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 3200, // Placeholder
                    atk: 450, // Placeholder
                    def: 115, // Placeholder
                    impact: 83,
                    anomaly_mastery: 145, // Placeholder
                    anomaly_proficiency: 116,
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3800, // Placeholder
                    atk: 540, // Placeholder
                    def: 140, // Placeholder
                    impact: 83,
                    anomaly_mastery: 151, // Max value
                    anomaly_proficiency: 116,
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 4400, // Placeholder
                    atk: 620, // Placeholder
                    def: 165, // Placeholder
                    impact: 83,
                    anomaly_mastery: 151,
                    anomaly_proficiency: 116,
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 5000, // Placeholder
                    atk: 700, // Placeholder
                    def: 190, // Placeholder
                    impact: 83,
                    anomaly_mastery: 151,
                    anomaly_proficiency: 116,
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 7480,
                    atk: 826,
                    def: 601,
                    impact: 83,
                    anomaly_mastery: 151,
                    anomaly_proficiency: 116,
                },
            },
        },
    },
    1191: {
        id: 1191,
        codeName: "Ellen",
        characterInfo: {
            name: "Ellen Joe",
            rank: "S-Rank",
            attribute: "Ice",
            type: "Attack", // Primarily a Main DPS
            faction: "Victoria Housekeeping Co."
        },
        base_stats: {
            crit_rate: 0.05, // Base Crit Rate
            crit_dmg: 0.50, // Base Crit Damage
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1 (Base)
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 617,
                    atk: 135,
                    def: 49,
                    impact: 93,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 94,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1700, // Placeholder
                    atk: 250, // Placeholder
                    def: 60, // Placeholder
                    impact: 93,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 94,
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 2100, // Placeholder
                    atk: 310, // Placeholder
                    def: 75, // Placeholder
                    impact: 93,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 94,
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 3200, // Placeholder
                    atk: 470, // Placeholder
                    def: 115, // Placeholder
                    impact: 93,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 94,
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3800, // Placeholder
                    atk: 560, // Placeholder
                    def: 140, // Placeholder
                    impact: 93,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 94,
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 4400, // Placeholder
                    atk: 640, // Placeholder
                    def: 165, // Placeholder
                    impact: 93,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 94,
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 5000, // Placeholder
                    atk: 730, // Placeholder
                    def: 185, // Placeholder
                    impact: 93,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 94,
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 7674,
                    atk: 938, // Note: This ATK includes potential promotion bonuses. Base ATK at Lv60 is 863.
                    def: 607,
                    impact: 93,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 94,
                },
            },
        },
    },
    1201: {
        id: 1201,
        codeName: "Harumasa",
        characterInfo: {
            name: "Asaba Harumasa",
            rank: "S-Rank",
            attribute: "Electric",
            type: "Attack", // Primarily a Main DPS
            faction: "Section 6"
        },
        base_stats: {
            crit_rate: 0.05, // Base Crit Rate
            crit_dmg: 0.50, // Base Crit Damage
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1 (Base) - Specific base stats for Harumasa at level 1 are not explicitly listed in most sources.
            // Using placeholder values that are proportionally lower than max level stats.
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 600, // Placeholder
                    atk: 100, // Placeholder
                    def: 50, // Placeholder
                    impact: 90, // Consistent with Max Level Impact
                    anomaly_mastery: 80, // Consistent with Max Level Anomaly Mastery
                    anomaly_proficiency: 95, // Consistent with Max Level Anomaly Proficiency
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1700, // Placeholder
                    atk: 220, // Placeholder
                    def: 100, // Placeholder
                    impact: 90,
                    anomaly_mastery: 80,
                    anomaly_proficiency: 95,
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 2100, // Placeholder
                    atk: 270, // Placeholder
                    def: 120, // Placeholder
                    impact: 90,
                    anomaly_mastery: 80,
                    anomaly_proficiency: 95,
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 3200, // Placeholder
                    atk: 400, // Placeholder
                    def: 180, // Placeholder
                    impact: 90,
                    anomaly_mastery: 80,
                    anomaly_proficiency: 95,
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3800, // Placeholder
                    atk: 480, // Placeholder
                    def: 220, // Placeholder
                    impact: 90,
                    anomaly_mastery: 80,
                    anomaly_proficiency: 95,
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 4400, // Placeholder
                    atk: 550, // Placeholder
                    def: 250, // Placeholder
                    impact: 90,
                    anomaly_mastery: 80,
                    anomaly_proficiency: 95,
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 5000, // Placeholder
                    atk: 620, // Placeholder
                    def: 290, // Placeholder
                    impact: 90,
                    anomaly_mastery: 80,
                    anomaly_proficiency: 95,
                },
            },
            // Key 7: Level 60 (Max) - Consolidated from multiple sources (UrbanIdea, GameLeap, Genshin.gg)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 7405,
                    atk: 840, // Some sources list 915, but 840 is also common. Using 840 as a more conservative base.
                    def: 600,
                    impact: 90,
                    anomaly_mastery: 80,
                    anomaly_proficiency: 95,
                },
            },
        },
    },
    1211: {
        id: 1211,
        codeName: "Rina",
        characterInfo: {
            name: "Alexandrina Sebastiane",
            rank: "S-Rank",
            attribute: "Electric",
            type: "Support",
            faction: "Victoria Housekeeping Co."
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0, // Base PEN Ratio, increases with level and promotion
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1 (Base)
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 692,
                    atk: 103,
                    def: 48,
                    impact: 83,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 92,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1700, // Placeholder
                    atk: 200, // Placeholder
                    def: 100, // Placeholder
                    impact: 83,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 92,
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 2100, // Placeholder
                    atk: 250, // Placeholder
                    def: 120, // Placeholder
                    impact: 83,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 92,
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 3200, // Placeholder
                    atk: 380, // Placeholder
                    def: 180, // Placeholder
                    impact: 83,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 92,
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3800, // Placeholder
                    atk: 450, // Placeholder
                    def: 220, // Placeholder
                    impact: 83,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 92,
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 4400, // Placeholder
                    atk: 520, // Placeholder
                    def: 250, // Placeholder
                    impact: 83,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 92,
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 5000, // Placeholder
                    atk: 590, // Placeholder
                    def: 290, // Placeholder
                    impact: 83,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 92,
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 8609,
                    atk: 717,
                    def: 600,
                    impact: 83,
                    anomaly_mastery: 93,
                    anomaly_proficiency: 92,
                },
            },
        },
    },
    1221: {
        id: 1221,
        codeName: "Yanagi",
        characterInfo: {
            name: "Yanagi",
            rank: "A-Rank",
            attribute: "Electric",
            type: "Support", // Can also function as a sub-DPS
            faction: "Section 6"
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1 (Base) - Specific base stats for Yanagi at level 1 are not explicitly listed in most sources.
            // Using placeholder values that are proportionally lower than max level stats.
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 620, // Placeholder
                    atk: 95, // Placeholder
                    def: 50, // Placeholder
                    impact: 95, // Consistent with Max Level Impact
                    anomaly_mastery: 100, // Consistent with Max Level Anomaly Mastery
                    anomaly_proficiency: 100, // Consistent with Max Level Anomaly Proficiency
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1600, // Placeholder
                    atk: 200, // Placeholder
                    def: 100, // Placeholder
                    impact: 95,
                    anomaly_mastery: 100,
                    anomaly_proficiency: 100,
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 2000, // Placeholder
                    atk: 250, // Placeholder
                    def: 120, // Placeholder
                    impact: 95,
                    anomaly_mastery: 100,
                    anomaly_proficiency: 100,
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 3000, // Placeholder
                    atk: 380, // Placeholder
                    def: 180, // Placeholder
                    impact: 95,
                    anomaly_mastery: 100,
                    anomaly_proficiency: 100,
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3600, // Placeholder
                    atk: 450, // Placeholder
                    def: 220, // Placeholder
                    impact: 95,
                    anomaly_mastery: 100,
                    anomaly_proficiency: 100,
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 4200, // Placeholder
                    atk: 520, // Placeholder
                    def: 250, // Placeholder
                    impact: 95,
                    anomaly_mastery: 100,
                    anomaly_proficiency: 100,
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4800, // Placeholder
                    atk: 590, // Placeholder
                    def: 290, // Placeholder
                    impact: 95,
                    anomaly_mastery: 100,
                    anomaly_proficiency: 100,
                },
            },
            // Key 7: Level 60 (Max) - Data compiled from various sources (Prydwen, GameLeap, Genshin.gg)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 7701,
                    atk: 671,
                    def: 606,
                    impact: 95,
                    anomaly_mastery: 100,
                    anomaly_proficiency: 100,
                },
            },
        },
    },
    1241: {
        id: 1241,
        codeName: "Zhu Yuan",
        characterInfo: {
            name: "Zhu Yuan",
            rank: "S-Rank",
            attribute: "Ether",
            type: "Attack", // Main DPS
            faction: "Criminal Investigation Special Response Team"
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50, // Increases to 78.8% at Lv 60
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1 (Base)
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 602,
                    atk: 132,
                    def: 48,
                    impact: 90,
                    anomaly_mastery: 92,
                    anomaly_proficiency: 93,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1600, // Placeholder
                    atk: 280, // Placeholder
                    def: 70, // Placeholder
                    impact: 90,
                    anomaly_mastery: 92,
                    anomaly_proficiency: 93,
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 2000, // Placeholder
                    atk: 340, // Placeholder
                    def: 85, // Placeholder
                    impact: 90,
                    anomaly_mastery: 92,
                    anomaly_proficiency: 93,
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 3000, // Placeholder
                    atk: 510, // Placeholder
                    def: 130, // Placeholder
                    impact: 90,
                    anomaly_mastery: 92,
                    anomaly_proficiency: 93,
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3600, // Placeholder
                    atk: 610, // Placeholder
                    def: 155, // Placeholder
                    impact: 90,
                    anomaly_mastery: 92,
                    anomaly_proficiency: 93,
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 4100, // Placeholder
                    atk: 700, // Placeholder
                    def: 180, // Placeholder
                    impact: 90,
                    anomaly_mastery: 92,
                    anomaly_proficiency: 93,
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 4700, // Placeholder
                    atk: 800, // Placeholder
                    def: 210, // Placeholder
                    impact: 90,
                    anomaly_mastery: 92,
                    anomaly_proficiency: 93,
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 7482,
                    atk: 844, // Some sources show 919 at Lv60, but 844 is also a commonly cited base. Using 844 here.
                    def: 600,
                    impact: 90,
                    anomaly_mastery: 92,
                    anomaly_proficiency: 93,
                },
            },
        },
    },
    1251: {
        id: 1251,
        codeName: "Qing Yi",
        characterInfo: {
            name: "Qingyi",
            rank: "S-Rank",
            attribute: "Electric",
            type: "Stun",
            faction: "Criminal Investigation Special Response Team"
        },
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },
        level_growth: {
            // Key 0: Level 1 (Base)
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 602,
                    atk: 119,
                    def: 48,
                    impact: 104, // Based on a level 1 stat found, slightly different from max level base
                    anomaly_mastery: 94,
                    anomaly_proficiency: 93,
                },
            },
            // The following levels are placeholder values for consistency, as detailed incremental stats for each ascension breakpoint are not consistently available.
            // These placeholders are based on the general pattern of increasing stats with level.
            // Key 1: Level 20 (Before Ascension 1)
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 1700, // Placeholder
                    atk: 240, // Placeholder
                    def: 60, // Placeholder
                    impact: 136, // Impact generally consistent at higher levels
                    anomaly_mastery: 94,
                    anomaly_proficiency: 93,
                },
            },
            // Key 2: Level 20 (After Ascension 1)
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 2100, // Placeholder
                    atk: 300, // Placeholder
                    def: 75, // Placeholder
                    impact: 136,
                    anomaly_mastery: 94,
                    anomaly_proficiency: 93,
                },
            },
            // Key 3: Level 40 (Before Ascension 2)
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 3200, // Placeholder
                    atk: 450, // Placeholder
                    def: 115, // Placeholder
                    impact: 136,
                    anomaly_mastery: 94,
                    anomaly_proficiency: 93,
                },
            },
            // Key 4: Level 40 (After Ascension 2)
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 3800, // Placeholder
                    atk: 540, // Placeholder
                    def: 140, // Placeholder
                    impact: 136,
                    anomaly_mastery: 94,
                    anomaly_proficiency: 93,
                },
            },
            // Key 5: Level 50 (Before Ascension 3)
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 4400, // Placeholder
                    atk: 620, // Placeholder
                    def: 165, // Placeholder
                    impact: 136,
                    anomaly_mastery: 94,
                    anomaly_proficiency: 93,
                },
            },
            // Key 6: Level 50 (After Ascension 3)
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 5000, // Placeholder
                    atk: 700, // Placeholder
                    def: 190, // Placeholder
                    impact: 136,
                    anomaly_mastery: 94,
                    anomaly_proficiency: 93,
                },
            },
            // Key 7: Level 60 (Max)
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 8251,
                    atk: 758,
                    def: 613,
                    impact: 136,
                    anomaly_mastery: 94,
                    anomaly_proficiency: 93,
                },
            },
        },
    },
    1261: {
        id: 1261,
        codeName: "Jane",
        characterInfo: {
            name: "Jane Doe",
            rank: "S‑Rank",
            attribute: "Physical",
            type: "Anomaly",
            faction: "N.E.P.S.",          // Criminal Investigation Special Response Team
        },

        // level‑independent stats
        base_stats: {
            crit_rate: 0.05,
            crit_dmg: 0.50,
            pen_ratio: 0.0,
            energy_regen: 1.2,
        },

        // growth table keyed by promotion breakpoint
        level_growth: {
            /* 0 ➟ Lv 1 (Base) */
            0: {
                description: "Level 1 (Base)",
                level: 1,
                stats: {
                    hp: 626,
                    atk: 127,
                    def: 49,
                    impact: 86,
                    anomaly_mastery: 112,
                    anomaly_proficiency: 114,
                },
            },

            /* 1 ➟ Lv 20 (before Ascension 1) */
            1: {
                description: "Level 20 (Before Ascension 1)",
                level: 20,
                stats: {
                    hp: 2671,
                    atk: 318,
                    def: 208,
                    impact: 86,
                    anomaly_mastery: 112,
                    anomaly_proficiency: 114,
                },
            },

            /* 2 ➟ Lv 20 (after Ascension 1) */
            2: {
                description: "Level 20 (After Ascension 1)",
                level: 20,
                stats: {
                    hp: 3100,
                    atk: 363,
                    def: 242,
                    impact: 86,
                    anomaly_mastery: 112,
                    anomaly_proficiency: 114,
                },
            },

            /* 3 ➟ Lv 40 (before Ascension 2) */
            3: {
                description: "Level 40 (Before Ascension 2)",
                level: 40,
                stats: {
                    hp: 5229,
                    atk: 562,
                    def: 407,
                    impact: 86,
                    anomaly_mastery: 112,
                    anomaly_proficiency: 114,
                },
            },

            /* 4 ➟ Lv 40 (after Ascension 2) */
            4: {
                description: "Level 40 (After Ascension 2)",
                level: 40,
                stats: {
                    hp: 5659,
                    atk: 607,
                    def: 441,
                    impact: 86,
                    anomaly_mastery: 112,
                    anomaly_proficiency: 114,
                },
            },

            /* 5 ➟ Lv 50 (before Ascension 3) */
            5: {
                description: "Level 50 (Before Ascension 3)",
                level: 50,
                stats: {
                    hp: 6509,
                    atk: 684,
                    def: 507,
                    impact: 86,
                    anomaly_mastery: 112,
                    anomaly_proficiency: 114,
                },
            },

            /* 6 ➟ Lv 50 (after Ascension 3) */
            6: {
                description: "Level 50 (After Ascension 3)",
                level: 50,
                stats: {
                    hp: 6939,
                    atk: 778,
                    def: 540,
                    impact: 86,
                    anomaly_mastery: 136,
                    anomaly_proficiency: 114,
                },
            },

            /* 7 ➟ Lv 60 (Max) */
            7: {
                description: "Level 60 (Max)",
                level: 60,
                stats: {
                    hp: 7789,
                    atk: 880,
                    def: 606,
                    impact: 86,
                    anomaly_mastery: 148,
                    anomaly_proficiency: 114,
                },
            },
        },
    },
    // Example for another character:
    // 1082: {
    //     id: 1082,
    //     codeName: "Nicole",
    //     ... (data for Nicole) ...
    // },
};