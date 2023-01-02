export function MenuButton({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: Function;
}) {
  return (
    <button onClick={(e) => setMenu(!menu)} className='fixed p-4'>
      <div
        className={
          'h-1 mt-1 bg-gray-400 rounded-full duration-500' +
          (menu ? ' w-7' : ' w-6')
        }
      ></div>
      <div
        className={
          'h-1 mt-1 bg-gray-400 rounded-full duration-500' +
          (menu ? ' w-7' : ' w-5')
        }
      ></div>
      <div
        className={
          'h-1 mt-1 bg-gray-400 rounded-full duration-500' +
          (menu ? ' w-7' : ' w-4')
        }
      ></div>
    </button>
  );
}
