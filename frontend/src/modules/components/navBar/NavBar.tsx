import { useState } from 'react';
import { Link } from 'react-router-dom';

import { User } from 'firebase/auth';
import { useAuth } from 'modules/hooks';
import { MenuButton, MenuLinks } from 'modules/components';

export function NavBar({ user }: { user: User | null }) {
  const [menu, setMenu] = useState(false);
  const { onLogOut } = useAuth();

  return (
    <header className='text-gray-400 bg-gray-800 body-font fixed top-0 w-fit z-50'>
      <MenuButton menu={menu} setMenu={setMenu} />
      <div
        className={
          'container mx-auto h-screen mt-12 text-xl flex flex-col items-center duration-500 overflow-hidden ' +
          (menu ? 'w-40' : 'w-0')
        }
      >
        <MenuLinks setMenu={setMenu} />
        {user ? (
          <div className='relative top-20'>
            <p>{user ? user.displayName : ''}</p>

            <button
              onClick={(e) => onLogOut()}
              className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base'
            >
              Log Out
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-1'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </button>
          </div>
        ) : (
          <Link
            onClick={(e) => setMenu(false)}
            to={'/login'}
            className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 '
          >
            Log in
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-4 h-4 ml-1'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
}
