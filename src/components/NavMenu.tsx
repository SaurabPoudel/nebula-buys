'use client';
import { Session } from 'next-auth';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

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
    <nav className='flex w-full pt-4'>
      <Link href='/'>
        <div className='right-2 flex gap-3 pl-6 pr-[60vw] '>
          <Image
            src='/nebula.jpg'
            alt='nebula-buys'
            width={40}
            height={10}
            className='rounded-lg'
          />
          <span className=''>Nebula Buys</span>
        </div>
      </Link>
      <AiOutlineShoppingCart className='h-10 w-20 cursor-pointer rounded-xl pr-4 hover:bg-gray-200 hover:text-gray-800' />
      <AuthButton session={session} />
    </nav>
  );
}
