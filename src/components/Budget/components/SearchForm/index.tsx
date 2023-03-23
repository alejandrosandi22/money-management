import { IconSearch } from '@tabler/icons-react';

export default function SearchForm() {
  return (
    <form className='inline-flex w-full items-center gap-2.5'>
      <div className='relative flex w-full items-center'>
        <label className='absolute left-2.5 w-auto' htmlFor='search'>
          <IconSearch
            size={20}
            className='text-gray-400'
            color='currentColor'
          />
        </label>
        <input
          id='search'
          name='search'
          type='text'
          className='w-full rounded-md border border-gray-200 py-2.5 pr-3 pl-10 text-base placeholder:text-gray-400'
          placeholder='Search...'
        />
      </div>
      <div className='w-full max-w-min'>
        <button
          type='button'
          className='inline-flex items-center rounded-md bg-primary py-3 px-5 text-center text-sm font-medium text-white hover:bg-primary-100'
        >
          <div className='flex w-max flex-nowrap'>Add Income</div>
        </button>
      </div>
    </form>
  );
}
