export const lineData = [
  { date: '12/12', temp: 2 },
  { date: '13/12', temp: 0 },
  { date: '14/12', temp: 5 },
  { date: '15/12', temp: -3 }
];
export const barData = [
  { date: '12/12', hum: 95 },
  { date: '13/12', hum: 93 },
  { date: '14/12', hum: 98 },
  { date: '15/12', hum: 85 }
];
export const modelTypes = ['Line', 'Bar', 'Status', 'Value'];
export const devices = [
  {
    name: 'LondonTemp',
    url: 'http://devices.webofthings.io/pi/sensors/temperature/',
    type: 'Thermometer'
  },
  {
    name: 'LondonHumidity',
    url: 'http://devices.webofthings.io/pi/sensors/humidity/',
    type: 'Humidity'
  },
  { name: 'LondonIR', url: 'http://devices.webofthings.io/pi/sensors/pir/', type: 'InfraRed' }
];
export const vizs = [
  {
    name: 'Temp Line',
    deviceName: 'LondonTemp',
    model: 'VictoryLine',
    x: 'date',
    y: 'temp',
    data: lineData
  },
  {
    name: 'Humidity Bar',
    deviceName: 'LondonHumidity',
    model: 'VictoryBar',
    x: 'date',
    y: 'hum',
    data: barData
  }
];

export const deviceParams = [
  {
    label: 'Name :',
    name: 'name'
  },
  {
    label: 'Type :',
    name: 'type'
  },
  {
    label: 'Url :',
    name: 'url'
  }
];

export const vizParams = [
  {
    label: 'Name :',
    name: 'name',
    options: ''
  },
  {
    label: 'Model :',
    name: 'model',
    options: modelTypes
  },
  {
    label: 'Device :',
    name: 'device_name',
    options: ''
  }
];

export const testData = [
  { date: '12/12', hum: 22 },
  { date: '13/12', hum: 13 },
  { date: '14/12', hum: 5 },
  { date: '15/12', hum: 45 }
];

export const gridLayout = [
  {
    i: 'Temp Line',
    x: 0,
    y: 0,
    w: 1,
    h: 2
  },
  {
    i: 'Humidity Bar',
    x: 1,
    y: 0,
    w: 3,
    h: 2
  }
];
