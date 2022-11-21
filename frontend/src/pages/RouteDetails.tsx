import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRoutesList } from 'modules/hooks/useRoutesList';

import { HoldType } from 'modules/types';

import { HoldsContainer } from 'modules/components/routeImage/HoldsContainer';
import { RouteImage } from 'modules/components/routeImage/RouteImage';

export function RouteDetails() {
  const [holdsList, setHoldsList] = useState<HoldType[]>([]);

  const id: string = useParams().id || '';
  const { fetchRouteByID } = useRoutesList();
  useEffect(() => {
    let newList = fetchRouteByID(id);
    setHoldsList(newList.route);
  }, []);

  return (
    <RouteImage>
      <HoldsContainer route={holdsList} />
    </RouteImage>
  );
}
