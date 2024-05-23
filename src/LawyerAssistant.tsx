import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/router/router";

export const LawyerAssistant = () => {
  return <RouterProvider router={router} />;
};
