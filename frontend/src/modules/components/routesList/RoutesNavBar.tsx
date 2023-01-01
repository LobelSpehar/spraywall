export function RoutesNavBar({
  minGrade,
  maxGrade,
  setMinGrade,
  setMaxGrade,
  gradesRange,
}: {
  minGrade: number;
  maxGrade: number;
  setMinGrade: Function;
  setMaxGrade: Function;
  gradesRange: Array<string>;
}) {
  return (
    <div className='flex justify-center mx-4 mb-2'>
      <select
        value={minGrade}
        onChange={(e) => {
          setMinGrade(+e.target.value);
          localStorage.setItem('minGrade', e.target.value);
        }}
        className='bg-indigo-100 text-indigo-500 rounded-full px-2 text-center mr-2'
      >
        {gradesRange
          .filter(
            (grade: string, index: number) => index < maxGrade && grade !== 'x'
          )
          .map((grade: string) => (
            <option key={grade} value={gradesRange.indexOf(grade)}>
              {grade}
            </option>
          ))}
      </select>
      <select
        value={maxGrade}
        onChange={(e) => {
          setMaxGrade(+e.target.value);
          localStorage.setItem('maxGrade', e.target.value);
        }}
        className='bg-indigo-100 text-indigo-500 rounded-full px-2 text-center'
      >
        {gradesRange
          .filter((grade: string, index: number) => index > minGrade)
          .map((grade: string) => (
            <option key={grade} value={gradesRange.indexOf(grade)}>
              {grade}
            </option>
          ))}
      </select>
    </div>
  );
}
