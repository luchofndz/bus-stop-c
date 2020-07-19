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

// Commented because is made with localStorage on Saga file
// and have no api to post
export const setDonation = (value) => {
  return new Promise((resolve, reject) => {
  //   axios
  //     .post('jsonFiles/busStopApi.json', data)
  //     .then(({ data }) => { 
  //       resolve(data);
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     });
  });
};