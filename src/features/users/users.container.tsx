import React from "react";
import { useGetUsersQuery } from "@/features/users/users.api";
import { useAppSelector } from "@/store";
import { UsersTable, UsersSearchBox } from "@/features/users/components";
import { BASE_USER_KEY } from "@/features/users/users.constants";
import { selectFilteredUsers } from "@/features/users/users.selectors";

import type { UserBase } from "@/features/users/users.types";
import type { SearchBoxSearchByChangeEvent } from "@/features/users/components";

type SearchByKey = keyof UserBase;

const DEFAULT_SEARCH_BY: SearchByKey = BASE_USER_KEY.NAME;

export function UsersContainer() {
  const [searchBy, setSearchBy] =
    React.useState<SearchByKey>(DEFAULT_SEARCH_BY);
  const [search, setSearch] = React.useState<string>("");
  useGetUsersQuery();
  const users = useAppSelector(selectFilteredUsers(searchBy, search));

  const handleSearchByChange = (event: SearchBoxSearchByChangeEvent) => {
    setSearchBy(event.target.value as SearchByKey);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchResetClick = () => {
    setSearch("");
  };

  return (
    <main>
      <header>
        <h1>Users</h1>
      </header>

      <article>
        <UsersSearchBox
          searchByValue={searchBy}
          searchValue={search}
          onSearchResetClick={handleSearchResetClick}
          onSearchByChange={handleSearchByChange}
          onSearchChange={handleSearchChange}
          searchByDefaultValue={DEFAULT_SEARCH_BY}
        />
        <UsersTable users={users ?? []} />
      </article>
    </main>
  );
}
