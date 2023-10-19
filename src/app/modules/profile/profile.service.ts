import { IUser } from '../user/user.interface';
import { User } from '../user/user.modal';

const GetProfile = async (id: string) => {
  const profile = await User.findById(id);
  return profile;
};

const UpdateProfile = async (id: string, payload: Partial<IUser>) => {
  const profile = await User.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return profile;
};

export const ProfileService = {
  GetProfile,
  UpdateProfile,
};
