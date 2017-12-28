import axios from 'axios';
import * as d from '../tempData.js';

let devices = [];

export function getDevices(url, devList) {
  // console.log('Discovering Actuators from ', resUrl);
  return axios
    .get(url)
    .catch(err => {
      console.log('Error Discovering...', err);
    })
    .then(res => {
      const devs = res.data;
      for (let k in devs) {
        // console.log(devs[k]);
        devList.push(devs[k]);
      }
      return devList;
    });
}
