import React, { useState } from "react";
import { GlobalContextProps, useGlobal } from "../global/GlobalProvider";

const range = (x: number, y: number): number[] => {
  let result: number[] = [];
  for (let i: number = x; i <= y; i++) {
    result.push(i);
  }
  return result;
};

const Boards: React.FC = () => {
  const { turn, setTurn, player } = useGlobal() as GlobalContextProps;
  return (
    <div className="mt-2 grid grid-cols-3 items-center justify-center rounded-sm overflow-hidden">
      {range(1, 9).map((num) => {
        const [clicked, setClicked] = useState<boolean>(false);
        const [sign, setSign] = useState<string>("");
        return (
          <div
            key={num}
            className={`w-[100px] h-[100px]  ${
              num % 3 === 0 ? "border-r-none" : "border-r-white border-r-[4px]"
            } ${num >= 7 ? "border-b-none" : "border-b-white border-b-[4px]"} `}
          >
            <button
              disabled={clicked}
              onClick={() => {
                setSign(turn);
                setTurn(() => {
                  return turn === player.one ? player.two : player.one;
                });
                setClicked(true);
              }}
              className={`transition-all w-full h-full text-6xl font-bold ${
                clicked ? "" : "hover:bg-blue-200 hover:opacity-30"
              }`}
            >
              {sign}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Boards;
