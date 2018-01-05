import axios from 'axios';
import { isEqual } from './utils';
import * as d from '../tempData';

function checkLink(headers) {
  // console.log('Headers :', headers);
  return headers.Link;
}
function checkModel(model) {
  // console.log('Model :', Object.keys(model));
  return isEqual(Object.keys(model), d.modelPrint);
}
function checkDevice(device) {
  // console.log('Device :', Object.keys(device));
  return isEqual(Object.keys(device), d.devicePrint);
}
function getProperties(devList, thing, url) {
  // console.log('getProperties', thing.properties.resources);
  const properties = thing.properties.resources;
  const devKeys = Object.keys(thing.properties.resources);
  devKeys.forEach(key => {
    let device = properties[key];
    // console.log(device);
    if (!devList.includes(device)) {
      // console.log('Adding new device');
      devList.push({
        id: 'dev' + devList.length,
        name: device.name,
        url: url,
        description: device.description,
        type: device.type,
        unit: device.unit,
        frequency: device.frequency,
        actions: device.actions,
        data: device.data,
        values: device.values
      });
    } else {
      console.log('Device already existing');
    }
  });
  // console.log(devList);
  return devList;
}
// function getActions(devList, thing, url) {
//   // console.log('getActions', thing.actions.resources);
//   return devList;
// }
function getDevice(devList, device, url) {
  if (!devList.includes(device)) {
    // console.log('Adding new device');
    devList.push({
      id: 'dev' + devList.length,
      name: device.name,
      url: url,
      description: device.description,
      type: device.type,
      unit: device.unit,
      frequency: device.frequency,
      actions: {},
      data: []
    });
  } else {
    console.log('Device already existing');
  }
  return devList;
}
function getModel(url) {
  return axios.get(url + '/model', { headers: { Accept: 'application/json' } }).then(res => {
    return res.data;
  });
}
export default function discover(url, devList) {
  let devices = devList;
  // console.log('Discovering URL..');
  // sending GET request
  return axios
    .get(url, { headers: { Accept: 'application/json' } })
    .then(res => {
      if (!checkLink(res.headers)) {
        // If no Links check for Device
        if (!checkDevice(res.data)) {
          // If not a device getModel
          return getModel(url).then(model => {
            if (!checkModel(model)) {
              // console.log('BAD URL');
              // TODO: implement Error Displaying
            } else {
              // console.log('It is a Thing');
              devices = getProperties(devices, model.links, url);
              // console.log('after properties', devices);
              // devices = getActions(devices, model.data.links, url);
              // console.log('after actions', devices);
              return devices;
            }
          });
        }
        // console.log('It is a Device');
        devices = getDevice(devices, res.data, url);
        return devices;
      }
      // if yes call getProperties and getActions
      // console.log('It is a Thing');
      return getModel(url).then(model => {
        return getProperties(devices, model.links, url);
      });
      // console.log('after properties', devices);
      // devices = getActions(devices, res.data.links, url);
      // console.log('after properties',devices);
    })
    .catch(err => {
      console.log(err);
    });
}
