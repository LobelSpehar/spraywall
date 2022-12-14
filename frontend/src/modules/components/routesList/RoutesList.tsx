import { RouteType } from 'modules/types';

import { ListItem } from 'modules/components';

export function RoutesList({
  routes,
  gradesRange,
}: {
  routes: Array<RouteType>;
  gradesRange: Array<string>;
}) {
  return (
    <ul className='w-full max-h-[70vh] justify-center overflow-x-hidden overflow-y-auto'>
      {routes.length ? (
        routes.map((route: RouteType) => (
          <ListItem
            key={route.id}
            route={route}
            gradesRange={gradesRange}
          ></ListItem>
        ))
      ) : (
        <li
          className='m-2 backdrop-blur-lg hover:backdrop-blur-xl border border-gray-200 p-4 rounded-lg hover:border-gray-400 '
          style={{
            background: 'hsla(0, 0%, 100%, 0.6)',
          }}
        >
          <h2 className='text-lg text-gray-900 break-all whitespace-break font-medium title-font mb-2'>
            No results
          </h2>
        </li>
      )}
    </ul>
  );
}
