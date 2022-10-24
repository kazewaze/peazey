// import { useRouter } from 'next/router'
import Link from 'next/link'

import { useUser } from '@auth0/nextjs-auth0'

// import Layout from '../components/_common/layout'

export default () => {
//  const router = useRouter();
  const { user, error, isLoading } = useUser();

  // Replace with loading component later.
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      // <Layout loggedIn>
      //   Logged In User Stuff...
      // </Layout>
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Link href="/api/auth/logout">Logout</Link>;
      </div>
    );
  }

      // <Layout>
      //   Regular Home page stuff before logging in...
      // </Layout>
      return <Link href="/api/auth/login">Login</Link>;
};
