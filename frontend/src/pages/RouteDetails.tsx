import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRoutesList } from 'modules/hooks/useRoutesList';

import { Hold } from 'modules/components/Hold';
import { HoldType } from 'modules/types';
import wall from 'assets/images/spraywall.jpg';

export function RouteDetails() {
  const [holdsList, setHoldsList] = useState<HoldType[]>([]);

  const id: string = useParams().id || '';
  const { fetchRouteByID } = useRoutesList();
  useEffect(() => {
    let newList = fetchRouteByID(id);
    setHoldsList(newList.route);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${wall})`,
      }}
      className='aspect-[3/4] bg-contain bg-no-repeat mx-auto overflow-hidden max-w-full h-[125vw] lg:max-h-[calc(100vh-80px)] mb-2'
    >
      <ul className='h-full w-full relative -top-[100%]'>
        {holdsList.map((item: HoldType) => (
          <Hold
            key={item.id}
            x={item.x}
            y={item.y}
            radius={item.radius}
            color={item.color}
          />
        ))}
      </ul>
    </div>
  );
}
