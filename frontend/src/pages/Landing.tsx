import { Link } from 'react-router-dom';

import { welcome } from 'assets/svg';

export function Landing() {
  return (
    <section className='mb-40'>
      <div className='bg-gray-900 relative overflow-hidden bg-no-repeat bg-cover h-[50vh]'>
        <img src={welcome} alt='welcome'></img>
      </div>
      <Link
        className='fixed top-4 right-4 px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-gray-200 text-gray-900 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        data-mdb-ripple='true'
        data-mdb-ripple-color='light'
        to={'/login'}
        role='button'
      >
        Log in
      </Link>
      <div className='container mx-auto px-6 md:px-12 xl:px-32'>
        <div className='text-center text-gray-800'>
          <div
            className='block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12 mt-[-170px] backdrop-blur-sm'
            style={{
              background: 'hsla(0, 0%, 100%, 0.6)',
            }}
          >
            <h1 className='text-3xl md:text-5xl xl:text-7xl font-bold tracking-tight mb-12'>
              Best climbing app ever
              <br />
              <span className='text-blue-600'>Log in to start</span>
            </h1>
            <Link
              className='inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-gray-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
              to={'/login'}
              role='button'
            >
              Log in
            </Link>
            <Link
              className='inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-gray-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
              to={'/register'}
              role='button'
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
