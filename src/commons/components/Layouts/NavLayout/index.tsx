import { NavLayoutProps } from '../../../../types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function NavLayout({ children }: NavLayoutProps) {
  return (
    <div className='grid-nav-layout h-screen bg-white'>
      <Navbar />
      <div>
        <Sidebar />
      </div>
      <div className='grid-layout-content bg-[#F3F4F6]'>{children}</div>
    </div>
  );
}
