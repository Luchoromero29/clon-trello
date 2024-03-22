import { List as ListType } from "@/types";
import { Separator } from "./ui/separator";
import BoardWrapper from "./BoardWrapper";
import BoardOptions from "./BoardOptions";
import { Plus } from "lucide-react";

type Props = {
    list: ListType
}

const List = ( { list }: Props) => {
  return (
    <div
      className="p-4 bg-primary h-fit rounded-lg text-primary-foreground flex flex-col gap-2 min-w-56"
    >
      <h3 className="font-semibold">{list.title}</h3>
      <Separator />
      <div
        id={`list-${list.id}-task`}
        className="flex flex-col gap-3 items-center py-1"
      >
        {list.tasks.map((task) => (
          <div
            key={task.id}
            className="p-2 bg-muted rounded-md text-foreground w-full"
          >
            {task.title}
          </div>
        ))}
      </div>

      <div className="flex w-full  transition duration-200  px-2 py-1 rounded-md options-hover">
        <BoardWrapper id={`options-list-${list.id}`}>
          <h4>Añadir tarea</h4>
          <BoardOptions>
            <Plus />
          </BoardOptions>
        </BoardWrapper>
      </div>
    </div>
  );
};

export default List;
