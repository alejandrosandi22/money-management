import { Menu, Transition } from '@headlessui/react';
import { IconBell } from '@tabler/icons-react';
import { Fragment } from 'react';

export default function Notifications() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full items-center justify-center space-x-2.5 text-base font-medium hover:text-gray-500'>
          <IconBell size={24} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='z-20 w-96 divide-y divide-gray-100 rounded-lg bg-white shadow'>
            <Menu.Item>
              <div className='w-full'>
                <div className='block rounded-t-lg bg-gray-50 px-4 py-2 text-center font-medium text-gray-700'>
                  Notifications
                </div>
                <div className='divide-y divide-gray-100'>
                  <a href='#' className='flex px-4 py-3 hover:bg-gray-100'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-11 w-11 rounded-full'
                        src='https://flowbite.com/docs/images/people/profile-picture-1.jpg'
                        alt='Jese image'
                      />
                      <div className='absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-blue-600'>
                        <svg
                          className='h-3 w-3 text-white'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
                          <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
                        </svg>
                      </div>
                    </div>
                    <div className='w-full pl-3'>
                      <div className='mb-1.5 text-sm text-gray-500 dark:text-gray-400'>
                        New message from{' '}
                        <span className='font-semibold text-gray-900'>
                          Jese Leos
                        </span>
                        : "Hey, what's up? All set for the presentation?"
                      </div>
                      <div className='text-xs text-blue-600 dark:text-blue-500'>
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a href='#' className='flex px-4 py-3 hover:bg-gray-100'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-11 w-11 rounded-full'
                        src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
                        alt='Bonnie image'
                      />
                      <div className='absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-600'>
                        <svg
                          className='h-3 w-3 text-white'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className='w-full pl-3'>
                      <div className='mb-1.5 text-sm text-gray-500 dark:text-gray-400'>
                        <span className='font-semibold text-gray-900'>
                          Bonnie Green
                        </span>{' '}
                        and{' '}
                        <span className='font-medium text-gray-900'>
                          141 others
                        </span>{' '}
                        love your story. See it and view more stories.
                      </div>
                      <div className='text-xs text-blue-600 dark:text-blue-500'>
                        44 minutes ago
                      </div>
                    </div>
                  </a>
                  <a href='#' className='flex px-4 py-3 hover:bg-gray-100'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-11 w-11 rounded-full'
                        src='https://flowbite.com/docs/images/people/profile-picture-4.jpg'
                        alt='Leslie image'
                      />
                      <div className='absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400'>
                        <svg
                          className='h-3 w-3 text-white'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className='w-full pl-3'>
                      <div className='mb-1.5 text-sm text-gray-500 dark:text-gray-400'>
                        <span className='font-semibold text-gray-900'>
                          Leslie Livingston
                        </span>{' '}
                        mentioned you in a comment:{' '}
                        <span className='font-medium text-blue-500'>
                          @bonnie.green
                        </span>{' '}
                        what do you say?
                      </div>
                      <div className='text-xs text-blue-600 dark:text-blue-500'>
                        1 hour ago
                      </div>
                    </div>
                  </a>
                  <a href='#' className='flex px-4 py-3 hover:bg-gray-100'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-11 w-11 rounded-full'
                        src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                        alt='Robert image'
                      />
                      <div className='absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500'>
                        <svg
                          className='h-3 w-3 text-white'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
                        </svg>
                      </div>
                    </div>
                    <div className='w-full pl-3'>
                      <div className='mb-1.5 text-sm text-gray-500 dark:text-gray-400'>
                        <span className='font-semibold text-gray-900'>
                          Robert Brown
                        </span>{' '}
                        posted a new video: Glassmorphism - learn how to
                        implement the new design trend.
                      </div>
                      <div className='text-xs text-blue-600 dark:text-blue-500'>
                        3 hours ago
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
