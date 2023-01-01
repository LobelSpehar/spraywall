import { HoldType } from 'modules/types';

export function ToolBtn({
  onClickHandler,
  current,
  value,
  icon,
  title,
  disabled,
  text,
}: {
  onClickHandler: Function;
  current?: string | number;
  value?: string | HoldType[] | number;
  icon?: string;
  title: string;
  disabled?: boolean;
  text?: string;
}) {
  return (
    <button
      className='w-10 h-10 bg-no-repeat bg-origin-content bg-contain text-center bg-gray-100 border border-gray-500 rounded p-1'
      style={{
        backgroundImage: icon ? `url(${icon})` : '',
        backgroundColor: current === value ? 'lightgray' : '',
      }}
      onClick={(e) => onClickHandler(value)}
      disabled={disabled}
      title={title}
    >
      <p className='font-bold'>{text}</p>
    </button>
  );
}
