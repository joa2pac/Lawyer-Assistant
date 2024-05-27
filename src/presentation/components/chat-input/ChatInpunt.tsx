import { FormEvent, useState } from "react";

interface Props {
  onSendMessage: (message: string) => void;
  placeholder: string;
}

export const ChatInput = ({ onSendMessage, placeholder }: Props) => {
  const [message, setMessage] = useState("");

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
      <div className="ml-4">
        <button className="bg-red-500 size-8 rounded-full">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </form>
  );
};
