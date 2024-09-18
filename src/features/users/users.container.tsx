import { useGetUsersQuery } from "./users.api";
import { UsersTable } from "@/features/users/components";

export function UsersContainer() {
  const { data: users } = useGetUsersQuery();

  return (
    <main>
      <header>
        <h1>Users</h1>
      </header>

      <UsersTable users={users ?? []} />
    </main>
  );
}
