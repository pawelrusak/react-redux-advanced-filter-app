import { useGetUsersQuery } from "@/features/users/users.api";
import { useAppSelector } from "@/store";

import { selectFilteredUsers } from "@/features/users/users.selectors";

import type { UseGetUsersHookContract } from "@/features/users/users.types";

const useGetUsersFacade: UseGetUsersHookContract = function (searchBy, search) {
  const { isLoading, refetch, isError } = useGetUsersQuery();
  const users = useAppSelector(selectFilteredUsers(searchBy, search));

  return { isLoading, users, refetch, isError };
};

export { useGetUsersFacade as useGetUsers };
