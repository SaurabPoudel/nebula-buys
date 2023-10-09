'use client';

import { Session } from 'next-auth';

// import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthButton = ({ session }: { session: Session | null }) => {
  if (session) {
    return (
      <>
        {session?.user?.name}
        <br />
        <button onClick={() => signOut()}> Sign Out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default function NavMenu() {
  const { data: session } = useSession();
  return (
    <div>
      <AuthButton session={session} />
    </div>
  );
}
