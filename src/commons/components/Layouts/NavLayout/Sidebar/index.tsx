import {
  IconChartAreaLine,
  IconCoin,
  IconLayoutDashboard,
  IconReceipt,
  IconSettings,
} from '@tabler/icons-react';
import Link from 'next/link';
import { IconApp } from '../../../../utils/icons';

export default function Sidebar() {
  return (
    <aside className='h-full w-64 space-y-8 bg-primary'>
      <ul className='w-full px-2.5 pt-2.5'>
        <li>
          <Link
            className='flex items-center gap-2.5 rounded p-3 text-2xl font-medium text-white'
            href='/'
          >
            <IconApp size={24} color='#fff' />
            <span>Management</span>
          </Link>
        </li>
      </ul>
      <ul className='w-full space-y-5 px-2.5'>
        <li>
          <Link
            className='flex gap-2.5 rounded p-3 text-base font-medium text-white hover:bg-primary-100'
            href='/'
          >
            <IconLayoutDashboard size={24} color='#fff' />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex gap-2.5 rounded p-3 text-base font-medium text-white hover:bg-primary-100'
            href='/incomes'
          >
            <IconCoin size={24} color='#fff' />
            <span>Incomes</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex gap-2.5 rounded p-3 text-base font-medium text-white hover:bg-primary-100'
            href='/expenses'
          >
            <IconReceipt size={24} color='#fff' />
            <span>Expenses</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex gap-2.5 rounded p-3 text-base font-medium text-white hover:bg-primary-100'
            href='/budget'
          >
            <IconChartAreaLine size={24} color='#fff' />
            <span>Budget</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex gap-2.5 rounded p-3 text-base font-medium text-white hover:bg-primary-100'
            href='/settings'
          >
            <IconSettings size={24} color='#fff' />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
