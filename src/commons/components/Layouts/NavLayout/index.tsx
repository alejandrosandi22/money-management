import { NavLayoutProps } from '../../../../types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function NavLayout({ children }: NavLayoutProps) {
  return (
    <div className='grid-nav-layout h-screen overflow-hidden bg-[#F3F4F6]'>
      <Sidebar />
      <div className='w-full'>
        <Navbar />
        <div className='overflow-y-auto'>{children}</div>
      </div>
    </div>
  );
}
