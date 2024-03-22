import { Board as BoardType } from "@/types";
import { Separator } from "./ui/separator";
import List from "./List";
import { Plus } from "lucide-react";
import { Lumiflex } from "uvcanvas";

type Props = {
  board: BoardType;
};

const Board = ({ board }: Props) => {
  return (
    <section className="w-full  relative h-full">
      
      <Lumiflex />

      <div className="absolute top-0 left-0 w-full">

        <div id="board-header" className="w-full h-20 flex items-center p-4 bg-muted">
          <h2 className="font-semibold text-xl">{board.title}</h2>
        </div>

        <Separator />

        <div
          id="board-content"
          className="flex gap-4 overflow-x-scroll p-4 w-full h-[calc(100vh-9rem)]"
        >
          {board.lists.map((list) => (
            <List key={`list-${list.id}`} list={list} boardName={board.title}/>
          ))}

          <div
            id="add-list"
            className="flex justify-between p-4 
        bg-primary h-fit rounded-lg text-primary-foreground 
        gap-2 min-w-56 cursor-pointer options-hover"
          >
            <h3 className="font-semibold">Añadir lista</h3>
            <Plus />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;
