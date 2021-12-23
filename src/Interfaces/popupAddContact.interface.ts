import { Dispatch, ReactElement, SetStateAction } from "react";

export interface PopupProps {
  trigger: boolean;
  setTrigger: Dispatch<SetStateAction<boolean>>;
  children: ReactElement<any>;
}
