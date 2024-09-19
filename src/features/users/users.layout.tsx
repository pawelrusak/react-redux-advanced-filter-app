import { EN } from "@/features/users/users.translations";

type UsersLayoutProps = {
  children: React.ReactNode;
};

export function UsersLayout(props: UsersLayoutProps) {
  return (
    <main>
      <header>
        <h1>{EN.USERS_LAYOUT.HEADING}</h1>
      </header>

      {props.children}
    </main>
  );
}
