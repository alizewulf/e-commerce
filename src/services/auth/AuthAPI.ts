import { API_USERS_URL } from "../API_CONFIG";
import type { User } from "../../interfaces/interface";

export const AUTH_API = {
    login: async (email: string, password: string) => {
    const res = await fetch(API_USERS_URL);
    const users: User[] = await res.json();

    const foundUser = users.find(
        u => u.email === email && u.password === password
    );

    return foundUser;
    },

  register: async (user: User) => {
    const res = await fetch(API_USERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return res.json();
  },
};
