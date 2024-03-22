import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

const BoardOptions = ({ children }: Props) => {
  return (
    <div
      className={cn(
        "invisible board-options",
        "cursor-pointer hover:bg-gray-200 p-1 rounded-sm transition duration-200 border border-transparent hover:border-gray-400"
      )}
    >
      {children}
    </div>
  );
};

export default BoardOptions;
