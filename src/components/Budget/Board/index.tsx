import {
  IconBusinessplan,
  IconCoin,
  IconReceipt,
  IconScale,
} from '@tabler/icons-react';
import CategoryCard from '../components/CategoryCard';
import SearchForm from '../components/SearchForm';

export default function Board() {
  return (
    <div className='rounded-md bg-white p-2.5'>
      <div className='flex items-center justify-between py-2.5 px-5'>
        <SearchForm />
      </div>
      <div className='grid grid-cols-4 gap-2.5'>
        <CategoryCard
          amount='Category'
          caption='$10.00 /per month'
          icon={<IconCoin size={32} className='text-primary' />}
        />
        <CategoryCard
          amount='Category'
          caption='$10.00 /per month'
          icon={<IconReceipt size={32} className='text-primary' />}
        />
        <CategoryCard
          amount='Category'
          caption='$10.00 /per month'
          icon={<IconScale size={32} className='text-primary' />}
        />
        <CategoryCard
          amount='Category'
          caption='$10.00 /per month'
          icon={<IconBusinessplan size={32} className='text-primary' />}
        />
      </div>
    </div>
  );
}
