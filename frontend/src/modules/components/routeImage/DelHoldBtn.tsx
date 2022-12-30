export function DelHoldBtn({
  step,
  onDelHold,
  value,
}: {
  step?: number;
  onDelHold: Function;
  value: number;
}) {
  return (
    <button
      onClick={(e) => {
        if (step) {
          onDelHold(value);
        }
      }}
      className='w-full h-full'
    ></button>
  );
}
