import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { tourismServiceSearchableFields } from './tourism.constant';
import { ITourismService, ITourismServiceSearch } from './tourism.interface';
import { TourismService } from './tourism.model';

const CreateTourismService = async (payload: ITourismService) => {
  const tourismService = await TourismService.create(payload);
  return tourismService;
};
const GetTourismServices = async (
  paginationOptions: IPaginationOptions,
  filtersOptions: ITourismServiceSearch
) => {
  // Pagination Options
  const { skip, page, limit, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  // Sort condition
  const sortCondition: { [key: string]: SortOrder } = {};
  sortCondition[sortBy] = sortOrder;

  // Filter Options
  const { searchTerm, ...filtersData } = filtersOptions;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: tourismServiceSearchableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereCondition = Object.keys(andConditions).length
    ? { $and: andConditions }
    : {};

  const tourismServices = await TourismService.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await TourismService.find(whereCondition).count();

  const meta = { page, limit, total };

  return { meta, data: tourismServices };
};
const GetTourismService = async (id: string) => {
  const tourismService = await TourismService.findById(id);
  return tourismService;
};

const UpdateTourismService = async (
  id: string,
  payload: Partial<ITourismService>
) => {
  const tourismService = await TourismService.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return tourismService;
};

const DeleteTourismService = async (id: string) => {
  const tourismService = await TourismService.findByIdAndDelete(id);
  return tourismService;
};
export const TourismServices = {
  CreateTourismService,
  GetTourismServices,
  GetTourismService,
  UpdateTourismService,
  DeleteTourismService,
};
