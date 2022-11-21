import { Routes, Navigate, Route } from 'react-router-dom';

import { NavBar } from 'modules/components';
import { RouteEditor, RouteDetails, Home } from 'pages';

function App() {
  return (
    <div className='bg-primary w-full h-screen fixed pb-4 lg:overflow-hidden duration-500 pt-32'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to='/routeeditor' />}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/routeeditor' element={<RouteEditor />} />
        <Route path='/route/:id' element={<RouteDetails />} />
        <Route path='/favourites' element={<div>favs</div>} />
        <Route path='/profile' element={<div>myprofile</div>} />
        <Route path='*' element={<div>Error no match</div>} />
      </Routes>
    </div>
  );
}

export default App;
