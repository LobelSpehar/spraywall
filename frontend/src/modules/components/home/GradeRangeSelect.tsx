export function GradeRangeSelect({
  minGrade,
  gradesRange,
  maxGrade,
  setMaxGrade,
  setMinGrade,
}: {
  minGrade: number;
  gradesRange: Array<string>;
  maxGrade: number;
  setMaxGrade: Function;
  setMinGrade: Function;
}) {
  return (
    <div className='mx-auto w-fit p-4'>
      <select
        value={minGrade}
        onChange={(e) => {
          setMinGrade(+e.target.value);
          localStorage.setItem('minGrade', e.target.value);
        }}
        className='bg-secondary rounded text-center mx-2'
      >
        {gradesRange
          .filter((grade: string, index: number) => index < maxGrade)
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
        className='bg-secondary rounded text-center mx-2'
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
