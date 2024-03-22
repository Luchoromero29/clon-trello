import Aside from "./components/Aside";
import Board from "./components/Board";
import Header from "./components/Header";
import { Separator } from "./components/ui/separator";

function App() {
  const board = {
    id: "1",
    title: "Tablero 1",
    lists: [
      {
        id: "1",
        title: "Lista 1",
        tasks: [
          { id: "1", title: "Tarea 1" },
          { id: "2", title: "Tarea 2" },
          { id: "3", title: "Tarea 3" },
        ],
      },
      {
        id: "2",
        title: "Lista 2",
        tasks: [
          { id: "4", title: "Tarea 4" },
          { id: "5", title: "Tarea 5" },
          { id: "6", title: "Tarea 6" },
        ],
      },
    ],
  };

  return (
    <>
      <div id="header" className="w-full">
        <Header />
      </div>

      <main className="flex h-screen w-full">
        <div className="w-1/3 max-w-72">
          <Aside />
        </div>
        <Separator orientation="vertical" />

        <div id="content" className="w-2/3">
          <Board board={board} />
        </div>
      </main>
    </>
  );
}

export default App;
