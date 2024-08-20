import GridContainer from '@/components/grid-container';

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GridContainer columns={4}>{children}</GridContainer>;
}
