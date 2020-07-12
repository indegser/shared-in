import { useForm } from "react-hook-form";

type FormData = {
  url: string;
  company?: string;
  team?: string;
};

export const useShareForm = (defaultValues: Omit<FormData, "url">) => {
  return useForm<FormData>({ defaultValues });
};
