import wall from 'assets/images/spraywall.jpg';

export function RouteImage({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${wall})`,
      }}
      className='aspect-[3/4] bg-contain bg-no-repeat mx-auto max-w-full h-[110vw] lg:max-h-[calc(100vh-160px)]'
    >
      {children}
    </div>
  );
}
