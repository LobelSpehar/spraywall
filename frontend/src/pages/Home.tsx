import { useRoutesList } from 'modules/hooks/useRoutesList';
import { RouteType } from 'modules/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gradesRange } from 'modules/consts/gradesRange';
export function Home() {
  const [routes, setRoutes] = useState<RouteType[]>([]);
  const navigate = useNavigate();
  const { fetchRoutes } = useRoutesList();
  const [page, setPage] = useState(0);
  const [asc, setAsc] = useState(true);
  const [minGrade, setMinGrade] = useState('3');
  const [maxGrade, setMaxGrade] = useState('9A');
  useEffect(() => {
    let min = localStorage.getItem('minGrade');
    let max = localStorage.getItem('maxGrade');
    if (min !== null) {
      setMinGrade(min);
    }
    if (max !== null) {
      setMaxGrade(max);
    }
    let res = fetchRoutes('date', 1, true, minGrade, maxGrade);
    setRoutes(res);
  }, [minGrade, maxGrade]);

  return (
    <section className='overflow-none h-full w-full'>
      <div className='mx-auto w-fit'>
        <select
          value={minGrade}
          onChange={(e) => {
            setMinGrade(e.target.value);
            localStorage.setItem('minGrade', e.target.value);
          }}
          className='bg-secondary rounded text-center mx-2'
        >
          <option hidden value={'Grade'}>
            Grade
          </option>
          {gradesRange
            .filter((grade) => grade < maxGrade)
            .map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
        </select>
        <select
          value={maxGrade}
          onChange={(e) => {
            setMaxGrade(e.target.value);
            localStorage.setItem('maxGrade', e.target.value);
          }}
          className='bg-secondary rounded text-center mx-2'
        >
          <option hidden value={'Grade'}>
            Grade
          </option>
          {gradesRange
            .filter((grade) => grade > minGrade)
            .map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
        </select>
      </div>
      <table className='w-fit mx-auto select-none hover:cursor-pointer'>
        <thead>
          <tr className='h-10'>
            <th
              onClick={(e) => {
                setRoutes(fetchRoutes('name', page, asc, minGrade, maxGrade));
                setAsc(!asc);
              }}
            >
              Name:
            </th>
            <th
              onClick={(e) => {
                setRoutes(
                  fetchRoutes('setGrade', page, asc, minGrade, maxGrade)
                );
                setAsc(!asc);
              }}
            >
              Grade:
            </th>
            <th
              onClick={(e) => {
                setRoutes(fetchRoutes('setter', page, asc, minGrade, maxGrade));
                setAsc(!asc);
              }}
            >
              Setter:
            </th>
            <th
              onClick={(e) => {
                setRoutes(
                  fetchRoutes('dateSet', page, asc, minGrade, maxGrade)
                );
                setAsc(!asc);
              }}
            >
              Date:
            </th>
          </tr>
        </thead>
        <tbody>
          {routes.map((item) => (
            <tr
              key={item.id}
              className='h-8 text-center bg-secondary border-2 border-primary'
              onClick={(e) => navigate(`/route/${item.id}`)}
            >
              <td>{item.name}</td>
              <td>{item.setGrade}</td>
              <td>{item.setter}</td>
              <td>{item.dateSet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
