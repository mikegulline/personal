import { differenceInMonths, format } from 'date-fns';

interface IFromTo {
  from: string;
  to: string;
}

export default function FromTo({ from, to }: IFromTo) {
  const [fYear, fMonth] = from.split('-').map(Number);
  const fromDate = new Date(fYear, fMonth - 1, 1);
  const fromShow = format(fromDate, 'MMM yyyy');

  let toDate: Date = new Date();
  let toShow = `Present`;

  if (to !== 'Present') {
    const [tYear, tMonth] = to.split('-').map(Number);
    toDate = new Date(tYear, tMonth - 1, 1);
    toShow = format(toDate, 'MMM yyyy');
  }

  const diff = differenceInMonths(toDate, fromDate) + 1;
  let diffShow = `${diff} mos`;
  if (diff >= 12) {
    diffShow = `${Math.floor(diff / 12)} yrs ${diff % 12} mos`;
  }
  return (
    <>
      {fromShow} to {toShow}
    </>
    // <>
    //   {fromShow} - {toShow} &middot; {diffShow}
    // </>
  );
}
