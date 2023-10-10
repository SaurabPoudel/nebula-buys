'use client';

import { Session } from 'next-auth';

// import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const AuthButton = ({ session }: { session: Session | null }) => {
  if (session) {
    return (
      <div>
        <div>
          <Image
            className='rounded-full'
            src={session?.user?.image ?? ''}
            width={50}
            height={50}
            alt='Picture of the author'
          />
          <span className='text-[0.5rem] font-bold'>{session?.user?.name}</span>
        </div>
        <button onClick={() => signOut()}> Sign Out</button>
      </div>
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
    <nav className='flex w-[100vw]'>
      <AuthButton session={session} />
    </nav>
  );
}
