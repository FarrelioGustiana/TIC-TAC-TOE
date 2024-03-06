import React, { useState } from "react";

const range = (x: number, y: number): number[] => {
  let result: number[] = [];
  for (let i: number = x; i <= y; i++) {
    result.push(i);
  }
  return result;
};

const Boards: React.FC = () => {
  const handleClick = (
    p: string,
    num: number,
    setSign: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setSign(p);
  };

  return (
    <div className="mt-2 grid grid-cols-3 items-center justify-center rounded-sm overflow-hidden">
      {range(1, 9).map((num) => {
        const [sign, setSign] = useState<string>("");
        return (
          <div
            key={num}
            className={`w-[100px] h-[100px]  ${
              num % 3 === 0 ? "border-r-none" : "border-r-white border-r-[4px]"
            } ${num >= 7 ? "border-b-none" : "border-b-white border-b-[4px]"} `}
          >
            <button
              onClick={() => handleClick("x", num, setSign)}
              className="hover:bg-blue-200 transition-all hover:opacity-30 w-full h-full "
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
