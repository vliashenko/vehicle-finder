import {
  GetVehicleByIdAndModelRes,
  GetVehicleModelsRes,
  Vehicle,
  VehicleModel,
} from '@/entities/models/vehicle/type';

const buildVehicles = (res: Vehicle[]) => {
  return res.reduce((acc: Vehicle[], curr: Vehicle) => {
    if (curr.Make_ID || curr.Model_Name) {
      acc.push(curr);
    }

    return acc;
  }, []);
};

const buildVehicleModels = (res: VehicleModel[]) => {
  return res.reduce((acc: VehicleModel[], curr: VehicleModel) => {
    if (curr.Make_ID || curr.Make_Name) {
      acc.push(curr);
    }

    return acc;
  }, []);
};

export async function getVehicleModels(): Promise<VehicleModel[]> {
  let response;
  try {
    response = (await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`,
    ).then((response) => response.json())) as GetVehicleModelsRes;
  } catch (error) {
    console.error('Failed to fetch vehicle models:', error);
    throw error;
  }

  let vehicleModels;
  try {
    vehicleModels = buildVehicleModels(response.Results);
  } catch (error) {
    console.error('Failed to build vehicle model:', error);
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
