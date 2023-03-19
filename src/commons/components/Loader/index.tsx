import { Transition } from '@headlessui/react';
import { Ripples } from '@uiball/loaders';
import { LoaderProps } from '../../../types';

export default function Loader({ loading }: LoaderProps) {
  return (
    <>
      <Transition
        show={loading}
        enter='transition-all duration-300'
        enterFrom='opacity-0 transform -translate-x-full'
        enterTo='opacity-100 transform translate-x-0'
        leave='transition-all duration-300'
        leaveFrom='opacity-100 transform translate-x-0'
        leaveTo='opacity-0 transform -translate-x-full'
        className='fixed z-100 h-screen w-full'
      >
        <div className='flex h-full w-full items-center justify-center bg-white/40 backdrop-blur-sm'>
          <Ripples size={75} speed={2} color='#000A14' />
        </div>
      </Transition>
    </>
  );
}
