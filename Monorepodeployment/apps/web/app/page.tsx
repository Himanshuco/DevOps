import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <main>
      <h1>Welcome to Next.js!</h1>
      <p>User?: {JSON.stringify(user)}</p>
    </main>
  );
}