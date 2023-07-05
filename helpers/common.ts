import { Status } from "@/utils/enum";
import dayjs from "dayjs";
import { toast } from "react-toastify";

type TypeMessage = "success" | "info" | "warning" | "error";

export const showNotification = (type: TypeMessage, message: string) => {
  const options = {
    type,
  };
  toast(message, options);
};

export function formattedDate(date: any): string {
  const formatted = (date && dayjs(date).format("DD/MM/YYYY")) || "";
  return formatted;
}

export function getStatus(value: Status) {
  if (value === Status.ACTIVE) return "Kích hoạt";
  if (value === Status.PENDING) return "Chờ duyệt";
  if (value === Status.HIDDEN) return "Tạm ẩn";
}
