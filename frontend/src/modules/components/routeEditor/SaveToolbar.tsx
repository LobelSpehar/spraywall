import { back, save } from 'assets/svg';
import { ToolBar } from 'modules/components/toolBar/ToolBar';
import { ToolBarRow } from 'modules/components/toolBar/ToolBarRow';
import { ToolBtn } from 'modules/components/toolBar/ToolBtn';
import { gradesRange } from 'modules/consts/gradesRange';
import { useRoutesList } from 'modules/hooks/useRoutesList';
import { HoldType } from 'modules/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SaveToolbar({
  setStep,
  route,
  user,
}: {
  setStep: Function;
  route: HoldType[];
  user: string;
}) {
  const [routeGrade, setRouteGrade] = useState<number>(-1);
  const [routeName, setRouteName] = useState('');
  const { saveNewRoute } = useRoutesList();
  const navigate = useNavigate();
  const onSaveHandler = () => {
    saveNewRoute(route, routeGrade, user, routeName);
    navigate('/home');
  };
  return (
    <ToolBar>
      <ToolBarRow>
        <ToolBtn
          onClickHandler={setStep}
          value={1}
          icon={back}
          title={'undo'}
        />
        <select
          value={routeGrade}
          onChange={(e) => setRouteGrade(+e.target.value)}
        >
          <option hidden value={'Grade'}>
            Grade
          </option>
          {gradesRange.map((grade) => (
            <option key={grade} value={gradesRange.indexOf(grade)}>
              {grade}
            </option>
          ))}
        </select>
        <ToolBtn
          onClickHandler={onSaveHandler}
          disabled={routeName === '' || routeGrade < 0}
          borderColor={routeName === '' || routeGrade < 0 ? 'red' : ''}
          title={'save'}
          icon={save}
        />
      </ToolBarRow>
      <ToolBarRow>
        <input
          value={routeName}
          placeholder='Route name..'
          onChange={(e) =>
            setRouteName(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
          onBlur={(e) =>
            setRouteName(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
        ></input>
      </ToolBarRow>
    </ToolBar>
  );
}
