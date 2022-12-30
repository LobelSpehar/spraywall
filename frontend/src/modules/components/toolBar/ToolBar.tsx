export function ToolBar({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <div className='min-w-[200px] mx-auto w-3/5 lg:w-1/3 h-30 px-2 flex flex-col'>
      {children}
    </div>
  );
}
