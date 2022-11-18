import { HoldType } from 'modules/types';

export function ToolBtn({
  onClickHandler,
  value,
  icon,
  title,
  disabled,
}: {
  onClickHandler: Function;
  value: string | HoldType[];
  icon?: string;
  title: string;
  disabled?: boolean;
}) {
  return (
    <button
      className='w-8 h-8 bg-no-repeat bg-origin-content bg-contain bg-secondary border-2 border-b-4 rounded p-1 border-primary disabled:border-red-600'
      style={{
        backgroundImage: icon ? `url(${icon})` : '',
        borderBottomColor: typeof value === 'string' ? value : '',
      }}
      onClick={(e) => onClickHandler(value)}
      disabled={disabled}
      title={title}
    ></button>
  );
}
