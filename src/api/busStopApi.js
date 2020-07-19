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

export const setDonation = (value) => {
  return new Promise((resolve, reject) => {
    const json = {
      "objectiveTarget": 700,
      "busStops": [
          {
              "name": "a",
              "amount": 700,
              "lastAmount": 30
          },
          {
              "name": "b",
              "amount": 300,
              "lastAmount": 40
          },
          {   "name": "c", 
              "amount": 150,
              "lastAmount": 70
          },
          {
              "name": "d",
              "amount": 400,
              "lastAmount": 230
          },
          {   "name": "e", 
              "amount": 450,
              "lastAmount": 30
          }
      ],
      "string": "Hello World"
    };

    axios
      .post('jsonFiles/busStopApi.json', json)
      .then(({ data }) => { 
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};