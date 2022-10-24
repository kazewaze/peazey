import { useRouter } from 'next/router'
import Link from 'next/link'

import { useUser } from '@auth0/nextjs-auth0'

export default () => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  return <Link href="/api/auth/login">Login</Link>;
};
