import { differenceInMonths, format } from 'date-fns';

interface IFromTo {
  from: string;
  to: string;
}

export default function FromTo({ from, to }: IFromTo) {
  const fromDate = new Date(Date.parse(from));
  const fromShow = format(fromDate, 'MMM yyyy');

  let toDate: Date = new Date();
  let toShow = `Present`;

  if (to !== 'Present') {
    toDate = new Date(Date.parse(to));
    toShow = format(toDate, 'MMM yyyy');
  }

  const diff = differenceInMonths(toDate, fromDate) + 1;
  let diffShow = `${diff} mos`;
  if (diff >= 12) {
    diffShow = `${Math.floor(diff / 12)} yrs ${diff % 12} mos`;
  }
  return (
    <>
      {fromShow} - {toShow} &middot; {diffShow}
    </>
  );
}
