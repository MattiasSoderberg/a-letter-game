export type GameSettings = {
  numberOfPlayers: number;
  repeatingLetters: boolean;
  numberOfRounds: number;
  lengthOfRounds: number;
  categories: { value: string }[];
};

export const gameSettingsConfig: GameSettings = {
  numberOfPlayers: 2,
  repeatingLetters: true,
  numberOfRounds: 5,
  lengthOfRounds: 30,
  categories: [{ value: "" }],
};
