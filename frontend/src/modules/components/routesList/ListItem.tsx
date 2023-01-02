import { Link } from 'react-router-dom';

import { RouteType } from 'modules/types';

export function ListItem({
  route,
  gradesRange,
}: {
  route: RouteType;
  gradesRange: Array<string>;
}) {
  return (
    <>
      <li
        className='my-1 w-full backdrop-blur-lg hover:backdrop-blur-xl border border-gray-200 p-2 rounded-lg hover:border-gray-400'
        style={{
          background: 'hsla(0, 0%, 100%, 0.6)',
        }}
      >
        <Link to={`/route/${route.id}`}>
          <div className='flex justify-between'>
            <div className='basis-4/5'>
              <h2 className='text-lg text-gray-900 break-all whitespace-break font-medium title-font'>
                {route.name.substring(0, 26) +
                  (route.name.length > 26 ? '...' : '')}
              </h2>
              <p className='leading-relaxed text-base'>{route.setter}</p>
            </div>
            <div className='w-10 h-10 flex-none inline-flex items-center justify-center text-base rounded-full bg-indigo-100 text-indigo-500'>
              {gradesRange[route.grade]}
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}
