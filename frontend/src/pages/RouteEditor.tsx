import { useState } from 'react';
import wall from 'assets/images/spraywall.jpg';
import { ToolBar } from 'modules/components/ToolBar';
import ToolBarRow from 'modules/components/ToolBarRow';
import { ToolBtn } from 'modules/components/ToolBtn';
import { foot, hand, start, top, save, undo, back } from 'assets/svg/index';
import { RouteImage } from 'modules/components/RouteImage';
import { useRoutesList } from 'modules/hooks/useRoutesList';
import { HoldType } from 'modules/types';
import { useNavigate } from 'react-router-dom';
import { gradesRange } from 'modules/consts/gradesRange';

export function RouteEditor() {
  const { saveNewRoute } = useRoutesList();
  const navigate = useNavigate();
  const [holdsList, setHoldList] = useState<HoldType[] | []>([]);
  const [showExample, setShowExample] = useState(false);
  const [holdRadius, setHoldRadius] = useState<number>(10);
  const [holdColor, setHoldColor] = useState<string>('#9ADF00');
  const [routeGrade, setRouteGrade] = useState<string>('Grade');
  const [routeName, setRouteName] = useState('');
  const [step, setStep] = useState(1);

  const addHold = (
    e: React.MouseEvent<Element, MouseEvent>,
    holdRadius: number,
    holdColor: string
  ) => {
    const node = e.target as HTMLElement;
    var dim = node.getBoundingClientRect();

    var x = +((e.clientX - dim.left) / dim.width);
    var y = +((e.clientY - dim.top) / dim.height);

    let newHold: HoldType = {
      x: x,
      y: y,
      radius: holdRadius,
      color: holdColor,
      id: Math.round(x * 100).toString(10) + Math.round(y * 100).toString(10),
    };

    let allCircles: HoldType[] = [...holdsList, newHold];
    setHoldList(allCircles);
  };

  const delHold = (id: string) => {
    let filteredArray = holdsList.filter((item: HoldType) => item.id !== id);
    setHoldList(filteredArray);
  };

  const undoHold = () => {
    let slicedArray = holdsList.slice(0, -1);
    setHoldList(slicedArray);
  };
  const onSaveHandler = () => {
    if (step) {
      setStep(0);
    } else {
      saveNewRoute(holdsList, routeGrade, 'userName', routeName);
      navigate('/home');
    }
  };
  return (
    <section className='bg-primary overflow-auto h-full'>
      <button
        onClick={(e) => onSaveHandler()}
        className='fixed top-2 right-1 w-[12vw] h-[12vw] bg-no-repeat bg-origin-content bg-contain bg-secondary p-1 rounded border border-black disabled:bg-primary disabled:border-red-900'
        style={{
          backgroundImage: `url(${save})`,
        }}
        disabled={
          step ? holdsList.length < 3 : routeGrade === '' || routeName === ''
        }
      ></button>

      <div className='w-full mx-auto '>
        <ToolBar>
          {step ? (
            <>
              <ToolBarRow>
                <ToolBtn
                  onClickHandler={setHoldColor}
                  value={'#9ADF00'}
                  borderColor={holdColor === '#9ADF00' ? '#9ADF00' : ''}
                  title={'start'}
                  icon={start}
                />
                <ToolBtn
                  onClickHandler={setHoldColor}
                  value={'#009287'}
                  borderColor={holdColor === '#009287' ? '#009287' : ''}
                  title={'hand'}
                  icon={hand}
                />
                <ToolBtn
                  onClickHandler={setHoldColor}
                  value={'#270722'}
                  borderColor={holdColor === '#270722' ? '#270722' : ''}
                  title={'foot'}
                  icon={foot}
                />
                <ToolBtn
                  onClickHandler={setHoldColor}
                  value={'#EA000C'}
                  borderColor={holdColor === '#EA000C' ? '#EA000C' : ''}
                  title={'top'}
                  icon={top}
                />
              </ToolBarRow>
              <ToolBarRow>
                <ToolBtn
                  onClickHandler={setHoldRadius}
                  value={8}
                  borderColor={holdRadius === 8 ? '#9ADF00' : ''}
                  text={'S'}
                  title={'undo'}
                />
                <ToolBtn
                  onClickHandler={setHoldRadius}
                  value={10}
                  borderColor={holdRadius === 10 ? '#9ADF00' : ''}
                  text={'M'}
                  title={'undo'}
                />
                <ToolBtn
                  onClickHandler={setHoldRadius}
                  value={12}
                  borderColor={holdRadius === 12 ? '#9ADF00' : ''}
                  text={'L'}
                  title={'undo'}
                />
                <ToolBtn
                  onClickHandler={setHoldRadius}
                  value={14}
                  borderColor={holdRadius === 14 ? '#9ADF00' : ''}
                  text={'XL'}
                  title={'undo'}
                />
                <ToolBtn
                  onClickHandler={undoHold}
                  value={'test'}
                  icon={undo}
                  title={'undo'}
                />
              </ToolBarRow>
            </>
          ) : (
            <>
              <ToolBarRow>
                <ToolBtn
                  onClickHandler={setStep}
                  value={1}
                  icon={back}
                  title={'undo'}
                />
                <select
                  value={routeGrade}
                  onChange={(e) => setRouteGrade(e.target.value)}
                >
                  <option hidden value={'Grade'}>
                    Grade
                  </option>
                  {gradesRange.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </ToolBarRow>
              <ToolBarRow>
                <input
                  value={routeName}
                  placeholder='Route name..'
                  onChange={(e) =>
                    setRouteName(
                      e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1)
                    )
                  }
                  onBlur={(e) =>
                    setRouteName(
                      e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1)
                    )
                  }
                ></input>
              </ToolBarRow>
            </>
          )}
        </ToolBar>
      </div>
      <div
        style={{
          backgroundImage: `url(${wall})`,
        }}
        className='aspect-[3/4] bg-contain bg-no-repeat mx-auto max-w-full h-[125vw] lg:max-h-[calc(100vh-80px)] mb-2'
      >
        <RouteImage route={holdsList} onDelHold={delHold} step={step}>
          <li
            id='exampleHold'
            className='z-20 pointer-events-none border border-4 absolute rounded-full  -translate-x-1/2 -translate-y-1/2 overflow-hidden'
            style={{
              width: holdRadius + '%',
              height: holdRadius * 0.75 + '%',
              left: '50%',
              top: '50%',
              display: showExample ? 'block' : 'none',
              borderColor: holdColor,
            }}
          ></li>
        </RouteImage>
        <div
          onClick={(e) => {
            if (step) {
              addHold(e, holdRadius, holdColor);
            }
          }}
          className='z-10 relative -top-[100%] w-full h-full'
        ></div>
      </div>
    </section>
  );
}
