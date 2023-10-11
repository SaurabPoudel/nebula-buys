export const metadata = {
  title: 'Search',
  description: 'Search for products',
};

export default function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold'>Search</h1>
      <p className='mt-3 text-2xl'>
        {searchParams ? (
          <code>{JSON.stringify(searchParams)}</code>
        ) : (
          'No search params'
        )}
      </p>
    </div>
  );
}
