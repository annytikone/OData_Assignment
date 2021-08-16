import * as UserService from '../service/user.service';

export const getUserList = async (search: string, filter: any) => {
  try {
    return await UserService.getUserList(search, filter);
  } catch (err) {
    return err;
  }
};
