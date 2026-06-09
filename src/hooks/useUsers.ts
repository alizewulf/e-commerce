import { useEffect, useState } from "react";
import type { User } from "../interfaces/domain/user";
import { USERS } from '../services/auth/getUsers'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const data = await USERS.getAll();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return users;
}