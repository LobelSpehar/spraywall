import { User } from 'firebase/auth';
import { NavBar } from 'modules/components/navBar/NavBar';
import { Landing } from 'pages/Landing';

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
