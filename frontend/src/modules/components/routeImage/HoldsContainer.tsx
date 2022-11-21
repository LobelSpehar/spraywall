import DelHoldBtn from 'modules/components/routeImage/DelHoldBtn';
import { Hold } from 'modules/components/routeImage/Hold';
import { HoldType } from 'modules/types';

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
    <ul className='h-full w-full relative top-0'>
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
