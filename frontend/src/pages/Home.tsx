import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { gymAtom } from 'recoil/atoms/gymAtom';

export function Home() {
  const routes = useRecoilValue(gymAtom);
  return (
    <ul>
      {routes.map((item) => (
        <li key={item.id}>
          {item.id}
          {item.setter}
          {item.grade}
          <Link to={{ pathname: `/route/${item.id}` }}>View</Link>
        </li>
      ))}
    </ul>
  );
}
