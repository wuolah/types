import { MetaPaginationType } from "..";

type MetaType = {
  pagination: MetaPaginationType;
}

export type PaginationResponseType = {
  data: any;
  meta: MetaType;
};