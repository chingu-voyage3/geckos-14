import axios from 'axios';
import { isEqual } from './utils';

function checkLink(headers) {
  // console.log('Headers :', headers);
  return headers.Link;
}
function checkModel(model) {
  // console.log('Model :', Object.keys(model));
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
  // console.log('Device :', Object.keys(device));
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

export default function discover(url, devList) {
  let devices = devList;
  // console.log('Discovering URL..');
  // sending GET request
  return axios
    .get(url, { headers: { Accept: 'application/json' } })
    .then(res => {
      // if no Links check for Device
      // console.log('Checking header..');
      if (!checkLink(res.headers)) {
        // If no Model Check for single Device
        // console.log('No Link in header');
        // console.log('Checking device..');
        if (!checkDevice(res.data)) {
          // console.log('Not a proper device');
          // console.log('Checking Model..');
          // if not a device alert user
          return axios
            .get(url + '/model', { headers: { Accept: 'application/json' } })
            .then(model => {
              if (!checkModel(model.data)) {
                console.log('BAD URL');
              } else {
                // console.log('It is a Thing');
                devices = getProperties(devices, model.data.links, url);
                // console.log('after properties', devices);
                // devices = getActions(devices, model.data.links, url);
                // console.log('after actions', devices);
                return devices;
              }
            });
        }
        console.log('It is a Device');
        devices = getDevice(devices, res.data, url);
        return devices;
      }
      // if yes call getProperties and getActions
      console.log('It is a Thing');
      devices = getProperties(devices, res.data.links, url);
      // console.log('after properties', devices);
      // devices = getActions(devices, res.data.links, url);
      // console.log('after properties',devices);
      return devices;
    })
    .catch(err => {
      console.log(err);
    });
}
