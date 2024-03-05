import React from "react";
import Boards from "./components/Boards";

const App: React.FC = () => {
  return (
    <div className="p-3 bg-slate-900 min-h-screen text-white">
      <main className="flex flex-col items-center gap-y-5">
        <h2 className="text-4xl font-extrabold tracking-wider">
          TIC TAC TOE GAME
        </h2>
        <Boards />
      </main>
    </div>
  );
};

export default App;
