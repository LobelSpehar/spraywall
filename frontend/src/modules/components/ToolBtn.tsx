import { HoldType } from 'modules/types';

export function ToolBtn({
  onClickHandler,
  value,
  icon,
  title,
  disabled,
  text,
  borderColor,
}: {
  onClickHandler: Function;
  value: string | HoldType[] | number;
  icon?: string;
  title: string;
  disabled?: boolean;
  text?: string;
  borderColor?: string;
}) {
  return (
    <button
      className='w-10 h-10 bg-no-repeat bg-origin-content bg-contain text-center bg-secondary border-black border rounded p-1'
      style={{
        backgroundImage: icon ? `url(${icon})` : '',
        borderColor: borderColor,
      }}
      onClick={(e) => onClickHandler(value)}
      disabled={disabled}
      title={title}
    >
      <p className='font-bold'>{text}</p>
    </button>
  );
}
