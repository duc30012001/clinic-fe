import { UpdateUserPayload } from "./updateUserPayload";

export interface CreateUserPayload extends UpdateUserPayload {
  password: string;
}
