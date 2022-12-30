export function TableHead({}) {
  return (
    <thead className='bg-white border-b'>
      <tr>
        <th
          scope='col'
          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
        >
          Name
        </th>
        <th
          scope='col'
          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
        >
          Grade
        </th>
        <th
          scope='col'
          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
        >
          Setter
        </th>
        <th
          scope='col'
          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
        >
          Date
        </th>
      </tr>
    </thead>
  );
}
