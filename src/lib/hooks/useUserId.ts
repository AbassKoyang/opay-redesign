import { nanoid } from "nanoid";
import { useState } from "react";

export function useUserId() {
  const [userId] = useState(() => {
    const stored = localStorage.getItem("userId");
    if (stored) return stored;
    const id = nanoid();
    localStorage.setItem("userId", id);
    return id;
  });

  return userId;
}
