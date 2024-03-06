import React from "react";
import Boards from "./components/Boards";
import { GlobalContextProps, useGlobal } from "./global/GlobalProvider";

const App: React.FC = () => {
  const { isDraw, oneWin, twoWin } = useGlobal() as GlobalContextProps;

  return (
    <div className="p-3 bg-slate-900 min-h-screen text-white">
      <main className="flex flex-col items-center gap-y-10 min-h-full justify-center">
        <h2 className="text-4xl font-extrabold tracking-wider">
          TIC TAC TOE GAME
        </h2>
        <Boards />
        {isDraw() && (
          <p className="text-xl tracking-widest font-semibold font-mono">
            IS A DRAW!
          </p>
        )}
        {oneWin && (
          <p className="text-xl tracking-widest font-semibold font-mono">
            Player one "X" win
          </p>
        )}
        {twoWin && (
          <p className="text-xl tracking-widest font-semibold font-mono">
            Player Two win "O"
          </p>
        )}
      </main>
    </div>
  );
};

export default App;
