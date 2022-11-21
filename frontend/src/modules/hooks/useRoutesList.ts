import collect from 'collect.js';
import { HoldType } from 'modules/types';

import { useRecoilState } from 'recoil';
import { gymAtom } from 'recoil/atoms/gymAtom';

export function useRoutesList() {
  const [routeList, setRouteList] = useRecoilState(gymAtom);
  const saveNewRoute = (
    route: HoldType[],
    grade: number,
    setter: string,
    name: string
  ) => {
    let date = new Date();
    setRouteList((current) => [
      ...current,
      {
        id: date[Symbol.toPrimitive]('number'),
        name: name,
        setGrade: grade,
        avgGrade: grade,
        repeats: 0,
        setter: setter,
        route: route,
        dateSet: date.toLocaleDateString(),
      },
    ]);
  };

  const fetchRoutes = (
    sortBy: string,
    page: number,
    sortAsc: boolean,
    minGrade: number,
    maxGrade: number
  ) => {
    let rawResult = sortAsc
      ? collect(routeList).sortBy(sortBy)
      : collect(routeList).sortByDesc(sortBy);

    let result = rawResult
      .all()
      .filter((item) => item.setGrade >= minGrade && item.setGrade <= maxGrade);
    return result;
  };
  const fetchRouteByID = (id: string) => {
    let result = routeList.filter((item) => item.id === +id);
    return result[0];
  };
  return { fetchRouteByID, fetchRoutes, saveNewRoute };
}
