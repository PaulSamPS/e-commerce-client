import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const axiosErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (
      axiosError.response &&
      axiosError.response.data &&
      axiosError.response.data.message
    ) {
      return axiosError.response.data.message;
    }
  }
  return "Произошла ошибка";
};
