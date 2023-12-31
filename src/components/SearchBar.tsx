'use client';

import { FaMagnifyingGlass as MagnifyingGlassIcon } from 'react-icons/fa6';
import { createUrl } from '@/utils';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/search', newParams));
  }

  return (
    <form
      onSubmit={onSubmit}
      className='w-max-[550px] relative w-full lg:w-80 xl:w-[1080px]'
    >
      <input
        key={searchParams?.get('q')}
        type='text'
        name='search'
        placeholder='Search for products...'
        autoComplete='off'
        defaultValue={searchParams?.get('q') || ''}
        className='w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400'
      />
      <div className='absolute right-0 top-0 mr-3 flex h-full items-center'>
        <MagnifyingGlassIcon className='h-4' />
      </div>
    </form>
  );
}
