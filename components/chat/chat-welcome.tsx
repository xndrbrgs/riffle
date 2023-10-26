import { Hash } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
}

export const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
        <div className="h-[75px] w-[75px] rounded-full bg-zinc-500 dark:bg-[#ff3b00]/70 flex items-center justify-center">
          <Hash className="h-8 w-8 text-white" />
        </div>
      )}

      <p className="text-xl md:text-3xl font-bold">
        {type === "channel" ? "Welcome to #" : ""}
        {name}
      </p>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {type === "channel"
          ? `This is the start of the #${name} channel`
          : `This is the start of your conversation with ${name}`}
      </p>
    </div>
  );
};
