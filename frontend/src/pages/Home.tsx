import { RouteType } from 'modules/types';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gradesRange } from 'modules/consts/gradesRange';
import { GradeRangeSelect } from 'modules/components/home/GradeRangeSelect';
import { RoutesList } from 'modules/components/home/RoutesList';
import { Paging } from 'modules/components/home/Paging';
import { useFirestore } from 'modules/hooks';
import { useRecoilValue } from 'recoil';
import { gymAtom } from 'recoil/atoms/gymAtom';

export function Home() {
  const routes = useRecoilValue(gymAtom);
  const { fetchRoutes } = useFirestore();
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [asc, setAsc] = useState(true);
  const [minGrade, setMinGrade] = useState(0);
  const [maxGrade, setMaxGrade] = useState(gradesRange.length);

  useEffect(() => {
    let min = localStorage.getItem('minGrade');
    let max = localStorage.getItem('maxGrade');
    if (min !== null) {
      setMinGrade(+min);
    }
    if (max !== null) {
      setMaxGrade(+max);
    }
    fetchRoutes();
  }, [minGrade, maxGrade]);

  return (
    <section className='h-full w-full'>
      <GradeRangeSelect
        minGrade={minGrade}
        gradesRange={gradesRange}
        maxGrade={maxGrade}
        setMaxGrade={setMaxGrade}
        setMinGrade={setMinGrade}
      />

      <RoutesList>
        {routes.map((route) => (
          <tr key={route.id} className='bg-gray-100 border-b'>
            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
              <Link to={'/route/' + route.id}>{route.name}</Link>
            </td>
            <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
              {gradesRange[route.grade]}
            </td>
            <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
              {route.setter}
            </td>
            <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
              {route.date}
            </td>
          </tr>
        ))}
      </RoutesList>
      <Paging />
    </section>
  );
}
