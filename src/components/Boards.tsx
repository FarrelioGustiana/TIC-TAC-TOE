import React from "react";
import { GlobalContextProps, useGlobal } from "../global/GlobalProvider";

const Boards: React.FC = () => {
  const {
    allCells,
    turn,
    setTurn,
    player,
    setOne,
    setTwo,
    oneWin,
    twoWin,
    setAllCells,
  } = useGlobal() as GlobalContextProps;
  return (
    <div className="mt-2 grid grid-cols-3 items-center justify-center rounded-sm overflow-hidden">
      {allCells.map((mark, idx) => {
        const num = idx + 1;
        const clicked = !allCells[idx] ? false : true;
        return (
          <div
            key={idx}
            className={`w-[100px] h-[100px]  ${
              num % 3 === 0 ? "border-r-none" : "border-r-white border-r-[4px]"
            } ${num >= 7 ? "border-b-none" : "border-b-white border-b-[4px]"} `}
          >
            <button
              disabled={clicked || oneWin || twoWin}
              onClick={() => {
                setAllCells((array) => {
                  array[idx] = turn;
                  return array;
                });
                if (turn === player.one) {
                  setOne((prev) => [...prev, num]);
                } else {
                  setTwo((prev) => [...prev, num]);
                }
                setTurn(() => {
                  return turn === player.one ? player.two : player.one;
                });
              }}
              className={`transition-all w-full h-full text-6xl font-bold ${
                clicked || oneWin || twoWin
                  ? ""
                  : "hover:bg-blue-200 hover:opacity-30"
              }`}
            >
              {mark}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Boards;
