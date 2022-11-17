import { useState } from 'react';

import Draggable from 'react-draggable';

export function DraggableBtn() {
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);
  return (
    <Draggable bounds='parent' handle='.handle'>
      <div className='group absolute'>
        <div
          className='flex'
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <div className='w-0 h-0'>
            <input
              className='w-20 opacity-0 group-hover:opacity-100 m-1 -translate-y-6'
              onChange={(e) => setWidth(+e.target.value)}
              type='range'
              min='30'
              max='200'
              value={width}
              id='myRange'
            ></input>
            <input
              className='w-20 opacity-0 group-hover:opacity-100 rotate-90 -translate-x-12 translate-y-2'
              onChange={(e) => setHeight(+e.target.value)}
              type='range'
              min='30'
              max='200'
              value={height}
              id='myRange'
            ></input>
          </div>
          <div className='grow handle border border-4 border-blueish rounded-full'></div>
        </div>
      </div>
    </Draggable>
  );
}
