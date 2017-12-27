import axios from 'axios';
import * as d from '../tempData.js';

function checkResources(res, url) {
  if (res.data.resources) {
    const resources = res.data.resources;
    for (let key in resources) {
      let resUrl = url + resources[key].url;
      discover(resUrl);
    }
  } else {
    console.log('to Add to DeviceList', res.data);
    let devices = res.data;
    for (let key in devices) {
      d.devices.push(devices[key]);
    }
  }
}
export default function discover(url) {
  console.log('Discovering Devices from ', url);
  axios
    .get(url)
    .catch(err => {
      console.log('Error Discovering Root...', err);
    })
    .then(res => {
      console.log('Discovered :', res.data);
      checkResources(res, url);
    });
}
