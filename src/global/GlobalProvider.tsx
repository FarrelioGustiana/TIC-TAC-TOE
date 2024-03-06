import React, { createContext, ReactNode } from "react";

type GlobalContextProps = {
  winCombo: number[][];
  player: { one: string; two: string };
  turn: string;
};

const GlobalContext = createContext<GlobalContextProps | null>(null);

type GlobalProviderProps = {
  children: ReactNode;
};

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const player = {
    one: "X",
    two: "O",
  };
  const turn: string = player.one;
  const winCombo: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  return (
    <GlobalContext.Provider
      value={{
        winCombo,
        player,
        turn,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
