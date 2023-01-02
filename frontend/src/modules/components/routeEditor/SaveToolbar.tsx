import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore/lite';

import { HoldType } from 'modules/types';
import { gradesRange } from 'modules/consts/gradesRange';
import { ToolBar, ToolBarRow, ToolBtn } from 'modules/components';
import { useFirestore } from 'modules/hooks';
import { back, save } from 'assets/svg';

export function SaveToolbar({
  setStep,
  route,
  user,
  id,
  currentData,
}: {
  setStep: Function;
  route: HoldType[];
  user: User | null;
  id?: string;
  currentData?: DocumentData;
}) {
  const { onAddRoute, onUpdateRoute } = useFirestore();
  const [routeGrade, setRouteGrade] = useState<number>(-1);
  const [routeName, setRouteName] = useState('');
  const navigate = useNavigate();
  const onSaveHandler = async () => {
    if (id) {
      await onUpdateRoute(id, {
        route: route,
        name: routeName,
        grade: routeGrade,
      });
      navigate('/');
    } else {
      await onAddRoute({
        route: route,
        grade: routeGrade,
        setter: user?.displayName || '',
        user_uid: user?.uid || '',
        name: routeName,
        date: '',
      });
      navigate('/');
    }
  };
  useEffect(() => {
    if (currentData) {
      setRouteGrade(currentData.grade);
      setRouteName(currentData.name);
    }
  }, []);
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
