import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useFirestore } from 'modules/hooks';

import { RouteType } from 'modules/types';
import { HoldsContainer, RouteImage } from 'modules/components';
import { detail, heartFalse, heartTrue } from 'assets/svg';
import { gradesRange } from 'modules/consts/gradesRange';
import { auth } from 'firebaseInit';

export function RouteDetails() {
  const [route, setRoute] = useState<RouteType>();
  const [modalState, setModalState] = useState(false);
  const { fetchRouteByID, deleteRoute } = useFirestore();
  const user = auth.currentUser?.uid;
  const navigate = useNavigate();
  const id: string = useParams().id || '';
  const fetchRoute = async () => {
    let res = await fetchRouteByID(id);
    if (res) {
      setRoute({
        id: res.id,
        name: res.name,
        grade: res.grade,
        setter: res.setter,
        date: res.date,
        user_uid: res.user_uid,
        route: res.route,
      });
    }
  };
  useEffect(() => {
    fetchRoute();
  }, []);

  return (
    <section
      className='pt-4 h-screen w-screen bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${detail})` }}
    >
      {route ? (
        <div className='min-w-fit w-1/3 mx-auto'>
          <div className='backdrop-blur-md h-fit mb-2 h-full border-2 border-gray-200 rounded-lg overflow-hidden flex justify-around'>
            <p className='text-gray-600 mr-3 inline-flex items-center leading-none text-sm px-2 py-1 '>
              {route.name}
            </p>
            <p className='text-gray-600 mr-3 inline-flex items-center leading-none text-sm px-2 py-1 '>
              {gradesRange[route.grade]}
            </p>

            <p className='text-gray-600 mr-3 inline-flex items-center leading-none text-sm px-2 py-1 '>
              {route.setter}
            </p>

            <p className='inline-flex items-center leading-none text-sm px-2'>
              {true ? (
                <img className='w-5 h-5' src={heartTrue} alt='favourite' />
              ) : (
                heartFalse
              )}
            </p>
          </div>
          <div className='backdrop-blur-md h-fit mb-2 h-full border-2 border-gray-200 rounded-lg overflow-hidden flex justify-around'>
            <p className='text-gray-600 mr-3 inline-flex items-center leading-none text-sm px-2 py-1 '>
              {route.user_uid === user ? (
                <Link
                  className='border rounded-full px-2 border-gray-400 hover:border-gray-600'
                  to={'/routeEditor/' + id}
                >
                  Edit
                </Link>
              ) : null}
            </p>
            <p className='text-gray-600 mr-3 inline-flex items-center leading-none text-sm px-2 py-1 '>
              {route.user_uid === user ? (
                <button
                  onClick={(e) => setModalState(true)}
                  className='border rounded-full px-2 border-gray-400 hover:border-gray-600'
                >
                  Delete
                </button>
              ) : null}
            </p>

            <p className='text-gray-600 mr-3 inline-flex items-center leading-none text-sm px-2 py-1 '>
              {route.date}
            </p>
          </div>
        </div>
      ) : null}
      <RouteImage>
        {route ? <HoldsContainer route={route.route} /> : <></>}
      </RouteImage>
      {modalState && route ? (
        <div className='fixed top-0 left-0 h-screen w-screen z-50 bg-gray-700 flex justify-center pt-20'>
          <div className='flex flex-col p-4 border-b rounded-t border-gray-600'>
            <h3 className='text-xl font-semibold text-white'>
              Are you sure you want to delete {route.name}?
            </h3>

            <div className='flex items-center p-6 space-x-2 border-t border-gray-600 rounded-b '>
              <button
                onClick={(e) => deleteRoute(id).then(() => navigate('/'))}
                type='button'
                className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Yes, delete
              </button>
              <button
                onClick={(e) => setModalState(false)}
                type='button'
                className='text-gray-300 bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-600 rounded-lg border border-gray-500 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10'
              >
                No, go back
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
