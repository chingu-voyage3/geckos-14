import axios from 'axios';

function formatDevice(device, listLength, url) {
  let newDevice = { id: 'dev' + listLength, name: device.name, url: url };
  return newDevice;
}

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
        let device = formatDevice(devs[k], devList.length, url);
        devList.push(device);
      }
      return devList;
    });
}
