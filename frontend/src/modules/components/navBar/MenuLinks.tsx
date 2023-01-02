import { Link } from 'react-router-dom';

export function MenuLinks({ setMenu }: { setMenu: Function }) {
  return (
    <nav className='flex flex-col text-xl '>
      <Link
        onClick={(e) => setMenu(false)}
        to={'/'}
        className=' hover:text-white m-1'
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
  );
}
