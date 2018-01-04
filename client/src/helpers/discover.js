import axios from 'axios';
import { isEqual } from './utils';

function formatDevice(device, listLength, url) {
  let newDevice = { id: 'dev' + listLength, name: device.name, url: url };
  return newDevice;
}
function checkLink(headers) {
  console.log('Headers :', headers);
  return headers.Link;
}
function checkModel(model) {
  console.log('Model :', Object.keys(model));
  return isEqual(Object.keys(model), [
    'id',
    'name',
    'description',
    'tags',
    'customFields',
    'links'
  ]);
}
function checkDevice(device) {
  console.log('Device :', Object.keys(device));
  return isEqual(Object.keys(device), [
    'name',
    'description',
    'type',
    'unit',
    'value',
    'frequency',
    'timestamp'
  ]);
}
function getProperties(oldDev, thing) {
  return oldDev;
}
function getActions(oldDev, thing) {
  return oldDev;
}
function getDevice(oldDev, device) {
  return oldDev;
}
export function getDevices(url, devList) {
  // console.log('Discovering devices from ', url);
  return axios
    .get(url)
    .catch(err => {
      console.log('Error Discovering...', err);
    })
    .then(res => {
      const devs = res.data;
      for (let k in devs) {
        // console.log(devs[k]);
        let device = formatDevice(devs[k], devList.length, url);
        devList.push(device);
      }
      return devList;
    });
}
export default function discover(url) {
  let devices = [];
  console.log('Discovering URL..');
  // sending GET request
  return axios
    .get(url, { headers: { Accept: 'application/json' } })
    .then(res => {
      // if no Links check for Device
      console.log('Checking header..');
      if (!checkLink(res.headers)) {
        // If no Model Check for single Device
        console.log('No Link in header');
        console.log('Checking device..');
        if (!checkDevice(res.data)) {
          console.log('Not a proper device');
          console.log('Checking Model..');
          // if not a device alert user
          return axios
            .get(url + '/model', { headers: { Accept: 'application/json' } })
            .then(model => {
              if (!checkModel(model.data)) {
                console.log('BAD URL');
              } else {
                console.log('It is a Thing');
                // devices = getProperties(devices, res.data.links);
                // devices = getActions(devices, res.data.links);
              }
            });
        }
        console.log('It is a Device');
        // devices = getDevice(devices, res.data);
        return devices;
      }
      // if yes call getProperties and getActions
      console.log('It is a Thing');
      // devices = getProperties(devices, res.data.links);
      // devices = getActions(devices, res.data.links);
      return devices;
    })
    .catch(err => {
      console.log('BAD URL', err);
    });
}
