import { useSession } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();
  return (
    <header className='w-full py-5'>
      <h2 className='text-3xl font-bold text-primary'>
        Welcome back, {session?.user?.name}!
      </h2>
    </header>
  );
}
