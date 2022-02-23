import { MetaPaginationType } from "./MetaPagination";

type MetaType = {
  pagination: MetaPaginationType;
};

export type PaginationResponseType = {
  data: any;
  meta: MetaType;
};
