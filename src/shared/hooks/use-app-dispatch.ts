import { useDispatch } from "react-redux";
// eslint-disable-next-line boundaries/entry-point,boundaries/element-types
import { AppDispatch } from "@/app/providers/store-provider";

export const useAppDispatch = () => useDispatch<AppDispatch>();
