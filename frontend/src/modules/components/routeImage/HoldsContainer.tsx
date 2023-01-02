import { HoldType } from 'modules/types';

import { DelHoldBtn, Hold } from 'modules/components';

export function HoldsContainer({
  route,
  onDelHold,
  step,
}: {
  route: HoldType[];
  onDelHold?: Function;
  step?: number;
}) {
  return (
    <ul className='h-full w-full relative top-0 overflow-hidden'>
      {route.map((item: HoldType) => (
        <Hold
          key={item.id}
          x={item.x}
          y={item.y}
          radius={item.radius}
          color={item.color}
        >
          {onDelHold && (
            <DelHoldBtn step={step} onDelHold={onDelHold} value={item.id} />
          )}
        </Hold>
      ))}
    </ul>
  );
}
