// import { useRouter } from 'next/router'
// import Link from 'next/link'

import { useUser } from '@auth0/nextjs-auth0'

import Layout from '../components/_common/layout'

export default () => {
//  const router = useRouter();
  const { user, error, isLoading } = useUser();

  // Replace with loading component later.
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <Layout loggedIn />
    );
  }

      return (
        <Layout />
      );
};
