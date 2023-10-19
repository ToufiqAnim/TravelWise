import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { ISignIn } from './auth.interface';
import { AuthUtils } from './auth.utils';

const SignUp = async (payload: IUser) => {
  payload.password = await AuthUtils.hashPassword(payload.password);
  const user = await User.create(payload);
  return user;
};

const SignIn = async (payload: ISignIn) => {
  const { email, password } = payload;
  const userExist = await User.findOne({ email }).lean();
  if (!userExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User account not found');
  }
  // Check Password
  if (!(await AuthUtils.matchedPassword(password, userExist.password))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User credentials is wrong');
  }

  const tokenPayload = { _id: userExist._id, role: userExist.role };
  const accessToken = jwtHelpers.createToken(
    tokenPayload,
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  return { ...userExist, accessToken };
};
export const AuthService = { SignUp, SignIn };
