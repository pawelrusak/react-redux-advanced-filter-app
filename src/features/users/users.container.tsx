import React from "react";
import { useGetUsersQuery } from "./users.api";
import { UsersTable, UsersSearchBox } from "@/features/users/components";

import { BASE_USER_KEY } from "@/features/users/users.constants";

import type { UserBase } from "@/features/users/users.types";
import type { SearchBoxSearchByChangeEvent } from "@/features/users/components";

type SearchByKey = keyof UserBase;

const DEFAULT_SEARCH_BY: SearchByKey = BASE_USER_KEY.NAME;

export function UsersContainer() {
  const { data: users } = useGetUsersQuery();

  const [searchBy, setSearchBy] = React.useState<string>(DEFAULT_SEARCH_BY);
  const [search, setSearch] = React.useState<string>("");

  const handleSearchResetClick = () => {
    setSearch("");
  };

  const handleSearchByChange = (event: SearchBoxSearchByChangeEvent) => {
    setSearchBy(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <main>
      <header>
        <h1>Users</h1>
      </header>

      <article>
        setSearchBy
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
