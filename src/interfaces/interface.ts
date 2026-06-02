export type State = {
  lang: string;
  isAuth: boolean;
  user: User | null;
};

export interface StateProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

export type PropsSVG = {
    className?: string,
    color?:string
}

export type DropdownType = "language" | "profile" | null;

export interface Props extends StateProps {
  dropdown: "language" | "profile" | null;
  setDropdown: React.Dispatch<
    React.SetStateAction<"language" | "profile" | null>
  >;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}