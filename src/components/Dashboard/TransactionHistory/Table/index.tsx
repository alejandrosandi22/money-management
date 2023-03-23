import TableDropdown from '../../components/TableDropdown';

export default function Table() {
  return (
    <div className='relative'>
      <table className='w-full text-left text-sm text-gray-500'>
        <thead className='bg-gray-50 text-xs uppercase text-gray-700'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              ID
            </th>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Amount
            </th>
            <th scope='col' className='px-6 py-3'>
              Exchange Rate
            </th>
            <th scope='col' className='px-6 py-3'>
              Type
            </th>
            <th scope='col' className='px-6 py-3'>
              Account
            </th>
            <th scope='col' className='px-6 py-3'>
              Date
            </th>
            <th scope='col' className='px-6 py-3'></th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b bg-white'>
            <th
              scope='row'
              className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
            >
              1
            </th>
            <td className='px-6 py-4'>Salary deposit</td>
            <td className='px-6 py-4'>$250,000.00</td>
            <td className='px-6 py-4'>₡560.00</td>
            <td className='px-6 py-4'>
              <span className='mr-2 rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800'>
                Income
              </span>
            </td>
            <td className='px-6 py-4'>Businesses</td>
            <td className='px-6 py-4'>15/02/2023</td>
            <td className='px-6 py-4'>
              <TableDropdown />
            </td>
          </tr>
          <tr className='border-b bg-white'>
            <th
              scope='row'
              className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
            >
              2
            </th>
            <td className='px-6 py-4'>Gym monthly payment</td>
            <td className='px-6 py-4'>₡35.00</td>
            <td className='px-6 py-4'>₡525.00</td>
            <td className='px-6 py-4'>
              <span className='mr-2 rounded-md bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800'>
                Spent
              </span>
            </td>
            <td className='px-6 py-4'>Businesses</td>
            <td className='px-6 py-4'>15/02/2023</td>
            <td className='px-6 py-4'>
              <TableDropdown />
            </td>
          </tr>
          <tr className='bg-white'>
            <th
              scope='row'
              className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
            >
              3
            </th>
            <td className='px-6 py-4'>Service payment</td>
            <td className='px-6 py-4'>₡70,000.00</td>
            <td className='px-6 py-4'>₡600.00</td>
            <td className='px-6 py-4'>
              <span className='mr-2 rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800'>
                Income
              </span>
            </td>
            <td className='px-6 py-4'>Businesses</td>
            <td className='px-6 py-4'>15/02/2023</td>
            <td className='px-6 py-4'>
              <TableDropdown />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
