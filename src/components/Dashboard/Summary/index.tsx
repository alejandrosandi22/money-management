import {
  IconBusinessplan,
  IconCoin,
  IconReceipt,
  IconScale,
} from '@tabler/icons-react';
import SummaryBox from './SummaryBox';

export default function Summary() {
  return (
    <div className='grid grid-cols-4 gap-2.5'>
      <SummaryBox
        amount='$1,256.99'
        caption='Incomes'
        icon={<IconCoin size={32} className='text-primary' />}
      />
      <SummaryBox
        amount='$899.99'
        caption='Expenses'
        icon={<IconReceipt size={32} className='text-primary' />}
      />
      <SummaryBox
        amount='$899.00'
        caption='Balance'
        icon={<IconScale size={32} className='text-primary' />}
      />
      <SummaryBox
        amount='$458.65'
        caption='Investment'
        icon={<IconBusinessplan size={32} className='text-primary' />}
      />
    </div>
  );
}
