import {
  GetVehicleByIdAndModelRes,
  GetVehicleModelsRes,
  Vehicle,
  VehicleMaker,
} from '@/entities/models/vehicle/type';

const makeYears = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const buildVehicles = (res: Vehicle[]) => {
  return res.reduce((acc: Vehicle[], curr: Vehicle) => {
    if (curr.Make_ID || curr.Model_Name) {
      acc.push(curr);
    }

    return acc;
  }, []);
};

const buildVehicleMakers = (res: VehicleMaker[]) => {
  return res.reduce((acc: VehicleMaker[], curr: VehicleMaker) => {
    if (curr.MakeId || curr.MakeName) {
      acc.push(curr);
    }

    return acc;
  }, []);
};

export async function getVehicleMakeYears(): Promise<{ title: string; id: string }[]> {
  return (await Promise.resolve(makeYears)).map((year) => ({ title: year, id: year }));
}

export async function getVehicleMakers(): Promise<VehicleMaker[]> {
  let response;
  try {
    response = (await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`,
    ).then((response) => response.json())) as GetVehicleModelsRes;
  } catch (error) {
    console.error('Failed to fetch vehicle makers:', error);
    throw error;
  }

  let vehicleModels;
  try {
    vehicleModels = buildVehicleMakers(response.Results);
  } catch (error) {
    console.error('Failed to build vehicle makers:', error);
    throw error;
  }

  return vehicleModels;
}

export async function getVehiclesByIDAndYear({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}): Promise<Vehicle[]> {
  let response;
  try {
    response = (await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    ).then((response) => response.json())) as GetVehicleByIdAndModelRes;
  } catch (error) {
    console.error('Failed to fetch vehicles:', error);
    throw error;
  }

  let vehicles;
  try {
    vehicles = buildVehicles(response.Results);
  } catch (error) {
    console.error('Failed to build vehicles:', error);
    throw error;
  }

  return vehicles;
}
