import Link from 'next/link';

export default function Signin() {
  return (
    <div className='flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <Link
        href='/auth/register'
        className='font-medium text-indigo-600 hover:text-indigo-500'
      >
        Don&apos;t have an account?
      </Link>
    </div>
  );
}
