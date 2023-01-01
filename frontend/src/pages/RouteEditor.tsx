import { useState } from 'react';

import { HoldType } from 'modules/types';
import {
  SaveToolbar,
  EditToolbar,
  RouteImage,
  ClickableArea,
  HoldsContainer,
} from 'modules/components';
import { User } from 'firebase/auth';
import { explore } from 'assets/svg';

export function RouteEditor({ user }: { user: User | null }) {
  const [holdsList, setHoldList] = useState<HoldType[] | []>([]);
  const [holdRadius, setHoldRadius] = useState<number>(10);
  const [holdColor, setHoldColor] = useState<string>('#9ADF00');
  const [step, setStep] = useState(1);

  const addHold = (e: React.MouseEvent<Element, MouseEvent>) => {
    const node = e.target as HTMLElement;
    var dim = node.getBoundingClientRect();

    var x = +((e.clientX - dim.left) / dim.width);
    var y = +((e.clientY - dim.top) / dim.height);

    let newHold: HoldType = {
      x: x,
      y: y,
      radius: holdRadius,
      color: holdColor,
      id: +(
        Math.round(x * 100).toString(10) + Math.round(y * 100).toString(10)
      ),
    };

    let allCircles: HoldType[] = [...holdsList, newHold];
    setHoldList(allCircles);
  };

  const delHold = (id: number) => {
    let filteredArray = holdsList.filter((item: HoldType) => item.id !== id);
    setHoldList(filteredArray);
  };

  const undoHold = () => {
    let slicedArray = holdsList.slice(0, -1);
    setHoldList(slicedArray);
  };

  return (
    <section
      className='h-full pt-2 bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${explore})` }}
    >
      {step ? (
        <EditToolbar
          setHoldColor={setHoldColor}
          holdColor={holdColor}
          setHoldRadius={setHoldRadius}
          holdRadius={holdRadius}
          undoHold={undoHold}
          setStep={setStep}
          holdsListLen={holdsList.length}
        />
      ) : (
        <SaveToolbar setStep={setStep} route={holdsList} user={user} />
      )}
      <RouteImage>
        <HoldsContainer route={holdsList} onDelHold={delHold} step={step} />
        <ClickableArea step={step} addHold={addHold} />
      </RouteImage>
    </section>
  );
}
