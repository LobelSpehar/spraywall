import { profile } from 'assets/svg';
import { User } from 'firebase/auth';

export function Profile({ user }: { user: User | null }) {
  return (
    <section
      className='h-full w-full pt-10 bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${profile})` }}
    >
      my profile {user?.displayName}
    </section>
  );
}
