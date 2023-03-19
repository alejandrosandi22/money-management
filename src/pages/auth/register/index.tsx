import Image from 'next/image';
import Link from 'next/link';
import AuthForm from '../../../commons/components/AuthForm';

export default function Register() {
  return (
    <div className='grid min-h-screen grid-cols-1 lg:grid-cols-2'>
      <div className='flex h-full w-full items-center justify-center'>
        <div className='w-full max-w-lg space-y-8'>
          <h1 className='text-center text-3xl font-extrabold text-primary'>
            Register
          </h1>
          <AuthForm type='register' />
          <div className='flex justify-center gap-1'>
            Already have an account?
            <Link
              href='/auth/signin'
              className='font-medium text-secondary hover:text-secondary/75'
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className='relative flex h-full w-full items-center justify-center'>
        <Image
          src='/images/bg-register.webp'
          alt='Register Background'
          fill
          className='object-cover brightness-75'
        />
        <div className='flex w-10/12 rounded-3xl bg-primary/25 px-11 py-6 text-2xl font-semibold text-white backdrop-blur-md 2xl:text-4xl'>
          With features for tracking expenses, increasing income, and budgeting,
          this app helps users stay on top of their money management.
        </div>
      </div>
    </div>
  );
}
