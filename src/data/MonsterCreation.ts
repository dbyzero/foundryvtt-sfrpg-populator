import UniversalCreatureRule from "../models/UniversalCreatureRule.js"
import { UniversalCreatureRules } from "./universal creature rules/UniversalCreatureRules.js"
import AdjustmentSpecialAbility from "../models/AdjustmentSpecialAbility.js"
import { CR } from "./CRs.js"

/// Monster Creation rules (Arrays, Special abilities) and some common monster/npc types

/// List of Monster Reference Symbols
export enum MonsterReferenceSymbol {
    combatant,
    expert,
    spellcaster
}

export enum MonsterSkillType {
    good,
    master
}

/// Collection of monster creation statistics and special abilities used to generate new creatures
export const MonsterCreation = {
    arrays: {
        // Expert Arrays
        expert: {
            name: MonsterReferenceSymbol.expert,
            main: {
                "1/3": {
                    CR: CR[0],
                    EAC: 10,
                    KAC: 11,
                    fort: 0,
                    reflex: 0,
                    will: 2,
                    HP: 6,
                    abilityDC: 10,
                    baseSpellDC: 10,
                    abilityMods: [3, 1, 0],
                    specialAbilities: 1,
                    masterSkill: { count: 3, mod: 7 },
                    goodSkill: { count: 2, mod: 3 }
                } as IMainArrayRow,
                "1/2": {
                    CR: CR[1],
                    EAC: 10,
                    KAC: 11,
                    fort: 0,
                    reflex: 0,
                    will: 3,
                    HP: 12,
                    abilityDC: 11,
                    baseSpellDC: 11,
                    abilityMods: [3, 2, 1],
                    specialAbilities: 1,
                    masterSkill: { count: 3, mod: 9 },
                    goodSkill: { count: 2, mod: 4 }
                } as IMainArrayRow,
                "1": {
                    CR: CR[2],
                    EAC: 11,
                    KAC: 12,
                    fort: 1,
                    reflex: 1,
                    will: 4,
                    HP: 17,
                    abilityDC: 12,
                    baseSpellDC: 11,
                    abilityMods: [4, 2, 1],
                    specialAbilities: 1,
                    masterSkill: { count: 3, mod: 10 },
                    goodSkill: { count: 2, mod: 5 }
                } as IMainArrayRow,
                "2": {
                    CR: CR[3],
                    EAC: 13,
                    KAC: 14,
                    fort: 1,
                    reflex: 1,
                    will: 5,
                    HP: 23,
                    abilityDC: 13,
                    baseSpellDC: 12,
                    abilityMods: [4, 2, 1],
                    specialAbilities: 1,
                    masterSkill: { count: 3, mod: 12 },
                    goodSkill: { count: 2, mod: 7 }
                } as IMainArrayRow,
                "3": {
                    CR: CR[4],
                    EAC: 14,
                    KAC: 15,
                    fort: 2,
                    reflex: 2,
                    will: 6,
                    HP: 35,
                    abilityDC: 14,
                    baseSpellDC: 13,
                    abilityMods: [4, 2, 1],
                    specialAbilities: 2,
                    masterSkill: { count: 3, mod: 13 },
                    goodSkill: { count: 2, mod: 8 }
                } as IMainArrayRow,
                "4": {
                    CR: CR[5],
                    EAC: 16,
                    KAC: 17,
                    fort: 3,
                    reflex: 3,
                    will: 7,
                    HP: 45,
                    abilityDC: 15,
                    baseSpellDC: 13,
                    abilityMods: [5, 3, 1],
                    specialAbilities: 2,
                    masterSkill: { count: 3, mod: 15 },
                    goodSkill: { count: 2, mod: 10 }
                } as IMainArrayRow,
                "5": {
                    CR: CR[6],
                    EAC: 17,
                    KAC: 18,
                    fort: 4,
                    reflex: 4,
                    will: 8,
                    HP: 65,
                    abilityDC: 15,
                    baseSpellDC: 13,
                    abilityMods: [5, 3, 2],
                    specialAbilities: 2,
                    masterSkill: { count: 3, mod: 16 },
                    goodSkill: { count: 2, mod: 11 }
                } as IMainArrayRow,
                "6": {
                    CR: CR[7],
                    EAC: 18,
                    KAC: 19,
                    fort: 5,
                    reflex: 5,
                    will: 9,
                    HP: 80,
                    abilityDC: 16,
                    baseSpellDC: 14,
                    abilityMods: [5, 3, 2],
                    specialAbilities: 2,
                    masterSkill: { count: 3, mod: 18 },
                    goodSkill: { count: 2, mod: 13 }
                } as IMainArrayRow,
                "7": {
                    CR: CR[8],
                    EAC: 19,
                    KAC: 20,
                    fort: 6,
                    reflex: 6,
                    will: 10,
                    HP: 100,
                    abilityDC: 17,
                    baseSpellDC: 15,
                    abilityMods: [5, 4, 2],
                    specialAbilities: 2,
                    masterSkill: { count: 3, mod: 19 },
                    goodSkill: { count: 2, mod: 14 }
                } as IMainArrayRow,
                "8": {
                    CR: CR[9],
                    EAC: 20,
                    KAC: 21,
                    fort: 7,
                    reflex: 7,
                    will: 11,
                    HP: 115,
                    abilityDC: 18,
                    baseSpellDC: 15,
                    abilityMods: [6, 4, 2],
                    specialAbilities: 2,
                    masterSkill: { count: 3, mod: 21 },
                    goodSkill: { count: 2, mod: 16 }
                } as IMainArrayRow,
                "9": {
                    CR: CR[10],
                    EAC: 22,
                    KAC: 23,
                    fort: 8,
                    reflex: 8,
                    will: 12,
                    HP: 135,
                    abilityDC: 18,
                    baseSpellDC: 15,
                    abilityMods: [6, 4, 3],
                    specialAbilities: 2,
                    masterSkill: { count: 3, mod: 22 },
                    goodSkill: { count: 2, mod: 17 }
                } as IMainArrayRow,
                "10": {
                    CR: CR[11],
                    EAC: 23,
                    KAC: 24,
                    fort: 9,
                    reflex: 9,
                    will: 13,
                    HP: 150,
                    abilityDC: 19,
                    baseSpellDC: 16,
                    abilityMods: [8, 5, 3],
                    specialAbilities: 2,
                    masterSkill: { count: 3, mod: 24 },
                    goodSkill: { count: 2, mod: 19 }
                } as IMainArrayRow,
                "11": {
                    CR: CR[12],
                    EAC: 24,
                    KAC: 25,
                    fort: 10,
                    reflex: 10,
                    will: 14,
                    HP: 170,
                    abilityDC: 20,
                    baseSpellDC: 16,
                    abilityMods: [8, 5, 3],
                    specialAbilities: 2,
                    masterSkill: { count: 3, mod: 25 },
                    goodSkill: { count: 2, mod: 20 }
                } as IMainArrayRow,
                "12": {
                    CR: CR[13],
                    EAC: 26,
                    KAC: 27,
                    fort: 11,
                    reflex: 11,
                    will: 15,
                    HP: 185,
                    abilityDC: 21,
                    baseSpellDC: 17,
                    abilityMods: [8, 5, 4],
                    specialAbilities: 3,
                    masterSkill: { count: 3, mod: 27 },
                    goodSkill: { count: 2, mod: 22 }
                } as IMainArrayRow,
                "13": {
                    CR: CR[14],
                    EAC: 27,
                    KAC: 28,
                    fort: 12,
                    reflex: 12,
                    will: 16,
                    HP: 210,
                    abilityDC: 21,
                    baseSpellDC: 17,
                    abilityMods: [8, 6, 4],
                    specialAbilities: 3,
                    masterSkill: { count: 3, mod: 28 },
                    goodSkill: { count: 2, mod: 23 }
                } as IMainArrayRow,
                "14": {
                    CR: CR[15],
                    EAC: 28,
                    KAC: 29,
                    fort: 12,
                    reflex: 12,
                    will: 17,
                    HP: 235,
                    abilityDC: 22,
                    baseSpellDC: 17,
                    abilityMods: [8, 6, 4],
                    specialAbilities: 3,
                    masterSkill: { count: 3, mod: 30 },
                    goodSkill: { count: 2, mod: 25 }
                } as IMainArrayRow,
                "15": {
                    CR: CR[16],
                    EAC: 29,
                    KAC: 30,
                    fort: 13,
                    reflex: 13,
                    will: 18,
                    HP: 255,
                    abilityDC: 23,
                    baseSpellDC: 18,
                    abilityMods: [9, 7, 5],
                    specialAbilities: 3,
                    masterSkill: { count: 3, mod: 31 },
                    goodSkill: { count: 2, mod: 26 }
                } as IMainArrayRow,
                "16": {
                    CR: CR[17],
                    EAC: 30,
                    KAC: 31,
                    fort: 14,
                    reflex: 14,
                    will: 19,
                    HP: 280,
                    abilityDC: 24,
                    baseSpellDC: 18,
                    abilityMods: [10, 7, 5],
                    specialAbilities: 3,
                    masterSkill: { count: 3, mod: 33 },
                    goodSkill: { count: 2, mod: 28 }
                } as IMainArrayRow,
                "17": {
                    CR: CR[18],
                    EAC: 31,
                    KAC: 32,
                    fort: 15,
                    reflex: 15,
                    will: 20,
                    HP: 315,
                    abilityDC: 24,
                    baseSpellDC: 18,
                    abilityMods: [11, 8, 5],
                    specialAbilities: 3,
                    masterSkill: { count: 3, mod: 34 },
                    goodSkill: { count: 2, mod: 29 }
                } as IMainArrayRow,
                "18": {
                    CR: CR[19],
                    EAC: 32,
                    KAC: 33,
                    fort: 16,
                    reflex: 16,
                    will: 20,
                    HP: 350,
                    abilityDC: 25,
                    baseSpellDC: 19,
                    abilityMods: [11, 8, 6],
                    specialAbilities: 3,
                    masterSkill: { count: 3, mod: 36 },
                    goodSkill: { count: 2, mod: 31 }
                } as IMainArrayRow,
                "19": {
                    CR: CR[20],
                    EAC: 33,
                    KAC: 34,
                    fort: 16,
                    reflex: 16,
                    will: 21,
                    HP: 385,
                    abilityDC: 26,
                    baseSpellDC: 20,
                    abilityMods: [11, 9, 6],
                    specialAbilities: 4,
                    masterSkill: { count: 3, mod: 37 },
                    goodSkill: { count: 2, mod: 32 }
                } as IMainArrayRow,
                "20": {
                    CR: CR[21],
                    EAC: 35,
                    KAC: 36,
                    fort: 17,
                    reflex: 17,
                    will: 22,
                    HP: 430,
                    abilityDC: 27,
                    baseSpellDC: 21,
                    abilityMods: [12, 9, 6],
                    specialAbilities: 4,
                    masterSkill: { count: 3, mod: 39 },
                    goodSkill: { count: 2, mod: 34 }
                } as IMainArrayRow,
                "21": {
                    CR: CR[22],
                    EAC: 36,
                    KAC: 37,
                    fort: 18,
                    reflex: 18,
                    will: 23,
                    HP: 465,
                    abilityDC: 27,
                    baseSpellDC: 21,
                    abilityMods: [12, 10, 7],
                    specialAbilities: 4,
                    masterSkill: { count: 3, mod: 40 },
                    goodSkill: { count: 2, mod: 35 }
                } as IMainArrayRow,
                "22": {
                    CR: CR[23],
                    EAC: 38,
                    KAC: 39,
                    fort: 18,
                    reflex: 18,
                    will: 23,
                    HP: 500,
                    abilityDC: 28,
                    baseSpellDC: 22,
                    abilityMods: [13, 10, 7],
                    specialAbilities: 4,
                    masterSkill: { count: 3, mod: 42 },
                    goodSkill: { count: 2, mod: 37 }
                } as IMainArrayRow,
                "23": {
                    CR: CR[24],
                    EAC: 39,
                    KAC: 40,
                    fort: 19,
                    reflex: 19,
                    will: 24,
                    HP: 550,
                    abilityDC: 29,
                    baseSpellDC: 23,
                    abilityMods: [13, 11, 7],
                    specialAbilities: 4,
                    masterSkill: { count: 3, mod: 43 },
                    goodSkill: { count: 2, mod: 38 }
                } as IMainArrayRow,
                "24": {
                    CR: CR[25],
                    EAC: 41,
                    KAC: 42,
                    fort: 20,
                    reflex: 20,
                    will: 25,
                    HP: 600,
                    abilityDC: 30,
                    baseSpellDC: 24,
                    abilityMods: [15, 11, 8],
                    specialAbilities: 4,
                    masterSkill: { count: 3, mod: 45 },
                    goodSkill: { count: 2, mod: 40 }
                } as IMainArrayRow,
                "25": {
                    CR: CR[26],
                    EAC: 42,
                    KAC: 43,
                    fort: 21,
                    reflex: 21,
                    will: 26,
                    HP: 650,
                    abilityDC: 30,
                    baseSpellDC: 24,
                    abilityMods: [15, 12, 8],
                    specialAbilities: 4,
                    masterSkill: { count: 3, mod: 46 },
                    goodSkill: { count: 2, mod: 41 }
                } as IMainArrayRow
            },
            attack: {
                "1/3": {
                    high: 2,
                    low: 0,
                    energy: "1d4",
                    kinetic: "1d4",
                    standard: "1d4 + @abilities.str.mod",
                    threeAttacks: "",
                    fourAttacks: ""
                } as IAttackArrayRow,
                "1/2": {
                    high: 4,
                    low: 2,
                    energy: "1d4",
                    kinetic: "1d4",
                    standard: "1d4 + @abilities.str.mod",
                    threeAttacks: "",
                    fourAttacks: ""
                } as IAttackArrayRow,
                "1": {
                    high: 6,
                    low: 4,
                    energy: "1d4 + 1",
                    kinetic: "1d4 + 1",
                    standard: "1d4 + 1 + @abilities.str.mod",
                    threeAttacks: "",
                    fourAttacks: ""
                } as IAttackArrayRow,
                "2": {
                    high: 8,
                    low: 6,
                    energy: "1d4 + 2",
                    kinetic: "1d4 + 2",
                    standard: "1d4 + 2 + @abilities.str.mod",
                    threeAttacks: "",
                    fourAttacks: ""
                } as IAttackArrayRow,
                "3": {
                    high: 9,
                    low: 7,
                    energy: "1d4 + 3",
                    kinetic: "1d4 + 3",
                    standard: "1d4 + 3 + @abilities.str.mod",
                    threeAttacks: "",
                    fourAttacks: ""
                } as IAttackArrayRow,
                "4": {
                    high: 10,
                    low: 8,
                    energy: "1d4 + 4",
                    kinetic: "1d4 + 4",
                    standard: "1d4 + 4 + @abilities.str.mod",
                    threeAttacks: "",
                    fourAttacks: ""
                } as IAttackArrayRow,
                "5": {
                    high: 12,
                    low: 10,
                    energy: "1d4 + 5",
                    kinetic: "1d6 + 5",
                    standard: "1d4 + 5 + @abilities.str.mod",
                    threeAttacks: "",
                    fourAttacks: ""
                } as IAttackArrayRow,
                "6": {
                    high: 14,
                    low: 12,
                    energy: "1d6 + 6",
                    kinetic: "1d8 + 6",
                    standard: "1d6 + 6 + @abilities.str.mod",
                    threeAttacks: "1d4 + 6 + @abilities.str.mod",
                    fourAttacks: ""
                } as IAttackArrayRow,
                "7": {
                    high: 15,
                    low: 13,
                    energy: "1d8 + 7",
                    kinetic: "1d12 + 7",
                    standard: "1d8 + 7 + @abilities.str.mod",
                    threeAttacks: "1d4 + 7 + @abilities.str.mod",
                    fourAttacks: "1d4 + 7 + @abilities.str.mod"
                } as IAttackArrayRow,
                "8": {
                    high: 17,
                    low: 15,
                    energy: "1d10 + 8",
                    kinetic: "2d6 + 8",
                    standard: "1d12 + 8 + @abilities.str.mod",
                    threeAttacks: "1d8 + 8 + @abilities.str.mod",
                    fourAttacks: "1d4 + 8 + @abilities.str.mod"
                } as IAttackArrayRow,
                "9": {
                    high: 19,
                    low: 17,
                    energy: "2d6 + 9",
                    kinetic: "2d8 + 9",
                    standard: "3d4 + 9 + @abilities.str.mod",
                    threeAttacks: "1d10 + 9 + @abilities.str.mod",
                    fourAttacks: "1d6 + 9 + @abilities.str.mod"
                } as IAttackArrayRow,
                "10": {
                    high: 20,
                    low: 18,
                    energy: "3d4 + 10",
                    kinetic: "2d8 + 10",
                    standard: "2d8 + 10 + @abilities.str.mod",
                    threeAttacks: "1d10 + 10 + @abilities.str.mod",
                    fourAttacks: "1d8 + 10 + @abilities.str.mod"
                } as IAttackArrayRow,
                "11": {
                    high: 21,
                    low: 19,
                    energy: "2d8 + 11",
                    kinetic: "2d10 + 11",
                    standard: "2d10 + 11 + @abilities.str.mod",
                    threeAttacks: "3d4 + 11 + @abilities.str.mod",
                    fourAttacks: "1d10 + 11 + @abilities.str.mod"
                } as IAttackArrayRow,
                "12": {
                    high: 23,
                    low: 21,
                    energy: "2d8 + 12",
                    kinetic: "2d10 + 12",
                    standard: "2d12 + 12 + @abilities.str.mod",
                    threeAttacks: "3d4 + 12 + @abilities.str.mod",
                    fourAttacks: "1d12 + 12 + @abilities.str.mod"
                } as IAttackArrayRow,
                "13": {
                    high: 24,
                    low: 22,
                    energy: "2d10 + 13",
                    kinetic: "4d6 + 13",
                    standard: "6d4 + 13 + @abilities.str.mod",
                    threeAttacks: "3d6 + 13 + @abilities.str.mod",
                    fourAttacks: "3d4 + 13 + @abilities.str.mod"
                } as IAttackArrayRow,
                "14": {
                    high: 25,
                    low: 23,
                    energy: "5d4 + 14",
                    kinetic: "4d8 + 14",
                    standard: "6d6 + 14 + @abilities.str.mod",
                    threeAttacks: "4d6 + 14 + @abilities.str.mod",
                    fourAttacks: "3d6 + 14 + @abilities.str.mod"
                } as IAttackArrayRow,
                "15": {
                    high: 26,
                    low: 24,
                    energy: "4d6 + 15",
                    kinetic: "6d6 + 15",
                    standard: "5d8 + 15 + @abilities.str.mod",
                    threeAttacks: "6d4 + 15 + @abilities.str.mod",
                    fourAttacks: "2d10 + 15 + @abilities.str.mod"
                } as IAttackArrayRow,
                "16": {
                    high: 28,
                    low: 26,
                    energy: "6d4 + 16",
                    kinetic: "5d8 + 16",
                    standard: "6d8 + 16 + @abilities.str.mod",
                    threeAttacks: "4d8 + 16 + @abilities.str.mod",
                    fourAttacks: "3d8 + 16 + @abilities.str.mod"
                } as IAttackArrayRow,
                "17": {
                    high: 29,
                    low: 27,
                    energy: "4d8 + 17",
                    kinetic: "4d12 + 17",
                    standard: "8d6 + 17 + @abilities.str.mod",
                    threeAttacks: "3d12 + 17 + @abilities.str.mod",
                    fourAttacks: "6d4 + 17 + @abilities.str.mod"
                } as IAttackArrayRow,
                "18": {
                    high: 30,
                    low: 28,
                    energy: "3d12 + 18",
                    kinetic: "8d6 + 18",
                    standard: "8d8 + 18 + @abilities.str.mod",
                    threeAttacks: "5d8 + 18 + @abilities.str.mod",
                    fourAttacks: "4d8 + 18 + @abilities.str.mod"
                } as IAttackArrayRow,
                "19": {
                    high: 31,
                    low: 29,
                    energy: "5d8 + 19",
                    kinetic: "6d10 + 19",
                    standard: "9d8 + 19 + @abilities.str.mod",
                    threeAttacks: "6d8 + 19 + @abilities.str.mod",
                    fourAttacks: "3d12 + 19 + @abilities.str.mod"
                } as IAttackArrayRow,
                "20": {
                    high: 32,
                    low: 30,
                    energy: "4d12 + 20",
                    kinetic: "8d8 + 20",
                    standard: "13d6 + 20 + @abilities.str.mod",
                    threeAttacks: "9d6 + 20 + @abilities.str.mod",
                    fourAttacks: "5d8 + 20 + @abilities.str.mod"
                } as IAttackArrayRow,
                "21": {
                    high: 33,
                    low: 31,
                    energy: "8d6 + 21",
                    kinetic: "6d12 + 21",
                    standard: "15d6 + 21 + @abilities.str.mod",
                    threeAttacks: "10d6 + 21 + @abilities.str.mod",
                    fourAttacks: "4d12 + 21 + @abilities.str.mod"
                } as IAttackArrayRow,
                "22": {
                    high: 34,
                    low: 32,
                    energy: "6d10 + 22",
                    kinetic: "8d10 + 22",
                    standard: "17d6 + 22 + @abilities.str.mod",
                    threeAttacks: "6d12 + 22 + @abilities.str.mod",
                    fourAttacks: "8d6 + 22 + @abilities.str.mod"
                } as IAttackArrayRow,
                "23": {
                    high: 35,
                    low: 33,
                    energy: "8d8 + 23",
                    kinetic: "13d6 + 23",
                    standard: "12d10 + 23 + @abilities.str.mod",
                    threeAttacks: "8d10 + 23 + @abilities.str.mod",
                    fourAttacks: "6d10 + 23 + @abilities.str.mod"
                } as IAttackArrayRow,
                "24": {
                    high: 37,
                    low: 35,
                    energy: "9d8 + 24",
                    kinetic: "15d6 + 24",
                    standard: "21d6 + 24 + @abilities.str.mod",
                    threeAttacks: "9d10 + 24 + @abilities.str.mod",
                    fourAttacks: "8d8 + 24 + @abilities.str.mod"
                } as IAttackArrayRow,
                "25": {
                    high: 38,
                    low: 36,
                    energy: "8d10 + 25",
                    kinetic: "16d6 + 25",
                    standard: "12d12 + 25 + @abilities.str.mod",
                    threeAttacks: "15d6 + 25 + @abilities.str.mod",
                    fourAttacks: "6d12 + 25 + @abilities.str.mod"
                } as IAttackArrayRow
            }
        },
        combatant: {
            name: MonsterReferenceSymbol.combatant,
            main: {
                "1/3": {
                    CR: CR[0],
                    EAC: 10,
                    KAC: 12,
                    fort: 1,
                    reflex: 1,
                    will: 0,
                    HP: 6,
                    abilityMods: [3, 1, 0],
                    specialAbilities: 1,
                    masterSkill: { count: 1, mod: 7 },
                    goodSkill: { count: 2, mod: 3 }
                } as IMainArrayRow,
                "1/2": {
                    CR: CR[1],
                    EAC: 10,
                    KAC: 12,
                    fort: 2,
                    reflex: 2,
                    will: 0,
                    HP: 13,
                    abilityMods: [3, 2, 1],
                    specialAbilities: 1,
                    masterSkill: { count: 1, mod: 9 },
                    goodSkill: { count: 2, mod: 4 }
                } as IMainArrayRow,
                "1": {
                    CR: CR[2],
                    EAC: 11,
                    KAC: 13,
                    fort: 3,
                    reflex: 3,
                    will: 1,
                    HP: 20,
                    abilityMods: [4, 2, 1],
                    specialAbilities: 1,
                    masterSkill: { count: 1, mod: 10 },
                    goodSkill: { count: 2, mod: 5 }
                } as IMainArrayRow,
                "2": {
                    CR: CR[3],
                    EAC: 13,
                    KAC: 15,
                    fort: 4,
                    reflex: 4,
                    will: 1,
                    HP: 25,
                    abilityMods: [4, 2, 1],
                    specialAbilities: 2,
                    masterSkill: { count: 1, mod: 12 },
                    goodSkill: { count: 2, mod: 7 }
                } as IMainArrayRow,
                "3": {
                    CR: CR[4],
                    EAC: 14,
                    KAC: 16,
                    fort: 5,
                    reflex: 5,
                    will: 2,
                    HP: 40,
                    abilityMods: [4, 2, 1],
                    specialAbilities: 2,
                    masterSkill: { count: 1, mod: 13 },
                    goodSkill: { count: 2, mod: 8 }
                } as IMainArrayRow,
                "4": {
                    CR: CR[5],
                    EAC: 16,
                    KAC: 18,
                    fort: 6,
                    reflex: 6,
                    will: 3,
                    HP: 50,
                    abilityMods: [5, 3, 1],
                    specialAbilities: 2,
                    masterSkill: { count: 1, mod: 15 },
                    goodSkill: { count: 2, mod: 10 }
                } as IMainArrayRow,
                "5": {
                    CR: CR[6],
                    EAC: 17,
                    KAC: 19,
                    fort: 7,
                    reflex: 7,
                    will: 4,
                    HP: 70,
                    abilityMods: [5, 3, 2],
                    specialAbilities: 2,
                    masterSkill: { count: 1, mod: 16 },
                    goodSkill: { count: 2, mod: 11 }
                } as IMainArrayRow,
                "6": {
                    CR: CR[7],
                    EAC: 18,
                    KAC: 20,
                    fort: 8,
                    reflex: 8,
                    will: 5,
                    HP: 90,
                    abilityMods: [5, 3, 2],
                    specialAbilities: 2,
                    masterSkill: { count: 1, mod: 18 },
                    goodSkill: { count: 2, mod: 13 }
                } as IMainArrayRow,
                "7": {
                    CR: CR[8],
                    EAC: 19,
                    KAC: 21,
                    fort: 9,
                    reflex: 9,
                    will: 6,
                    HP: 105,
                    abilityMods: [5, 4, 2],
                    specialAbilities: 2,
                    masterSkill: { count: 1, mod: 19 },
                    goodSkill: { count: 2, mod: 14 }
                } as IMainArrayRow,
                "8": {
                    CR: CR[9],
                    EAC: 20,
                    KAC: 22,
                    fort: 10,
                    reflex: 10,
                    will: 7,
                    HP: 125,
                    abilityMods: [6, 4, 2],
                    specialAbilities: 2,
                    masterSkill: { count: 1, mod: 21 },
                    goodSkill: { count: 2, mod: 16 }
                } as IMainArrayRow,
                "9": {
                    CR: CR[10],
                    EAC: 22,
                    KAC: 24,
                    fort: 11,
                    reflex: 11,
                    will: 8,
                    HP: 145,
                    abilityMods: [6, 4, 3],
                    specialAbilities: 2,
                    masterSkill: { count: 1, mod: 22 },
                    goodSkill: { count: 2, mod: 17 }
                } as IMainArrayRow,
                "10": {
                    CR: CR[11],
                    EAC: 23,
                    KAC: 25,
                    fort: 12,
                    reflex: 12,
                    will: 9,
                    HP: 165,
                    abilityMods: [8, 5, 3],
                    specialAbilities: 2,
                    masterSkill: { count: 1, mod: 24 },
                    goodSkill: { count: 2, mod: 19 }
                } as IMainArrayRow
            },
            attack: {
                "1/3": {
                    high: 4,
                    low: 1,
                    energy: "1d4",
                    kinetic: "1d4",
                    standard: "1d6 + @abilities.str.mod"
                } as IAttackArrayRow,
                "1/2": {
                    high: 6,
                    low: 3,
                    energy: "1d4",
                    kinetic: "1d6",
                    standard: "1d6 + @abilities.str.mod"
                } as IAttackArrayRow,
                "1": {
                    high: 8,
                    low: 5,
                    energy: "1d4+1",
                    kinetic: "1d6+1",
                    standard: "1d6 + 1 + @abilities.str.mod"
                } as IAttackArrayRow,
                "2": {
                    high: 10,
                    low: 7,
                    energy: "1d4+2",
                    kinetic: "1d6+2",
                    standard: "1d6 + 2 + @abilities.str.mod"
                } as IAttackArrayRow,
                "3": {
                    high: 11,
                    low: 8,
                    energy: "1d4+3",
                    kinetic: "1d6+3",
                    standard: "1d6 + 3 + @abilities.str.mod"
                } as IAttackArrayRow,
                "4": {
                    high: 12,
                    low: 9,
                    energy: "1d4+4",
                    kinetic: "1d6+4",
                    standard: "1d6 + 4 + @abilities.str.mod"
                } as IAttackArrayRow,
                "5": {
                    high: 14,
                    low: 11,
                    energy: "1d6+5",
                    kinetic: "1d8+5",
                    standard: "1d6 + 5 + @abilities.str.mod"
                } as IAttackArrayRow,
                "6": {
                    high: 16,
                    low: 13,
                    energy: "1d10+6",
                    kinetic: "2d6+6",
                    standard: "1d8 + 6 + @abilities.str.mod"
                } as IAttackArrayRow,
                "7": {
                    high: 17,
                    low: 14,
                    energy: "2d6+7",
                    kinetic: "2d8+7",
                    standard: "2d6 + 7 + @abilities.str.mod"
                } as IAttackArrayRow
            }
        }
    },
    specialAbilities: {
        universalCreatureRule: {
            ferocity: UniversalCreatureRules.ferocity,
            naturalWeapons: UniversalCreatureRules.naturalWeapons,
            integratedWeapons: UniversalCreatureRules.integratedWeapons
        },
        adjustment: {
            brute: new AdjustmentSpecialAbility(
                "brute",
                "Use the low attack value for the NPC’s main attack, but determine the attack’s damage as if the NPC’s CR were 2 higher (adding the extra damage from weapon specialization). This special ability has a greater impact at higher CRs."
            ),
            extraHitPoints: new AdjustmentSpecialAbility(
                "extra hit points",
                "Increase the NPC’s HP by 20%."
            ),
            saveBoost: new AdjustmentSpecialAbility(
                "save boost",
                "Increase all saving throw bonuses by 1 or one saving throw bonus by 3."
            ),
            //TODO: Secondary Magic
            skillful: new AdjustmentSpecialAbility(
                "skillful",
                "Increase all master and good skill bonuses by 1."
            )
        }
    }
}
