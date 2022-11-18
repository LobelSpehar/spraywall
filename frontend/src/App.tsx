import { Routes, Navigate, Route } from 'react-router-dom';

import { RouteEditor } from 'pages/RouteEditor';

import { Home } from 'pages/Home';
import { RouteDetails } from 'pages/RouteDetails';

function App() {
  return (
    <div className='bg-primary w-full h-full lg:overflow-hidden  duration-500 '>
      <nav className='h-20'></nav>
      <Routes>
        <Route path='/' element={<Navigate to='/routeeditor' />}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/routeeditor' element={<RouteEditor />} />
        <Route path='/route/:id' element={<RouteDetails />} />
        <Route path='/profile' element={<div>profile</div>} />
        <Route path='*' element={<div>Error no match</div>} />
      </Routes>
    </div>
  );
}

export default App;
