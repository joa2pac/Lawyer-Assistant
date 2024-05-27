import Markdown from "react-markdown";
import { FC } from "react";

interface Props {
  text: string;
  img?: string;
}

export const GptMessages: FC<Props> = ({ text, img }) => {
  return (
    <div className="col-start-1 col-end-9 rounded-lg">
      <div className="flex flex-row items-start">
        <img
          src={img}
          alt="assistant"
          className=" flex size-10 cursor-pointer items-center justify-center rounded-full hover:opacity-50"
        />
        <div className="relative ml-3 bg-gray-900 bg-opacity-25 pt-3 pb-2 px-4 shadow rounded-xl">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  );
};
