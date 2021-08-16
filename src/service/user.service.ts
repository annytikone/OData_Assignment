/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-multiple-empty-lines
import fetch from 'node-fetch';
import config from '../config/config';

const baseUrl = config.ODATAURL;

export const getUserList = async (search) => {
  let url = baseUrl;

  try {
    console.log('inside service');
    if (search) {
      url = `${baseUrl}('${search}')`;
    }
    const result = await fetch(url);

    return result.json();
  } catch (err) {
    console.log('something went wrong:', err);
    return err;
  }
};

export const getInfo = async (search, filter) => {
  let url = baseUrl;

  try {
    console.log('inside service');

    const result = await fetch(url);

    return result.json();
  } catch (err) {
    console.log('something went wrong:', err);
    return err;
  }
};
