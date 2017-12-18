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

export const sideBarItems = [
  { text: 'Context', position: '' },
  { text: 'Requirements', position: '' },
  { text: 'Connect your Things', position: '' },
  { text: 'Display data from yout Things', position: '' }
];

export const getStartedContent = [
  {
    title: 'Context',
    text:
      'We are using the concept of "Things" described in the "Building the Web of Things" book written by Dominique D. Guinard and Vlad M. Trifa: A Thing with an uppercase "T" refers to a smart thing. A physical object that\'s digitally augmented with one or more of the following:'
  },
  {
    title: 'Requirements',
    text:
      'We will assume that all connected Things follow the authors recommendations and W3C definition of a Web Thing: http://model.webofthings.io/.'
  },
  { title: 'Connect your Things', text: 'To Come...' },
  { title: 'Display data from yout Things', text: 'To Come..' }
];
