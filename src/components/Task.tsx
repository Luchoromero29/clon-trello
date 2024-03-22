import { Task as TaskType } from "@/types";
import BoardWrapper from "./BoardWrapper";
import BoardOptions from "./BoardOptions";
import { Ellipsis } from "lucide-react";

type Props = {
  task: TaskType;
};

const Task = ({ task }: Props) => {
  return (
    <div
      className="p-2 bg-muted rounded-md text-foreground w-full"
    >
        <BoardWrapper id={task.id}>
            {task.title}
            <BoardOptions>
                <Ellipsis size={16}/>
            </BoardOptions>
        </BoardWrapper>
    </div>
  );
};

export default Task;
