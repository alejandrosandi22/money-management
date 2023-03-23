import { IconFilter } from '@tabler/icons-react';
import Table from './Table';

export default function TransactionHistory() {
  return (
    <div className='rounded-md bg-white p-2.5'>
      <div className='flex items-center justify-between py-2.5 px-5'>
        <h2 className='text-2xl font-medium text-primary'>
          Transaction History
        </h2>
        <div>
          <button
            type='button'
            className='inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-5 py-2.5 text-center text-sm font-medium text-primary hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-300'
          >
            Filter
            <IconFilter size={24} className='ml-2 -mr-1 text-primary' />
          </button>
        </div>
      </div>
      <Table />
    </div>
  );
}
