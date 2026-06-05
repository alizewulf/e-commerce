import { useEffect, useState } from "react";
import type { User } from "../interfaces/interface";
import { USERS } from '../services/auth/getUsers'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsers() {
      const data = await USERS.getAll();
      setUsers(data);
    }

    getUsers();
  }, []);

  return users;
}