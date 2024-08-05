import { User } from "./User";
export interface UserAuthenticationResponse {
  User?: User;
  Password: boolean;
  Email: boolean;
}
