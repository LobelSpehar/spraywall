import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { loginSvg } from 'assets/svg';
import { useAuth } from 'modules/hooks';

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { onLogin } = useAuth();

  return (
    <section className='h-screen'>
      <div className='px-6 h-full text-gray-800'>
        <div className='flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6'>
          <div className='grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0'>
            <img src={loginSvg} className='w-full' alt='Sample' />
          </div>
          <div className='xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0'>
            <form
              onSubmit={handleSubmit((data) => {
                onLogin(data.email, data.password, data.rememberMe);
              })}
            >
              <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
                <p className='text-center font-semibold mx-4 mb-0'>Log In</p>
              </div>

              <div className='mb-6'>
                <input
                  {...register('email', { required: true })}
                  type='email'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='Email address'
                  autoComplete='email'
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email?.type === 'required' && (
                  <p role='alert'>Email is required</p>
                )}
              </div>

              <div className='mb-6'>
                <input
                  {...register('password', { required: true })}
                  type='password'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='Password'
                  autoComplete='current-password'
                  aria-invalid={errors.password ? 'true' : 'false'}
                />
                {errors.password?.type === 'required' && (
                  <p role='alert'>Password is required</p>
                )}
              </div>

              <div className='flex justify-between items-center mb-6'>
                <div className='form-group form-check'>
                  <input
                    {...register('rememberMe')}
                    type='checkbox'
                    className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    id='rememberMe'
                  />
                  <label
                    className='form-check-label inline-block text-gray-800'
                    htmlFor='rememberMe'
                  >
                    Remember me
                  </label>
                </div>
                <Link to={'/resetpassword'} className='text-gray-800'>
                  Forgot password?
                </Link>
              </div>

              <div className='text-center lg:text-left'>
                <button className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                  Login
                </button>
                <p className='text-sm font-semibold mt-2 pt-1 mb-0'>
                  Don't have an account?
                  <Link
                    to={'/register'}
                    className='text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
