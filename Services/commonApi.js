import axios from 'axios';

export const commonAPI = async (httpMethod, url, reqBody = null) => {
  const reqConfig = {
    method: httpMethod,
    url: url,
    data: reqBody,
  };
  return await axios(reqConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
