'use client';
import { Session } from 'next-auth';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import SearchBar from '@/components/SearchBar';

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
    <div className='shrink-0 sm:text-xs'>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default function NavMenu() {
  const { data: session } = useSession();
  return (
    <nav className='flex w-full items-center pt-2'>
      <div className='right-2 flex items-center gap-3 pl-6 pr-20'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/nebula.jpg'
            alt='nebula-buys'
            width={40}
            height={10}
            className='rounded-lg'
          />
          <span className='ml-2'>Nebula Buys</span>
        </Link>
      </div>
      <ul className='flex gap-3 pr-3 pt-2 text-[0.8rem]'>
        <li>
          <Link href='/search'>All</Link>
        </li>
        <li>
          <Link href='/search/electronics'>Electronics</Link>
        </li>
        <li>
          <Link href='/search/clothing'>Clothing</Link>
        </li>
      </ul>
      <SearchBar />
      <div className='flex-grow' />
      <AiOutlineShoppingCart className='h-10 w-20 shrink-0 cursor-pointer rounded-xl pr-4  sm:pr-2' />
      <AuthButton session={session} />
    </nav>
  );
}
