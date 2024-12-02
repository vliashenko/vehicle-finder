export interface GetVehicleByIdAndModelRes {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: Vehicle[];
}

export interface GetVehicleModelsRes {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleMaker[];
}

export interface Vehicle {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface VehicleMaker {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}
