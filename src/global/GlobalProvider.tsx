import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type GlobalContextProps = {
  winCombo: number[][];
  player: { one: string; two: string };
  turn: string;
  setTurn: Dispatch<SetStateAction<string>>;
  setOne: Dispatch<SetStateAction<number[]>>;
  setTwo: Dispatch<SetStateAction<number[]>>;
  one: number[];
  two: number[];
  allCells: string[];
  setAllCells: Dispatch<SetStateAction<string[]>>;
  isDraw: () => boolean;
  oneWin: boolean;
  twoWin: boolean;
  reset: () => void;
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

  // This is to contain the player moves
  const [one, setOne] = useState<number[]>([]);
  const [two, setTwo] = useState<number[]>([]);

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

  const [allCells, setAllCells] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  function isWin(moves: number[]): boolean {
    return winCombo.some((cell) => cell.every((num) => moves.includes(num)));
  }

  function isDraw() {
    const totalMoves = one.length + two.length;

    return allCells.length === totalMoves && !isWin(one) && !isWin(two);
  }

  const oneWin = isWin(one);
  const twoWin = isWin(two);

  function reset(): void {
    setOne([]);
    setTwo([]);
    setAllCells(["", "", "", "", "", "", "", "", ""]);
    setTurn(player.one);
    console.log(oneWin);
  }

  return (
    <GlobalContext.Provider
      value={{
        winCombo,
        player,
        turn,
        setTurn,
        setOne,
        setTwo,
        one,
        two,
        allCells,
        setAllCells,
        isDraw,
        oneWin,
        twoWin,
        reset,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
