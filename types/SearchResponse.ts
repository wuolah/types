import { MetaPaginationType } from "./MetaPagination";

export type SearchReponseType<T> = {
  items: T[];
  metaPagination: MetaPaginationType;
};
