import { API_USERS_URL } from "./API_CONFIG";
import type { User } from "../interfaces/interface";

export const USERS = {
  getAll: async () => {
    const response = await fetch(API_USERS_URL);
    return response.json();
  },

  create: async (user: User) => {
    const response = await fetch(API_USERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return response.json();
  },

  update: async (id: string, user: Partial<User>) => {
    const response = await fetch(`${API_USERS_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return response.json();
  },

  remove: async (id: string) => {
    return fetch(`${API_USERS_URL}/${id}`, {
      method: "DELETE",
    });
  },
};