import { toast } from "react-toastify";

type TypeMessage = "success" | "info" | "warning" | "error";

export const showNotification = (type: TypeMessage, message: string) => {
  const options = {
    type,
  };
  toast(message, options);
};
