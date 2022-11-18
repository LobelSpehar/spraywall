import React from 'react';

function ToolBarRow({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <div className='bg-secondary rounded flex justify-around py-1 px-1 mb-1 h-10'>
      {children}
    </div>
  );
}

export default ToolBarRow;
