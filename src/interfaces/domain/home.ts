import type { Product } from "./product";
import type { State } from "../app/state";

export type HomePageProps = {
  products?: Product[];
  state: State;
};

export type CardData = {
  title: string;
  description: string;
  image: string;
  alt: string;
  buttonLabel: string;
};
