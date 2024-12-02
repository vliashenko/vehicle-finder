import { VehicleApiService } from '@/services/vehicle';
import SelectVehicleForm from '@/features/vehicle/select-vehicle';

export default async function Home() {
  const makers = await VehicleApiService.getVehicleMakers();
  const years = await VehicleApiService.getVehicleMakeYears();

  const makerOptions = makers.map((maker) => ({
    id: String(maker.MakeId),
    title: maker.MakeName,
  }));

  return (
    <div>
      <main className='my-auto'>
        <div className='flex h-[calc(100vh-101px)] flex-col items-center justify-center px-10'>
          <p className='mb-5 text-center font-mono text-4xl font-semibold'>
            Find your ideal car effortlessly with our comprehensive app 🚗✨
          </p>
          <div className='flex w-[70vw] flex-col items-center justify-center'>
            <h3 className='mb-10 mt-4 text-center font-mono'>
              Select a car maker and a year of production to see the results
            </h3>
            <SelectVehicleForm makerOptions={makerOptions} yearOptions={years} />
          </div>
        </div>
      </main>
    </div>
  );
}
