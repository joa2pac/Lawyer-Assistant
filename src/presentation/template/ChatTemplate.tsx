import { useState } from "react";
import { ChatInput, GptMessages, TypingLoader, UserMessages } from "../components";

interface Message {
  text: string;
  isGpt: boolean;
}

export const ChatTemplate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);

    setMessages((prev) => [...prev, { text: text, isGpt: false }]);

    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessages
            img="../../../../public/images/assistantImage2.png"
            text="Hola, en que puedo ayudarte hoy ?"
          />

          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessages key={index} text="Esto es de Openai" />
            ) : (
              <UserMessages key={index} text={message.text} />
            )
          )}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>
      <ChatInput onSendMessage={handlePost} placeholder="Hola mundo" />
    </div>
  );
};
