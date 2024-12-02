import Image from 'next/image';
import Link from 'next/link';

import { VehicleApiService } from '@/services/vehicle';
import SelectVehicleMaker from '@/features/vehicle/select-vehicle';

import mainLogo from '../../public/logo.png';

export default async function Home() {
  const makers = await VehicleApiService.getVehicleMakers();

  const buildedOptions = makers.map((maker) => ({
    id: String(maker.MakeId),
    title: maker.MakeName,
  }));

  return (
    <div>
      <header>
        <nav className='border-gray-200 bg-white px-4 py-2.5 shadow-lg shadow-slate-900/20 lg:px-6'>
          <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
            <Link href='/' className='flex items-center'>
              <Image
                src={mainLogo}
                className='h-10 w-11 shrink-0 shadow-indigo-500/50'
                alt='Flowbite Logo'
              />
              <span className='self-center whitespace-nowrap font-mono text-xl text-gray-700'>
                CarFinder
              </span>
            </Link>
            <div className='flex items-center lg:order-2'>
              <Link
                href='/'
                className='block rounded py-2 pl-3 pr-4 font-mono text-gray-700 lg:p-0'
                aria-current='page'
              >
                Info
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className='flex h-[calc(100vh-101px)] flex-col items-center justify-center px-10'>
          <p className='mb-5 text-center font-mono text-4xl font-semibold'>
            Find your ideal car effortlessly with our comprehensive app 🚗✨
          </p>
          <SelectVehicleMaker options={buildedOptions} />
        </div>
      </main>
      <footer className='border-t border-gray-200 bg-white px-4 py-2.5'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-center'>
          <Link href='https://github.com/vliashenko' className='flex items-center'>
            <p className='self-center whitespace-nowrap font-mono text-sm text-gray-700'>
              @vliashenko
            </p>
          </Link>
        </div>
      </footer>
    </div>
  );
}
