import Image from 'next/image';
import mainLogo from '../../public/logo.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <nav className='border-gray-200 bg-white px-4 py-2.5 shadow-lg shadow-slate-900/20 lg:px-6'>
          <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
            <a href='https://flowbite.com' className='flex items-center'>
              <Image
                src={mainLogo}
                className='h-10 w-11 shrink-0 shadow-indigo-500/50'
                alt='Flowbite Logo'
              />
              <span className='self-center whitespace-nowrap text-xl font-semibold text-gray-700'>
                CarFinder
              </span>
            </a>
            <div className='flex items-center lg:order-2'>
              <Link
                href='/'
                className='bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-gray-700 lg:p-0'
                aria-current='page'
              >
                Info
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
}
