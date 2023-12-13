export type GameSettings = {
  numberOfPlayers: number;
  repeatingLetters: boolean;
  removeHardLetters: boolean;
  numberOfRounds: number;
  lengthOfRounds: number;
  categories: { value: string }[];
};

export const gameSettingsConfig: GameSettings = {
  numberOfPlayers: 2,
  repeatingLetters: true,
  removeHardLetters: true,
  numberOfRounds: 5,
  lengthOfRounds: 30,
  categories: [{ value: "" }],
};

export const hardLetters: string[] = ["Q", "X", "Z"];
