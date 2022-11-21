export function MenuBtn({
  onClickHandler,
  value,
  icon,
  title,
  disabled,
}: {
  onClickHandler: Function;
  value: string;
  icon: string;
  title: string;
  disabled: boolean;
}) {
  return (
    <button
      className='w-10 h-10 bg-no-repeat bg-origin-content bg-contain text-center bg-secondary border-black border disabled:border-accent rounded p-1 m-2'
      style={{
        backgroundImage: icon ? `url(${icon})` : '',
      }}
      onClick={(e) => onClickHandler(value)}
      disabled={disabled}
      title={title}
    ></button>
  );
}
