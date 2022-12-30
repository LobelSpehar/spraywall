import { TableHead } from 'modules/components/home/TableHead';

export function RoutesList({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='max-w-[80%] mx-auto'>
              <TableHead />
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
