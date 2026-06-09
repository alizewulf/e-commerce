import type { Dispatch, SetStateAction } from "react";
import type { User } from "../domain/user";

export type State = {
  lang: string;
  isAuth: boolean;
  user: User | null;  wishlist: number[];};

export interface StateProps {
  state: State;
  setState?: Dispatch<SetStateAction<State>>;
}

export type PropsSVG = Partial<{
  className: string;
  color: string;
  color2: string;
  stroke: string;
}>;

export type DropdownType = "language" | "profile" | null;

export interface Props extends StateProps {
  dropdown: DropdownType;
  setDropdown: Dispatch<SetStateAction<DropdownType>>;
}
