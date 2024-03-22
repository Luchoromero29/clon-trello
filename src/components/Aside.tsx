import BoardOptions from "./BoardOptions";
import BoardWrapper from "./BoardWrapper";
import { Avatar } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { KeyboardMusic, Plus, Ellipsis } from "lucide-react";

const Aside = () => {
  const name = "Luciano Romero";

  const boards = [
    { id: 1, title: "Tablero 1" },
    { id: 2, title: "Tablero 2" },
  ];

  return (
    <aside id="aside" className="bg-muted h-full">
      <div id="name" className="flex items-center pl-4 h-20">
        <Avatar>
          <div className="w-full h-full bg-foreground text-background flex items-center justify-center font-medium text-xl">
            {name[0].toUpperCase()}
          </div>
        </Avatar>

        <div className="p-4 felx-col ">
          <h2 className="text-lg font-bold">{name}</h2>
          <span className="text-xs italic">Gratis</span>
        </div>
      </div>

      <Separator />

      <div id="boards">
        <div id="title" className="p-4">
          <BoardWrapper id={`board-title`}>
            <div className="flex gap-2">
              <KeyboardMusic />
              <h2 className="font-medium">Tableros</h2>
            </div>
            <BoardOptions>
              <Plus size={16} />
            </BoardOptions>
          </BoardWrapper>
        </div>

        <div className="px-4">
          <Separator />
        </div>

        <div id="boards-container" className="flex flex-col py-4">
          {boards.map((el) => (
            <div key={el.id} className="px-4 py-1 hover:bg-blue-200 hover:font-semibold transition duration-200">
              <BoardWrapper  id={`board-${el.id}`}>
                <h3 className="">{el.title}</h3>
                <BoardOptions>
                  <Ellipsis size={16} />
                </BoardOptions>
              </BoardWrapper>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
