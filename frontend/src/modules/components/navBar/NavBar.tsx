import { useNavigate, useLocation } from 'react-router-dom';

import { ToolBarRow, ToolBtn } from 'modules/components';
import { home, add, fav, user } from 'assets/svg';
import { useState } from 'react';

export function NavBar() {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const clickHandler = (value: string) => {
    navigate(value);
    setMenu(false);
  };
  return (
    <div
      className='fixed top-0 left-0 h-auto w-fit bg-primary z-50 w-full'
      style={{ backgroundColor: menu ? 'primary' : '' }}
    >
      <button
        onClick={(e) => setMenu(!menu)}
        className='h-9 w-9 bg-primary rounded mt-2 ml-1'
      >
        {' '}
        <div
          className={
            'h-1 bg-secondary rounded-full duration-500' +
            (menu ? ' w-7' : ' w-6')
          }
        ></div>
        <div
          className={
            'h-1 bg-secondary rounded-full duration-500 my-1' +
            (menu ? ' w-7' : ' w-5')
          }
        ></div>
        <div
          className={
            'h-1 bg-secondary rounded-full duration-500' +
            (menu ? ' w-7' : ' w-4')
          }
        ></div>
      </button>
      {menu ? (
        <div className='w-screen p-2 bg-primary'>
          <ToolBarRow>
            <ToolBtn
              onClickHandler={clickHandler}
              value={'/home'}
              icon={home}
              borderColor={pathname === '/home' ? 'green' : ''}
              title={'Create new route'}
            ></ToolBtn>
            <ToolBtn
              onClickHandler={clickHandler}
              value={'/routeeditor'}
              icon={add}
              borderColor={pathname === '/routeeditor' ? 'green' : ''}
              title={'Create new route'}
            ></ToolBtn>
            <ToolBtn
              onClickHandler={clickHandler}
              value={'/favourites'}
              icon={fav}
              borderColor={pathname === '/favourites' ? 'green' : ''}
              title={'Favourite routes'}
            ></ToolBtn>
            <ToolBtn
              onClickHandler={clickHandler}
              value={'/profile'}
              icon={user}
              borderColor={pathname === '/profile' ? 'green' : ''}
              title={'My profile'}
            ></ToolBtn>
          </ToolBarRow>
        </div>
      ) : null}
    </div>
  );
}
