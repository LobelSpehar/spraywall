import { favourite } from 'assets/svg';
import { User } from 'firebase/auth';

export function Favourites({ user }: { user: User | null }) {
  return (
    <section
      className='h-full w-full pt-10 bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${favourite})` }}
    >
      Favourites
    </section>
  );
}
