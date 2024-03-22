import { List as ListType, Task as TaskType } from "@/types";
import { Separator } from "./ui/separator";
import BoardWrapper from "./BoardWrapper";
import BoardOptions from "./BoardOptions";
import { Plus } from "lucide-react";
import Task from "./Task";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";


type Props = {
    list: ListType
    boardName: string
}

const List = ( { list, boardName }: Props) => {

    const [toDoList,toDos] = useDragAndDrop<HTMLUListElement, TaskType>(
    list.tasks, 
    {group: boardName,
    plugins: [animations()]
    }
    )


  return (
    <div
      className="p-4 bg-primary h-fit rounded-lg text-primary-foreground flex flex-col gap-2 min-w-56 shadow-xl"
    >
      <h3 className="font-semibold">{list.title}</h3>
      <Separator />
      <ul
        ref={toDoList}
        id={`list-${list.id}-task`}
        className="flex flex-col gap-3 items-center py-1"
      >
        {toDos.map((task) => (
            <Task key={task.id} task={task}/>
        ))}
      </ul>

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
