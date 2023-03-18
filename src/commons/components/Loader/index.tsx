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
      >
        <div className='absolute z-100 w-full h-screen place-items-center grid'>
          <Ripples size={75} speed={2} color='black' />
        </div>
      </Transition>
    </>
  );
}
