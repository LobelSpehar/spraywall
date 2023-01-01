export function RoutesPaging({
  page,
  setPage,
  length,
}: {
  page: number;
  setPage: Function;
  length: number;
}) {
  return (
    <div className='flex justify-center w-fit mx-auto rounded-full bg-indigo-100 text-indigo-500'>
      <button
        onClick={(e) => {
          setPage(page - 1);
        }}
        className='p-2'
        disabled={page === 0}
      >
        &#x2190;
      </button>

      <p className='p-2'> {page}</p>
      <button
        onClick={(e) => {
          setPage(page + 1);
        }}
        className='p-2'
        disabled={length < 10}
      >
        &#x2192;
      </button>
    </div>
  );
}
