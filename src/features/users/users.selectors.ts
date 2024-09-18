import { createSelector } from "@reduxjs/toolkit";
import { usersApi } from "@/features/users/users.api";
import { UserBase } from "@/features/users/users.types";

const selectUsersResult = usersApi.endpoints.getUsers.select();

type SearchByField = keyof UserBase;

export const selectFilteredUsers = (
  searchByField: SearchByField,
  searchValue: string
) =>
  createSelector(selectUsersResult, (usersResult) => {
    const { data: users } = usersResult;
    return (
      users?.filter((user) =>
        user[searchByField]
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      ) || []
    );
  });
