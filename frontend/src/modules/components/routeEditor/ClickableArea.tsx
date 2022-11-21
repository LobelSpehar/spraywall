export function ClickableArea({
  step,
  addHold,
}: {
  step: number;
  addHold: Function;
}) {
  return (
    <div
      onClick={(e) => {
        if (step) {
          addHold(e);
        }
      }}
      className='z-10 relative -top-[100%] w-full h-full'
    ></div>
  );
}
