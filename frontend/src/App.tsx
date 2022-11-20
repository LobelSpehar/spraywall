import {
  Routes,
  Navigate,
  Route,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { RouteEditor } from 'pages/RouteEditor';

import { Home } from 'pages/Home';
import { RouteDetails } from 'pages/RouteDetails';
import { home } from 'assets/svg';
import { add, fav, user } from 'assets/svg';
import { ToolBar } from 'modules/components/ToolBar';
import ToolBarRow from 'modules/components/ToolBarRow';
import { ToolBtn } from 'modules/components/ToolBtn';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className='bg-primary w-full h-screen fixed pb-4 lg:overflow-hidden duration-500 pt-32'>
      <Link
        to={'/home'}
        title='Homepage'
        className='fixed top-2 left-1 w-[12vw] h-[12vw] bg-no-repeat bg-origin-content bg-contain bg-secondary p-1 rounded border border-black'
        style={{
          backgroundImage: home ? `url(${home})` : '',
        }}
      ></Link>
      {location.pathname === '/routeeditor' ? null : (
        <ToolBar>
          <ToolBarRow>
            <ToolBtn
              onClickHandler={navigate}
              value={'/routeeditor'}
              icon={add}
              title={'Create new route'}
            ></ToolBtn>
            <ToolBtn
              onClickHandler={navigate}
              value={'/favourites'}
              icon={fav}
              title={'Favourite routes'}
            ></ToolBtn>

            <ToolBtn
              onClickHandler={navigate}
              value={'/profile'}
              icon={user}
              title={'My profile'}
            ></ToolBtn>
          </ToolBarRow>
        </ToolBar>
      )}
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
