export function ToolBar({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <div className='min-w-[200px] fixed w-1/3 h-20 left-1/2 top-2 -translate-x-1/2 flex flex-col z-50'>
      {children}
    </div>
  );
}