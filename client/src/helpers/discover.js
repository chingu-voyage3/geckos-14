import axios from 'axios';
import * as d from '../tempData.js';

let devices = [];
let request;

export default function discover(url) {
  return axios
    .get(url)
    .catch(err => {
      console.log('Error Discovering Root...', err);
    })
    .then(res => {
      console.log('Discovered :', res.data);
      let resUrl = url + '/sensors';
      console.log('Discovering Sensors from ', resUrl);
      return axios
        .get(resUrl)
        .catch(err => {
          console.log('Error Discovering Sensors', err);
        })
        .then(r => {
          const devs = r.data;
          for (let k in devs) {
            console.log(devs[k]);
            devices.push(devs[k]);
          }
          return devices;
        });
    });
}
