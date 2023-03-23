import SearchForm from '../../../SearchForm';
import Dropdown from './Dropdown';
import Notifications from './Notifications';

export default function Navbar() {
  return (
    <nav className='grid-layout-navbar sticky top-0 flex h-20 items-center justify-between bg-white py-2.5 px-4'>
      <SearchForm />
      <ul className='flex items-center space-x-7'>
        <li>
          <Notifications />
        </li>
        <li>
          <Dropdown />
        </li>
      </ul>
    </nav>
  );
}
