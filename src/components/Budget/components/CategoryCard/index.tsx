import Link from 'next/link';
import { CategoryCardProps } from '../../../../types/Budget';
import CategoryDropdown from '../../components/CategoryDropdown';

export default function CategoryCard({ caption, amount }: CategoryCardProps) {
  return (
    <Link href='/budget/category'>
      <div className='rounded-md border border-gray-200 p-8 hover:bg-gray-100'>
        <div className='flex w-full justify-end'>
          <CategoryDropdown />
        </div>
        <div className='mt-5'>
          <h6 className='text-xl font-medium text-gray-500'>{caption}</h6>
          <h4 className='text-3xl font-medium text-primary'>{amount}</h4>
        </div>
      </div>
    </Link>
  );
}
