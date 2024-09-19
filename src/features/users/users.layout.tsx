type UsersLayoutProps = {
  children: React.ReactNode;
};

export function UsersLayout(props: UsersLayoutProps) {
  return (
    <main>
      <header>
        <h1>Users</h1>
      </header>

      {props.children}
    </main>
  );
}
