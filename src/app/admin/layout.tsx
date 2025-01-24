import { cookies } from 'next/headers';
import LoginWrapper from './components/login-wrapper';
import GridContainer from '@/components/grid-container';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const loggedInValue = await cookieStore;
  const isLoggedIn = !!loggedInValue.get('mg-logged-in')?.value || false;
  return (
    <GridContainer columns={4}>
      <LoginWrapper isLoggedIn={isLoggedIn}>{children}</LoginWrapper>
    </GridContainer>
  );
}
