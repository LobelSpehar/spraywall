import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { RouteEditor, RouteDetails, Home, Login, Register, Reset } from 'pages';
import { auth } from 'firebaseInit';

import { onAuthStateChanged, User } from 'firebase/auth';

import { ProtectedRoute } from 'modules/components/ProtectedRoute';

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
    <div className='bg-primary w-full h-full duration-500 overflow-hidden'>
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
              <div>favs</div>
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute user={user}>
              <div>myprofile</div>
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
