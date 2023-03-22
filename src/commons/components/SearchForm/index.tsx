import { IconSearch } from '@tabler/icons-react';

export default function SearchForm() {
  return (
    <form className='relative flex w-full max-w-sm items-center'>
      <label className='absolute left-2.5' htmlFor='search'>
        <IconSearch size={20} className='text-gray-400' color='currentColor' />
      </label>
      <input
        id='search'
        name='search'
        type='text'
        className='w-full rounded border border-gray-200 p-2.5 pl-10 placeholder:text-gray-400'
        placeholder='Search...'
      />
    </form>
  );
}
