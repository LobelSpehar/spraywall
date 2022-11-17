import wall from 'assets/images/wall.jpg';
import { DraggableBtn } from 'modules/components/DraggableBtn';
import { useRef, useState, useEffect } from 'react';

function App() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [container, setContainer] = useState({ width: 0, height: 0 });
  const [holdsList, setHoldsList] = useState<any>([]);

  const addHold = () => {
    setHoldsList((current: any) => [...current, 1]);
  };
  useEffect(() => {
    setContainer({
      height: (imageRef.current != null && imageRef.current.offsetHeight) || 0,
      width: (imageRef.current != null && imageRef.current.offsetWidth) || 0,
    });
  }, [holdsList]);

  return (
    <div className='bg-primary h-full flex flex-col'>
      <div className=' w-full h-20 mx-auto my-2'>
        <div className='w-1/3 h-full bg-secondary mx-auto'>
          <button className='bg-accent h-10' onClick={addHold}>
            Add hold
          </button>
        </div>
      </div>
      <div className='mx-auto w-fit h-fit max-h-[calc(100vh-80px)] border border-accent border-4 mb-2'>
        <ul
          className='absolute'
          style={{
            width: `${container.width}px`,
            height: `${container.height}px`,
          }}
        >
          {holdsList.map((item: any, index: number) => (
            <DraggableBtn key={index} />
          ))}
        </ul>
        <img
          ref={imageRef}
          src={wall}
          alt='spraywall'
          className='max-h-full object-cover '
        ></img>
      </div>
    </div>
  );
}

export default App;
