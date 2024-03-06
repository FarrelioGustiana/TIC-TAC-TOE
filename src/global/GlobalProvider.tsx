import React, { createContext, ReactNode, useContext, useState } from "react";

export type GlobalContextProps = {
  winCombo: number[][];
  player: { one: string; two: string };
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
};

const GlobalContext = createContext<GlobalContextProps | null>(null);

export const useGlobal = () =>
  useContext<GlobalContextProps | null>(GlobalContext);

type GlobalProviderProps = {
  children: ReactNode;
};

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const player = {
    one: "X",
    two: "O",
  };
  const [turn, setTurn] = useState<string>(player.one);

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
        setTurn,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
