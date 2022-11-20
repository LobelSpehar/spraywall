import React from 'react';

function ToolBarRow({ children }: { children: JSX.Element[] | JSX.Element }) {
  return <div className='flex justify-around  my-2'>{children}</div>;
}

export default ToolBarRow;
