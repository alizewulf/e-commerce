export interface State {
  lang: string;
  isAuth: boolean,
}

export interface StateProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

export type PropsSVG = {
    className?: string,
    color?:string
}