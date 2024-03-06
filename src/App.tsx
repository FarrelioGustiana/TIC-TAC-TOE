import React from "react";
import Boards from "./components/Boards";
import GlobalProvider from "./global/GlobalProvider";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <div className="p-3 bg-slate-900 min-h-screen text-white">
        <main className="flex flex-col items-center gap-y-5">
          <h2 className="text-4xl font-extrabold tracking-wider">
            TIC TAC TOE GAME
          </h2>
          <Boards />
        </main>
      </div>
    </GlobalProvider>
  );
};

export default App;
