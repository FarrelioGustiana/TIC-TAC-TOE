import React from "react";

function range(x: number, y: number): number[] {
  let result: number[] = [];
  for (let i: number = x; i <= y; i++) {
    result.push(i);
  }
  return result;
}

const Boards: React.FC = () => {
  return (
    <div className="mt-2 grid grid-cols-3 items-center justify-center rounded-sm overflow-hidden">
      {range(1, 9).map((num) => (
        <button
          disabled
          key={num}
          className={`w-[100px] h-[100px]  ${
            num % 3 === 0 ? "border-r-none" : "border-r-white border-r-[4px]"
          } ${
            num >= 7 ? "border-b-none" : "border-b-white border-b-[4px]"
          } cursor-pointer hover:bg-blue-200 transition-all hover:opacity-50`}
        ></button>
      ))}
    </div>
  );
};

export default Boards;
