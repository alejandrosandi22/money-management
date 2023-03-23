import { SummaryBoxProps } from '../../../../types/Dashboard';
import SummaryDropdown from '../../components/SummaryDropdown';

export default function SummaryBox({ caption, amount, icon }: SummaryBoxProps) {
  return (
    <div className='rounded-md bg-white p-8'>
      <div className='flex w-full justify-end'>
        <SummaryDropdown />
      </div>
      <div className='flex items-center justify-start'>
        <div className='rounded-full bg-[#EEF7FB] p-4'>{icon}</div>
      </div>
      <div className='mt-5'>
        <h6 className='text-xl font-medium text-gray-500'>{caption}</h6>
        <h4 className='text-3xl font-medium text-primary'>{amount}</h4>
      </div>
    </div>
  );
}
