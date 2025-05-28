// export function formatMessageTime(date) {
//   return new Date(date).toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//   });
// }

// Changes below
import dayjs from "dayjs";

export const formatMessageTime = (timestamp) => {
  return dayjs(timestamp).format("MMM D, YYYY h:mm A"); // e.g., May 28, 2025 1:05 PM
};
//Changes above