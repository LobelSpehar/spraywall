import { Hold } from 'modules/components/Hold';
import { HoldType } from 'modules/types';

export function RouteImage({
  route,
  children,
  onDelHold,
  step,
}: {
  route: HoldType[];
  children?: JSX.Element | JSX.Element[];
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
            <button
              onClick={(e) => {
                if (step) {
                  onDelHold(item.id);
                }
              }}
              className='w-full h-full'
            ></button>
          )}
        </Hold>
      ))}
      {children}
    </ul>
  );
}
