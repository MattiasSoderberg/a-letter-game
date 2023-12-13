export type GameSettings = {
  numberOfPlayers: number;
  repeatingLetters: boolean;
  removeHardLetters: boolean;
  removeLocalLetters: boolean;
  numberOfRounds: number;
  lengthOfRounds: number;
  categories: { value: string }[];
};

export const gameSettingsConfig: GameSettings = {
  numberOfPlayers: 2,
  repeatingLetters: true,
  removeHardLetters: true,
  removeLocalLetters: false,
  numberOfRounds: 5,
  lengthOfRounds: 30,
  categories: [{ value: "" }],
};
