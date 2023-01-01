import { Link } from 'react-router-dom';

import { useAuth } from 'modules/hooks';
import { User } from 'firebase/auth';
import { useState } from 'react';

export function NavBar({ user }: { user: User | null }) {
  const [menu, setMenu] = useState(false);
  const { onLogOut } = useAuth();

  return (
    <header className='text-gray-400 bg-gray-900 body-font fixed top-0 w-fit z-50'>
      <button onClick={(e) => setMenu(!menu)} className='fixed p-4'>
        <div
          className={
            'h-1 mt-1 bg-gray-400 rounded-full duration-500' +
            (menu ? ' w-7' : ' w-6')
          }
        ></div>
        <div
          className={
            'h-1 mt-1 bg-gray-400 rounded-full duration-500' +
            (menu ? ' w-7' : ' w-5')
          }
        ></div>
        <div
          className={
            'h-1 mt-1 bg-gray-400 rounded-full duration-500' +
            (menu ? ' w-7' : ' w-4')
          }
        ></div>
      </button>
      <div
        className={
          'container mx-auto h-screen mt-12 text-xl flex flex-col items-center duration-500 overflow-hidden ' +
          (menu ? 'w-40' : 'w-0')
        }
      >
        <nav className='flex flex-col text-xl '>
          <Link
            onClick={(e) => setMenu(false)}
            to={'/'}
            className=' hover:text-white m-1 hover:bg-gray-700'
          >
            Home
          </Link>
          <Link
            onClick={(e) => setMenu(false)}
            to={'/routeeditor'}
            className=' hover:text-white m-1'
          >
            New Route
          </Link>
          <Link
            onClick={(e) => setMenu(false)}
            to={'/myprofile'}
            className=' hover:text-white m-1'
          >
            My Profile
          </Link>
          <Link
            onClick={(e) => setMenu(false)}
            to={'/favourites'}
            className=' hover:text-white m-1'
          >
            Favourites
          </Link>
        </nav>
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
