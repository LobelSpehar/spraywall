import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { HoldType } from 'modules/types';

import { HoldsContainer } from 'modules/components/routeImage/HoldsContainer';
import { RouteImage } from 'modules/components/routeImage/RouteImage';
import { useFirestore } from 'modules/hooks';

export function RouteDetails() {
  const [holdsList, setHoldsList] = useState<HoldType[]>([]);
  const { fetchRouteByID } = useFirestore();
  const id: string = useParams().id || '';
  const fetchRoute = async () => {
    let newList = await fetchRouteByID(id);
    if (newList) {
      setHoldsList(newList.route);
    }
  };
  useEffect(() => {
    fetchRoute();
  }, []);

  return (
    <div className='mt-10'>
      <RouteImage>
        <HoldsContainer route={holdsList} />
      </RouteImage>
    </div>
  );
}
