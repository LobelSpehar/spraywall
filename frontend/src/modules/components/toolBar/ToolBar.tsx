export function ToolBar({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <div className='w-[250px] mx-auto h-30 px-2 flex flex-col backdrop-blur-lg'>
      {children}
    </div>
  );
}
