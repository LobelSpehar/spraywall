export function ToolBarRow({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return <div className='flex justify-around my-2'>{children}</div>;
}
