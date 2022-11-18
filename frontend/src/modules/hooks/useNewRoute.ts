import { HoldType } from 'modules/types';
import { useRecoilState } from 'recoil';
import { gymAtom } from 'recoil/atoms/gymAtom';
import { routeAtom } from 'recoil/atoms/routeAtom';

export function useNewRoute() {
  const [newRoute, setNewRoute] = useRecoilState(routeAtom);
  const [routeList, setRouteList] = useRecoilState(gymAtom);
  const getClickCoords = (e: React.MouseEvent<Element, MouseEvent>) => {
    const node = e.target as HTMLElement;
    var dim = node.getBoundingClientRect();

    var x = ((e.clientX - dim.left) / dim.width) * 100;
    var y = ((e.clientY - dim.top) / dim.height) * 100;

    return [x, y];
  };
  const addHold = (
    e: React.MouseEvent<Element, MouseEvent>,
    holdRadius: number,
    holdColor: string
  ) => {
    let [x, y] = getClickCoords(e);

    let newHold: HoldType = {
      x: x,
      y: y,
      radius: holdRadius,
      color: holdColor,
      id: Math.round(x).toString(10) + Math.round(y).toString(10),
    };

    let allCircles: HoldType[] = [...newRoute, newHold];
    setNewRoute(allCircles);
  };

  const delHold = (id: string) => {
    let filteredArray = newRoute.filter((item: HoldType) => item.id !== id);
    setNewRoute(filteredArray);
  };
  const undoHold = () => {
    let slicedArray = newRoute.slice(0, -1);
    setNewRoute(slicedArray);
  };
  const saveNewRoute = (route: HoldType[]) => {
    setRouteList((current) => [
      ...current,
      { id: 1, grade: '6b', setter: 'Lobel', route: route },
    ]);
  };
  return { addHold, delHold, getClickCoords, undoHold, saveNewRoute };
}
