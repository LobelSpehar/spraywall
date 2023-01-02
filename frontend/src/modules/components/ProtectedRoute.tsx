import { User } from 'firebase/auth';

import { Landing } from 'pages/Landing';
import { NavBar } from 'modules/components';

export const ProtectedRoute = ({
  children,
  user,
}: {
  children: JSX.Element | JSX.Element[];
  user: User | null;
}) => {
  if (!user) {
    return <Landing />;
  }
  return (
    <>
      <NavBar user={user} />
      {children}
    </>
  );
};
