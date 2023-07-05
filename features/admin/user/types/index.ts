export * from "./createUserPayload";
export * from "./getListUserParams";
export * from "./updateUserPayload";

export interface User {
  id: string;
  full_name?: string;
  email: string;
  phone_number?: string | null;
  avatar_url?: string | null;
  status?: number;
  user_creator?: string | null;
  date_created?: Date;
  date_modified?: Date;
}

export interface UserList {
  dataSource: Array<User>;
}

export interface UserListMeta {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  page: number;
  pageCount: number;
  take: number;
}
