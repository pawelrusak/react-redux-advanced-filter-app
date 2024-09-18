import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { User } from "@/features/users/users.types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
