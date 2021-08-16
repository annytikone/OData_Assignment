import fetch from 'node-fetch';
import config from '../config/config';

const baseUrl = config.ODATAURL;

export const getUserList = async (search: string, filter) => {
  let url = baseUrl;
  try {
    if (search) {
      url = `${baseUrl}('${search}')`;
    }
    if (filter && filter.Username) {
      url = `${baseUrl}?$filter=contains(Username, '${filter.Username}')`;
    }
    if (filter && filter.FirstName) {
      url = `${baseUrl}?$filter=contains(FirstName, '${filter.FirstName}')`;
    }
    const result = await fetch(url);

    return result.json();
  } catch (err) {
    console.log('something went wrong:', err);
    return err;
  }
};
