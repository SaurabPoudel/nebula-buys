type Props = {
  params: {
    collection: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props) {
  return {
    title: params.collection,
    description: `Search for ${params.collection}`,
  };
}

export default function Collection({ searchParams }: Props) {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold'>Collection</h1>
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
