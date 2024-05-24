import { GptMessages, UserMessages } from "../../components";

const mensajes = [
  "Hola, necesito un análisis de este escrito.",
  "¿Podrías revisar este documento por favor?",
  "Me gustaría recibir feedback sobre este párrafo.",
  "¿Qué opinas de este artículo?",
  "Necesito ayuda para mejorar este texto.",
  "¿Puedes corregir los errores en este documento?",
  "¿Podrías sugerir mejoras para este escrito?",
  "Necesito una revisión rápida de este contenido.",
  "Por favor, revisa la gramática de este texto.",
  "¿Puedes darme tu opinión sobre este ensayo?",
  "Estoy buscando sugerencias para mejorar mi redacción.",
  "¿Podrías ayudarme a editar este manuscrito?",
  "Necesito una segunda opinión sobre este trabajo.",
  "¿Puedes revisar este informe antes de que lo envíe?",
  "Me gustaría que revisaras este capítulo.",
  "¿Puedes verificar la coherencia de este texto?",
  "Estoy buscando feedback sobre este correo electrónico.",
  "¿Podrías leer este resumen y darme tu opinión?",
  "Necesito sugerencias para reestructurar este artículo.",
  "¿Puedes ayudarme a pulir este contenido?",
  "Me gustaría que corrigieras este escrito.",
  "¿Podrías revisar este ensayo académico?",
  "Necesito que alguien revise este documento legal.",
  "¿Puedes sugerir cambios para mejorar este informe?",
  "Estoy buscando ayuda para editar mi libro.",
  "¿Podrías revisar la claridad de este texto?",
  "Necesito comentarios sobre este contenido.",
  "¿Puedes ayudarme a revisar esta carta?",
  "Me gustaría recibir tu opinión sobre este proyecto escrito.",
  "¿Podrías darme feedback sobre este artículo de blog?",
  "Necesito una revisión detallada de este texto.",
  "¿Puedes ayudarme a mejorar la estructura de este escrito?",
  "Me gustaría que revisaras la ortografía de este documento.",
  "¿Puedes sugerir mejoras estilísticas para este escrito?",
  "Necesito ayuda con la puntuación en este texto.",
  "¿Podrías revisar la consistencia de este ensayo?",
  "Estoy buscando comentarios sobre la claridad de este documento.",
  "¿Puedes ayudarme a reescribir esta sección?",
  "Me gustaría recibir tus sugerencias para este escrito.",
  "¿Podrías verificar la precisión de este informe?",
];

export const ConversationAssistantPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessages text="Hola, en que puedo ayudarte hoy ?" />

          {mensajes.map((mje) => (
            <UserMessages text={mje} />
          ))}
        </div>
      </div>
    </div>
  );
};
