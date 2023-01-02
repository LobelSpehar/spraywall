import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from 'firebaseInit';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ProtectedRoute } from 'modules/components';
import {
  RouteEditor,
  RouteDetails,
  Home,
  Login,
  Register,
  Reset,
  Profile,
  Favourites,
} from 'pages';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='w-full h-full duration-500 overflow-hidden'>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path='/routeeditor'
          element={
            <ProtectedRoute user={user}>
              <RouteEditor user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/routeeditor/:id'
          element={
            <ProtectedRoute user={user}>
              <RouteEditor user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/route/:id'
          element={
            <ProtectedRoute user={user}>
              <RouteDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path='/favourites'
          element={
            <ProtectedRoute user={user}>
              <Favourites user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/myprofile'
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<Reset />} />

        <Route path='*' element={<div>Error no match</div>} />
      </Routes>
    </div>
  );
}

export default App;
