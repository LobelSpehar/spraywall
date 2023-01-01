import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { back, save } from 'assets/svg';
import { ToolBar, ToolBarRow, ToolBtn } from 'modules/components';

import { gradesRange } from 'modules/consts/gradesRange';
import { useFirestore } from 'modules/hooks';
import { HoldType } from 'modules/types';
import { User } from 'firebase/auth';

export function SaveToolbar({
  setStep,
  route,
  user,
}: {
  setStep: Function;
  route: HoldType[];
  user: User | null;
}) {
  const { onAddRoute } = useFirestore();

  const [routeGrade, setRouteGrade] = useState<number>(-1);
  const [routeName, setRouteName] = useState('');
  const navigate = useNavigate();
  const onSaveHandler = async () => {
    await onAddRoute({
      route: route,
      grade: routeGrade,
      setter: user?.displayName || '',
      user_uid: user?.uid || '',
      name: routeName,
    });
    navigate('/');
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
            <option
              key={grade}
              hidden={grade === 'x'}
              value={gradesRange.indexOf(grade)}
            >
              {grade}
            </option>
          ))}
        </select>
        <ToolBtn
          onClickHandler={onSaveHandler}
          disabled={routeName === '' || routeGrade < 0}
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
