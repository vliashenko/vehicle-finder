import { VehicleApiService } from '@/services/vehicle';

export default async function VehiclesPage({
  params,
}: {
  params: Promise<{ makeId: string; year: string }>;
}) {
  const { makeId, year } = await params;

  const result = await VehicleApiService.getVehiclesByIDAndYear({ makeId, year });

  return (
    <div className='mt-10 flex flex-col items-center justify-center px-10'>
      <h1 className='font-mono text-lg'>Results we have found:</h1>
      <div className='grid w-screen gap-2 p-4 lg:grid-cols-2'>
        {result.map((car, i) => (
          <div
            key={i}
            className='flex items-center justify-between rounded-lg bg-white p-4 text-gray-500 shadow'
          >
            <div className='flex flex-col space-y-1'>
              <h2 className='text-lg font-semibold'>{car.Make_Name}</h2>
              <p className='text-sm'>{car.Model_Name}</p>
            </div>
            <div className='flex flex-col items-end space-y-1'>
              <div className='text-sm'>modelId: {car.Model_ID}</div>
              <div className='text-sm'>makerId: {car.Make_ID}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const makes = await VehicleApiService.getVehicleMakers();
  const years = await VehicleApiService.getVehicleMakeYears();

  const paths = makes.flatMap((make) => {
    return years.map((year) => ({
      params: {
        makeId: make.MakeId.toString(),
        year: year.title,
      },
    }));
  });

  return paths;
}
