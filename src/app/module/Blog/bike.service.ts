import QueryBuilder from '../../builder/QueryBuilder';
import { IBike } from './bike.interface';
import { Bike } from './bike.model';
import { BikeSearchableFields } from './bike.constant';

const createBikeIntoDB = async (payload: IBike) => {
  const result = await Bike.create(payload);
  console.log(result);
  return result;
};

const getAllBikesFromDB = async (query: Record<string, unknown>) => {
  const bikeQuery = new QueryBuilder(Bike.find(), query)
    .search(BikeSearchableFields)
    .filter()
    .sort();

  // Fetch results from the database
  const result = await bikeQuery.modelQuery.select('-__v').lean();
  return result;
};

const getSingleBikeFromDB = async (id: string) => {
  const result = await Bike.findById(id);
  return result;
};

const updateBikeIntoDB = async (id: string, payload: Partial<IBike>) => {
  const { ...bikeData } = payload;
  const modifiedUpdatedData: Record<string, unknown> = {
    ...bikeData,
  };
  const result = await Bike.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBikeIntoDB = async (bikeId: string) => {
  const bike = await Bike.findById(bikeId);
  if (!bike) {
    return null;
  }
  const result = await Bike.findByIdAndDelete(bikeId);
  return result;
};

export const BikeServices = {
  createBikeIntoDB,
  getAllBikesFromDB,
  getSingleBikeFromDB,
  updateBikeIntoDB,
  deleteBikeIntoDB,
};
