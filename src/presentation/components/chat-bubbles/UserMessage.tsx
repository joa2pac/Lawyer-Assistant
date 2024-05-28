import Markdown from "react-markdown";
import { FC } from "react";

interface Props {
  text: string;
}

export const UserMessages: FC<Props> = ({ text }) => {
  return (
    <div className="col-start-1 col-end-13 rounded-lg mr-2">
      <div className="flex  items-start justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 flex-shrink-0">
          F
        </div>
        <div className="relative mr-3 text-sm bg-gray-500 py-2 px-4 shadow rounded-xl">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  );
};
