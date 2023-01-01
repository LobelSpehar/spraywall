import { auth } from 'firebaseInit';
import { useFirestore } from 'modules/hooks';
import { RouteType } from 'modules/types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ListItem({
  route,
  gradesRange,
  refreshList,
}: {
  route: RouteType;
  gradesRange: Array<string>;
  refreshList: Function;
}) {
  const [modalState, setModalState] = useState(false);
  const { deleteRoute } = useFirestore();
  const user = auth.currentUser?.uid;
  return (
    <>
      <li
        className='my-1 w-full backdrop-blur-lg hover:backdrop-blur-xl border border-gray-200 p-2 rounded-lg hover:border-gray-400 '
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
              <span className='leading-relaxed text-base'>{route.setter}</span>
            </div>
            <div className='w-10 h-10 flex-none inline-flex items-center justify-center text-base rounded-full bg-indigo-100 text-indigo-500'>
              {gradesRange[route.grade]}
            </div>
          </div>
        </Link>
        {route.user_uid === user ? (
          <button
            onClick={(e) => setModalState(true)}
            className='border rounded-full px-4 border-gray-400 hover:border-gray-600'
          >
            Delete
          </button>
        ) : null}
      </li>
      {modalState ? (
        <div className='fixed top-0 left-0 h-screen w-screen z-50 bg-gray-700 flex justify-center pt-20'>
          <div className='flex flex-col p-4 border-b rounded-t dark:border-gray-600'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
              Are you sure you want to delete {route.name}?
            </h3>

            <div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
              <button
                onClick={(e) => deleteRoute(route.id).then(() => refreshList())}
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Yes, delete
              </button>
              <button
                onClick={(e) => setModalState(false)}
                type='button'
                className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
              >
                No, go back
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
