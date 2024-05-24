import { GptMessages, UserMessages } from "../../components";

export const ConversationAssistantPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessages text="Hola, en que puedo ayudarte hoy ?" />

          <UserMessages text="Hola, necesito un analisis de este escrito" />
        </div>
      </div>
    </div>
  );
};
