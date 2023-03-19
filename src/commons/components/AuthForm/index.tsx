import { IconArrowRight } from '@tabler/icons-react';
import { useState } from 'react';
import { IconFacebook, IconGoogle, IconSlack } from '../../utils/icons';

interface AuthFormProps {
  type: 'register' | 'signin';
}

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState<string>('');
  return (
    <>
      <form>
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
            placeholder='email@domail.com'
            className='block w-full rounded border border-gray-300 p-2.5 text-gray-900 hover:bg-gray-100 focus:border-primary focus:ring-primary sm:text-sm'
          />
        </div>
        {type === 'signin' && (
          <div>
            <input type='checkbox' name='remember-me' id='remember-me' />
            Remember me
          </div>
        )}
        <button className='hover-button mt-3 flex w-full justify-center gap-2 rounded bg-primary py-3 text-base font-medium text-white hover:bg-primary/95'>
          Continue
          <IconArrowRight size={24} color='#fff' />
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
