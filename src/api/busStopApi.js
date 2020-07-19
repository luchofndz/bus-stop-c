import axios from 'axios';

export const getAllBusStops = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('jsonFiles/busStopApi.json')
      .then(({ data }) => { 
        // let localData = data;
        // if (localStorage.getItem('busStopStorage2')) {
        //   try {
        //     localData = JSON.parse((localStorage.getItem('busStopStorage2')));
        //     resolve(localData);
        //   } catch {
        //     localData = (localStorage.getItem('busStopStorage2'));
        //     resolve(localData);
        //   }
        // } else {
        //   localStorage.setItem('busStopStorage2', data);
          resolve(data);
        // }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const setDonation = (value) => {
  console.log("value: ", value);
  return new Promise((resolve, reject) => {
    let data = localStorage.getItem('busStopStorage2');
    data.busStop[2].amount = 700;
    // const data = {
    //   objectiveTarget: 700,
    //   busStops: [
    //       {
    //           name: "a",
    //           amount: 700,
    //           lastAmount: 30
    //       },
    //       {
    //           name: "b",
    //           amount: 300,
    //           lastAmount: 40
    //       },
    //       {   name: "c", 
    //           amount: 650,
    //           lastAmount: 70
    //       },
    //       {
    //           name: "d",
    //           amount: 400,
    //           lastAmount: 230
    //       },
    //       {   name: "e", 
    //           amount: 450,
    //           lastAmount: 30
    //       }
    //   ],
    // };

    localStorage.setItem('busStopStorage2', data);
    resolve(data);
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