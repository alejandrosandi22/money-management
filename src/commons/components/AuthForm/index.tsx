import { IconArrowRight } from '@tabler/icons-react';
import { Ring } from '@uiball/loaders';
import { signIn } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import { AuthFormProps } from '../../../types';
import { IconFacebook, IconGoogle, IconSlack } from '../../utils/icons';

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    signIn('email', { email }).finally(() => setLoading(false));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-primary'
          >
            Email
          </label>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='name@domain.com'
            className='block w-full rounded border border-gray-300 p-2.5 text-gray-900 hover:bg-gray-100 focus:border-primary focus:ring-primary sm:text-sm'
          />
        </div>
        {type === 'signin' && (
          <div className='mb-6 mt-3'>
            <div className='flex items-start'>
              <div className='flex items-center'>
                <input
                  id='remember'
                  aria-describedby='remember'
                  type='checkbox'
                  className='focus:ring-3 h-4 w-4 rounded border border-gray-300 accent-primary focus:ring-primary'
                />
                <label
                  htmlFor='remember'
                  className='ml-2 text-base font-medium text-primary'
                >
                  Remember me
                </label>
              </div>
            </div>
          </div>
        )}
        <button className='hover-button mt-3 flex w-full justify-center gap-2 rounded bg-primary py-3 text-base font-medium text-white hover:bg-primary/95'>
          {loading ? (
            <div>
              <Ring size={24} color='#fff' />
            </div>
          ) : (
            <>
              Continue
              <IconArrowRight size={24} color='#fff' />
            </>
          )}
        </button>
      </form>
      <p className='w-full text-center text-base font-medium text-primary'>
        or sign up with
      </p>
      <div className='flex items-center justify-center gap-2.5'>
        <button className='grid place-items-center border border-gray-200 p-3 hover:bg-gray-100'>
          <IconGoogle />
        </button>
        <button className='grid place-items-center border border-gray-200 p-3 hover:bg-gray-100'>
          <IconFacebook />
        </button>
        <button className='grid place-items-center border border-gray-200 p-3 hover:bg-gray-100'>
          <IconSlack />
        </button>
      </div>
    </>
  );
}
