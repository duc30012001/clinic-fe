export interface Pagination {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface ListResponse<T> {
  data: Array<T>;
  pagination: Pagination;
}

export interface ErrorResponse {
  message: string;
}

export interface SuccessResponse {
  message: string;
}

export interface CommonAttribute {
  id: string;
  date_created?: Date;
  date_modified?: Date;
}