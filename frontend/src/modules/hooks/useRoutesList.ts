import { useRecoilState } from 'recoil';
import { gymAtom } from 'recoil/atoms/gymAtom';

export function useRoutesList() {
  const [routeList, setRouteList] = useRecoilState(gymAtom);
  const fetchRouteByID = (id: string) => {
    let res = routeList.filter((item) => item.id === +id);
    return res[0];
  };
  return { fetchRouteByID };
}
