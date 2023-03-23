import SearchForm from '../components/SearchForm';
import Table from '../components/Table';

export default function Board() {
  return (
    <div className='rounded-md bg-white p-2.5'>
      <div className='flex items-center justify-between py-2.5 px-5'>
        <SearchForm />
      </div>
      <Table />
    </div>
  );
}
