import React from "react";

import {
  UsersTable,
  UsersSearchBox,
  SkeletonUsersTable,
  FetchUsesAlert,
  EmptyUsersState,
} from "@/features/users/components";
import { normalizeString } from "@/shared/utils";
import { BASE_USER_KEY } from "@/features/users/users.constants";
import { useGetUsers } from "@/features/users/users.hooks";
import { UsersLayout } from "@/features/users/users.layout";

import type { UserBase } from "@/features/users/users.types";
import type { SearchBoxSearchByChangeEvent } from "@/features/users/components";

type SearchByKey = keyof UserBase;

const DEFAULT_SEARCH_BY: SearchByKey = BASE_USER_KEY.NAME;

export function UsersContainer() {
  const [searchBy, setSearchBy] =
    React.useState<SearchByKey>(DEFAULT_SEARCH_BY);
  const [search, setSearch] = React.useState<string>("");

  const { isLoading, users, refetch, isError } = useGetUsers(searchBy, search);

  const hasNoUsersMeetingCriteria = React.useMemo(() => {
    return normalizeString(search).length !== 0 && users.length === 0;
  }, [search, users.length]);

  const handleSearchByChange = (event: SearchBoxSearchByChangeEvent) => {
    setSearchBy(event.target.value as SearchByKey);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchResetClick = () => {
    setSearch("");
  };

  const handleRefreshClick = () => {
    refetch();
  };

  if (isError) {
    return (
      <UsersLayout>
        <FetchUsesAlert onRefreshClick={handleRefreshClick} />
      </UsersLayout>
    );
  }

  return (
    <UsersLayout>
      <article>
        <UsersSearchBox
          searchByValue={searchBy}
          searchValue={search}
          onSearchResetClick={handleSearchResetClick}
          onSearchByChange={handleSearchByChange}
          onSearchChange={handleSearchChange}
          searchByDefaultValue={DEFAULT_SEARCH_BY}
        />
        {isLoading ? (
          <SkeletonUsersTable highlightColumn={searchBy} />
        ) : hasNoUsersMeetingCriteria ? (
          <EmptyUsersState onSearchResetClick={handleSearchResetClick} />
        ) : (
          <UsersTable users={users ?? []} highlightColumn={searchBy} />
        )}
      </article>
    </UsersLayout>
  );
}
