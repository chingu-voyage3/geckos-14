import axios from 'axios';
import * as d from '../tempData.js';

let devices = [];

export default function discover(url) {
  axios
    .get(url)
    .catch(err => {
      console.log('Error Discovering Root...', err);
    })
    .then(res => {
      console.log('Discovered :', res.data);
      if (res.data.resources) {
        const resources = res.data.resources;
        let resUrl = url + '/sensors';
        console.log('Discovering Sensors from ', resUrl);
        return axios
          .get(resUrl)
          .catch(err => {
            console.log('Error Discovering Sensors', err);
          })
          .then(res => {
            const devs = res.data;
            for (let k in devs) {
              console.log(devs[k]);
              devices.push(devs[k]);
            }
          });
      }
    });
}
