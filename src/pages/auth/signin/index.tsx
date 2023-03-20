import Link from 'next/link';
import AuthForm from '../../../commons/components/AuthForm';
import SEOLayout from '../../../commons/components/Layouts/SEOLayout';

export default function Signin() {
  return (
    <SEOLayout pageTitle='Sign In'>
      <div className='flex h-full min-h-screen w-full items-center justify-center'>
        <div className='w-full max-w-md space-y-8'>
          <h1 className='text-center text-3xl font-extrabold text-primary'>
            Sign in
          </h1>
          <AuthForm type='signin' />
          <div className='flex justify-center gap-1'>
            Do you have an account?
            <Link
              href='/auth/register'
              className='font-medium text-secondary hover:text-secondary/75'
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </SEOLayout>
  );
}
