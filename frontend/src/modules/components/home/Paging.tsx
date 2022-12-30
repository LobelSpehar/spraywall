import { Link } from 'react-router-dom';

export function Paging({}) {
  return (
    <div className='flex justify-center'>
      <nav aria-label='Page navigation example'>
        <ul className='flex list-style-none'>
          <li className='page-item disabled'>
            <Link
              className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none'
              to={'/'}
              aria-disabled='true'
            >
              Previous
            </Link>
          </li>
          <li className='page-item'>
            <Link
              className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
              to={'/'}
            >
              1
            </Link>
          </li>
          <li className='page-item active'>
            <Link
              className='page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md'
              to={'/'}
            >
              2
            </Link>
          </li>
          <li className='page-item'>
            <Link
              className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
              to={'/'}
            >
              3
            </Link>
          </li>
          <li className='page-item'>
            <Link
              className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
              to={'/'}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
