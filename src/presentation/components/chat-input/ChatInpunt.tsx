import { FormEvent, useRef, useState } from "react";

interface Props {
  onSendMessage: (message: string) => void;
  placeholder: string;
  accept?: string;
}

export const ChatInput = ({ onSendMessage, placeholder, accept }: Props) => {
  const [message, setMessage] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>();

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message.trim().length === 0) return;

    onSendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-row items-center h-16 rounded-full  border bg-gray-900  w-full px-4"
    >
      <div className="mr-3">
        <button
          type="button"
          className="flex items-center justify-center text-gray-400 hover:text-gray-600"
          onClick={() => inputFileRef.current?.click()}
        >
          <i className="fa-sharp fa-light fa-paperclip-vertical"></i>
        </button>
        <input
          type="file"
          ref={inputFileRef}
          hidden
          accept={accept}
          onChange={(e) => setSelectedFile(e.target.files?.item(0))}
        />
      </div>

      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="message"
            className="flex w-full  bg-gray-900 rounded-full text-white focus:outline-none focus:border-gray-500 pl-4 h-10"
            placeholder={placeholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      {selectedFile && (
        <div className=" relative flex  h-[60px] w-[211px] cursor-pointer items-center space-x-2 rounded-md  px-4 py-3 hover:opacity-50">
          <div className="rounded bg-blue-500 px-[10px] py-2 ">
            <i className="fa-regular fa-file px-[2.5px]" style={{ fontSize: 20 }}></i>
          </div>

          <div className="text-pixelspace-gray-3 font-inter truncate text-sm font-medium leading-[21px]">
            <div className="truncate text-gray-400">{selectedFile.name}</div>
          </div>
        </div>
      )}
      <div className="ml-4">
        <button className="bg-red-500 size-8 rounded-full">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </form>
  );
};
