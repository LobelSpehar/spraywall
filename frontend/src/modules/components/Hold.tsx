export function Hold({
  x,
  y,
  color,
  radius,
  children,
}: {
  x: number;
  y: number;
  color: string;
  radius: number;
  children?: JSX.Element;
}) {
  return (
    <li
      className='z-20 border max-w-[30%] max-h-[30%] border-[6px] absolute rounded-full  -translate-x-1/2 -translate-y-1/2 overflow-hidden'
      style={{
        width: radius + '%',
        height: +radius * 0.75 + '%',
        left: x * 100 + '%',
        top: y * 100 + '%',
        borderColor: color,
      }}
    >
      {children}
    </li>
  );
}
