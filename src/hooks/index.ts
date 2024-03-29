import { appointSave } from "@/server/sheet";
import { TCAppointment } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const useCreateAppointment = () => {
  return useMutation({
    mutationFn: async (data: TCAppointment) => {
      return (await appointSave(data)) as string;
    },
    mutationKey: ["appointment", "post"],
  });
};
