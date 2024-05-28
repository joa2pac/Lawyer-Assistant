/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { ChatInput, GptMessages, TypingLoader, UserMessages } from "../../components";
import { createThreadUseCase, postQuestionUseCase } from "../../../core/use-cases";

interface Messages {
  text: string;
  isGPT: boolean;
}

export const ConversationAssistantPage = () => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [threadId, setThreadId] = useState<string>();

  //Obtener el thread, y sino existe, crearlo
  useEffect(() => {
    const threadId = localStorage.getItem("threadId");
    if (threadId) {
      setThreadId(threadId);
    } else {
      createThreadUseCase().then((id) => {
        setThreadId(id);
        localStorage.setItem("threadId", id);
      });
    }
  }, []);

  const handlePost = async (text: string) => {
    if (!threadId) return;

    setIsLoading(true);
    setMessages((prev) => [...prev, { text: text, isGPT: false }]);

    try {
      const replies = await postQuestionUseCase(threadId, text);

      // Obtener los mensajes existentes
      setMessages((prev) => {
        const existingMessages = prev.map((message) => message.text);

        // Filtrar solo los mensajes nuevos que no están en el estado actual
        const newMessages = replies.flatMap((reply) =>
          reply.content
            .filter((message) => !existingMessages.includes(message))
            .map((message) => ({
              text: message,
              isGPT: reply.role === "assistant",
            }))
        );

        return [...prev, ...newMessages];
      });
    } catch (error) {
      console.error("Error posting question:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      {messages.length !== 0 ? (
        <div className="chat-messages">
          <div className="grid grid-cols-12 gap-y-2">
            {messages.map((message, index) =>
              message.isGPT ? (
                <GptMessages key={index} text={message.text} />
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
      ) : (
        <div className="flex flex-col items-center  justify-center h-full overflow-x-auto mb-4 overflow-y-auto">
          <img
            src="../../../../public/images/assistantImage2.png"
            alt="assistant"
            className=" flex size-60  items-center justify-center rounded-full <"
          />
          <h1 className="font-bold text-lg lg:text-2xl mt-5 bg-gray-200 whitespace-nowrap from-white via-white/50 bg-clip-text text-transparent z-10">
            Hola, soy el Dr.Joaquin,
          </h1>
          <h2 className="font-bold text-lg lg:text-xl bg-gray-300 whitespace-nowrap from-white via-white/50 bg-clip-text text-transparent z-10">
            estoy aqui para ayudarte en derecho contractual.
          </h2>
        </div>
      )}
      <ChatInput onSendMessage={handlePost} placeholder="Escriba aqui su consulta..." />
    </div>
  );
};
