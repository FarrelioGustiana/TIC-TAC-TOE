import React, { useState } from "react";
import { GlobalContextProps, useGlobal } from "../global/GlobalProvider";

const Boards: React.FC = () => {
  const { allCells, turn, setTurn, player, setOne, setTwo, oneWin, twoWin } =
    useGlobal() as GlobalContextProps;
  return (
    <div className="mt-2 grid grid-cols-3 items-center justify-center rounded-sm overflow-hidden">
      {allCells.map((num) => {
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
              disabled={clicked || oneWin || twoWin}
              onClick={() => {
                setSign(turn);
                if (turn === player.one) {
                  setOne((prev) => [...prev, num]);
                } else {
                  setTwo((prev) => [...prev, num]);
                }
                setTurn(() => {
                  return turn === player.one ? player.two : player.one;
                });
                setClicked(true);
              }}
              className={`transition-all w-full h-full text-6xl font-bold ${
                clicked || oneWin || twoWin
                  ? ""
                  : "hover:bg-blue-200 hover:opacity-30"
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
