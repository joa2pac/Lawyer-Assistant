import { ChatInput, GptMessages, TypingLoader, UserMessages } from "../../components";

export const ConversationAssistantPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessages
            img="../../../../public/images/assistantImage2.png"
            text="Hola, en que puedo ayudarte hoy ?"
          />

          <UserMessages text="Quiero que me ayudes con esta demanda" />

          <TypingLoader className="fade-in" />
        </div>
      </div>
      <ChatInput onSendMessage={(message) => console.log(message)} placeholder="Hola mundo" />
    </div>
  );
};
