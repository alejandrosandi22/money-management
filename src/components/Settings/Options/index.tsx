export default function Options() {
  return (
    <div className='space-y-3 rounded-md bg-white py-4 px-8'>
      <div className='flex items-center justify-between'>
        <span className='font-medium'>Picture</span>
        <img
          className='h-11 w-11 rounded'
          src='/22.jpg'
          alt='User Profile Picture'
        />
      </div>
      <div className='flex items-center justify-between'>
        <span className='font-medium'>Name</span>
        <span>Thomas Gould</span>
      </div>
      <div className='flex items-center justify-between'>
        <span className='font-medium'>Email</span>
        <span>thomasgould@gmail.com</span>
      </div>
      <div className='flex justify-end gap-2.5 pt-3'>
        <button
          type='submit'
          className='inline-flex items-center rounded-md bg-primary py-3 px-5 text-center text-sm font-medium text-white hover:bg-primary-100'
        >
          <div className='flex w-max flex-nowrap'>Save changes</div>
        </button>
        <button
          type='button'
          className='inline-flex items-center rounded-md border border-gray-200 py-3 px-5 text-center text-sm font-medium text-primary hover:bg-gray-100'
        >
          <div className='flex w-max flex-nowrap'>Cancel</div>
        </button>
      </div>
    </div>
  );
}
