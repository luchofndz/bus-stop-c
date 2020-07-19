import axios from 'axios';

export const getAllBusStops = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('jsonFiles/busStopApi.json')
      .then(({ data }) => { 
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
