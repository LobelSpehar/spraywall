import { useState } from 'react';

import { useRecoilValue } from 'recoil';
import { routeAtom } from 'recoil/atoms/routeAtom';

import { useNewRoute } from 'modules/hooks/useNewRoute';
import { Hold } from 'modules/components/Hold';
import { HoldType } from 'modules/types';
import wall from 'assets/images/spraywall.jpg';
import { ToolBar } from 'modules/components/ToolBar';
import ToolBarRow from 'modules/components/ToolBarRow';
import { ToolBtn } from 'modules/components/ToolBtn';
import { foot, hand, start, top, save, undo } from 'assets/icons/index';
import { Link } from 'react-router-dom';

export function RouteEditor() {
  const { addHold, delHold, getClickCoords, undoHold, saveNewRoute } =
    useNewRoute();
  const holdsList = useRecoilValue(routeAtom);
  const [exampleHoldPos, setExampleHoldPos] = useState({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [holdRadius, setHoldRadius] = useState<number>(10);
  const [holdColor, setHoldColor] = useState<string>('#9ADF00');
  const mouseFollowHandler = (e: React.MouseEvent<Element, MouseEvent>) => {
    let [x, y] = getClickCoords(e);
    setExampleHoldPos({ x: x, y: y, opacity: 100 });
  };
  return (
    <section className='bg-primary flex flex-col justify-around'>
      <div className=' w-full mx-auto my-2'>
        <ToolBar>
          <ToolBarRow>
            <ToolBtn
              onClickHandler={setHoldColor}
              value={'#9ADF00'}
              title={'start'}
              icon={start}
            />
            <ToolBtn
              onClickHandler={setHoldColor}
              value={'#009287'}
              title={'hand'}
              icon={hand}
            />
            <ToolBtn
              onClickHandler={setHoldColor}
              value={'#270722'}
              title={'foot'}
              icon={foot}
            />
            <ToolBtn
              onClickHandler={setHoldColor}
              value={'#EA000C'}
              title={'top'}
              icon={top}
            />
            <Link to={'/home'}>
              <ToolBtn
                onClickHandler={saveNewRoute}
                value={holdsList}
                disabled={holdsList.length < 3}
                title={'save'}
                icon={save}
              />
            </Link>
          </ToolBarRow>
          <ToolBarRow>
            <div
              className='h-6 w-6 mt-1 rounded-full'
              style={{ backgroundColor: holdColor }}
            ></div>
            <input
              title='radius'
              onChange={(e) => {
                setHoldRadius(+e.target.value);
                setExampleHoldPos({ x: 50, y: 50, opacity: 100 });
              }}
              className='min-w-[120px] w-1/2 mx-2 border'
              type='range'
              min={8}
              max={30}
              value={holdRadius}
            ></input>
            <ToolBtn
              onClickHandler={undoHold}
              value={'test'}
              icon={undo}
              title={'undo'}
            />
          </ToolBarRow>
        </ToolBar>
      </div>
      <div
        style={{
          backgroundImage: `url(${wall})`,
        }}
        className='aspect-[3/4] bg-contain bg-no-repeat mx-auto overflow-hidden max-w-full h-[125vw] lg:max-h-[calc(100vh-80px)] mb-2'
      >
        <div
          onClick={(e) => addHold(e, holdRadius, holdColor)}
          onMouseMove={mouseFollowHandler}
          onMouseOut={(e) => setExampleHoldPos({ x: 50, y: 50, opacity: 0 })}
          onMouseUp={(e) => setExampleHoldPos({ x: 50, y: 50, opacity: 0 })}
          className='z-10 relative top-0 w-full h-full'
        ></div>
        <ul className='h-full w-full relative -top-[100%]'>
          {holdsList.map((item: HoldType) => (
            <Hold
              key={item.id}
              x={item.x}
              y={item.y}
              radius={item.radius}
              color={item.color}
            >
              <button
                onClick={(e) => delHold(item.id)}
                className='w-full h-full'
              ></button>
            </Hold>
          ))}
          <li
            className='z-20 pointer-events-none border max-w-[30%] max-h-[30%] border-4 absolute rounded-full  -translate-x-1/2 -translate-y-1/2 overflow-hidden'
            style={{
              width: holdRadius + '%',
              height: holdRadius * 0.75 + '%',
              left: exampleHoldPos.x + '%',
              top: exampleHoldPos.y + '%',
              opacity: exampleHoldPos.opacity,
              borderColor: holdColor,
            }}
          ></li>
        </ul>
      </div>
    </section>
  );
}
