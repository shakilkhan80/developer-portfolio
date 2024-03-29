"use client";

import { Toaster } from "sonner";

export const ToastProvider = () => {
  return (
    <Toaster
      richColors
      duration={5 * 1000}
      closeButton={true}
      visibleToasts={5}
      theme={"light"}
    />
  );
};