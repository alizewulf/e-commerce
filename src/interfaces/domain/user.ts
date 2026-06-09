export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  firstname?: string;
  lastname?: string;
  address?: string;
}
