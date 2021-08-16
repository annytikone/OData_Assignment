/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-multiple-empty-lines
import * as UserService from '../service/user.service';

export const getUserList = async (search) => {
  try {
    console.log('controller call');
    return await UserService.getUserList(search);
  } catch (err) {
    return err;
  }
};
