import { useEffect, useState } from 'react';
import { gradesRange } from 'modules/consts/gradesRange';

import { useFirestore } from 'modules/hooks';
import { useRecoilValue } from 'recoil';
import { gymAtom } from 'recoil/atoms/gymAtom';
import { walk } from 'assets/svg';

import { RoutesList } from 'modules/components/routesList/RoutesList';
import { RoutesNavBar } from 'modules/components/routesList/RoutesNavBar';
import { RoutesPaging } from 'modules/components/routesList/RoutesPaging';

export function Home() {
  const routes = useRecoilValue(gymAtom);
  const { fetchRoutes, clearRoutes } = useFirestore();

  const [page, setPage] = useState(0);
  const [minGrade, setMinGrade] = useState(0);
  const [maxGrade, setMaxGrade] = useState(gradesRange.length);
  const refreshList = () => {
    let min = localStorage.getItem('minGrade');
    let max = localStorage.getItem('maxGrade');
    if (min !== null) {
      setMinGrade(+min);
    }
    if (max !== null) {
      setMaxGrade(+max);
    }
    fetchRoutes(min ? +min : minGrade, max ? +max : maxGrade, page);
  };

  useEffect(() => {
    refreshList();
    return clearRoutes();
  }, [minGrade, maxGrade, page]);

  return (
    <section
      className='h-full w-full pt-10 bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${walk})` }}
    >
      <div className='text-xl max-w-[80%] w-fit min-w-[250px] mx-auto'>
        <RoutesNavBar
          minGrade={minGrade}
          maxGrade={maxGrade}
          setMinGrade={setMinGrade}
          setMaxGrade={setMaxGrade}
          gradesRange={gradesRange}
        />
        <RoutesList
          gradesRange={gradesRange}
          routes={routes}
          refreshList={refreshList}
        />
        <RoutesPaging page={page} setPage={setPage} length={routes.length} />
      </div>
    </section>
  );
}
