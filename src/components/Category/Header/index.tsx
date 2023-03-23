export default function Header({ category }: { category: string }) {
  return (
    <header className='w-full py-5'>
      <h2 className='text-3xl font-bold capitalize text-primary'>{category}</h2>
    </header>
  );
}
