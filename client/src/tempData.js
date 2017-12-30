export const lineData = [
  // { date: 12, temp: 25.5 },
  // { date: 13, temp: 25.6 },
  // { date: 14, temp: 24.3 },
  // { date: 15, temp: 25.8 }
];
export const barData = [
  { date: '12/12', hum: 95 },
  { date: '13/12', hum: 93 },
  { date: '14/12', hum: 98 },
  { date: '15/12', hum: 85 }
];
export const uiThemes = [
  { id: 'TH0', value: 'default', display: 'Select Viz Theme' },
  { id: 'TH1', value: 'GrayScale', display: 'GrayScale' },
  { id: 'TH2', value: 'Material', display: 'Material' }
];

export const modelTypes = [
  { id: 'MT0', value: 'default', display: 'Select Model Type' },
  { id: 'MT1', value: 'VictoryLine', display: 'VictoryLine' },
  { id: 'MT2', value: 'VictoryBar', display: 'VictoryBar' },
  { id: 'MT3', value: 'Status', display: 'Status' },
  { id: 'MT4', value: 'Display', display: 'Display' }
];
export const deviceTypes = [
  { id: 'DT0', value: 'default', display: 'Select Device Type' },
  { id: 'DT1', value: 'Thermometer', display: 'Thermometer' },
  { id: 'DT2', value: 'Humidity', display: 'Humidity' },
  { id: 'DT3', value: 'IR sensor', display: 'IR sensor' },
  { id: 'DT4', value: 'LCD', display: 'LCD' },
  { id: 'DT5', value: 'LED', display: 'LED' },
  { id: 'DT6', value: 'Switch', display: 'Switch' }
];
export const devices = [
  {
    id: 'dev1',
    name: 'LondonTemp',
    url: 'http://devices.webofthings.io/pi/sensors/temperature/'
  },
  {
    id: 'dev2',
    name: 'LondonHumidity',
    url: 'http://devices.webofthings.io/pi/sensors/humidity/'
  }
];
export const vizs = [
  {
    id: 'viz1',
    name: 'Temperature Sensor',
    device_id: 'dev1',
    model: 'VictoryLine',
    x: 'date',
    y: 'temp',
    data: lineData,
    selected: false,
    design: 'GrayScale'
  },
  {
    id: 'viz2',
    name: 'Humidity Sensor',
    device_id: 'dev2',
    model: 'VictoryBar',
    x: 'date',
    y: 'hum',
    data: barData,
    selected: false,
    design: 'Material'
  }
];

export const deviceParams = [
  {
    label: 'Name :',
    type: 'input',
    name: 'name',
    options: []
  },
  {
    label: 'Url :',
    type: 'input',
    name: 'url',
    options: []
  }
];

export const vizParams = [
  {
    label: 'Name :',
    name: 'name',
    type: 'input',
    options: []
  },
  {
    label: 'Model :',
    name: 'model',
    type: 'select',
    options: modelTypes
  },
  {
    label: 'Source Device:',
    name: 'device_id',
    type: 'select',
    options: [{ id: 'SD0', value: 'default', display: 'Select Device Source' }]
  },
  {
    label: 'Theme:',
    name: 'design',
    type: 'select',
    options: uiThemes
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
    h: 1
  },
  {
    i: 'Humidity Bar',
    x: 1,
    y: 0,
    w: 1,
    h: 1
  }
];

export const getStartedContent = [
  {
    id: 'step1',
    title: 'Context',
    text:
      'We are using the concept of "Things" described in the "Building the Web of Things" book written by Dominique D. Guinard and Vlad M. Trifa: A Thing with an uppercase "T" refers to a smart thing. A physical object that\'s digitally augmented with one or more of the following: Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow.'
  },
  {
    id: 'step2',
    title: 'Requirements',
    text:
      'Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow.'
  },
  {
    id: 'step3',
    title: 'Connect Things',
    text:
      'Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow.'
  },
  {
    id: 'step4',
    title: 'Display Things',
    text:
      'Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow. Unicorn hacker waterfall is so 2000 and late parallax grok piverate responsive affordances fund intuitive. Cortado bootstrapping personas ideate SpaceTeam user story co-working paradigm integrate entrepreneur 360 campaign pair programming. Human-centered design user story unicorn disrupt actionable insight pair programming prototype driven. Integrate entrepreneur fund co-working thought leader human-centered design co-working engaging. Minimum viable product user story parallax agile latte agile hacker workflow experiential physical computing engaging personas long shadow.'
  }
];

export const devPanelActions = [
  {
    name: 'Discover',
    onSelect: false
  },
  {
    name: 'Edit',
    onSelect: true
  },
  {
    name: 'Del',
    onSelect: true
  }
];
export const vizPanelActions = [
  {
    name: 'Add',
    onSelect: false
  },
  {
    name: 'Edit',
    onSelect: true
  },
  {
    name: 'Del',
    onSelect: true
  }
];
export const piSensors = {
  temperature: {
    name: 'Temperature Sensor',
    description: 'A temperature sensor.',
    type: 'float',
    unit: 'celsius',
    value: 21.8,
    frequency: 5000,
    timestamp: '2017-12-30T15:19:04.340Z'
  },
  humidity: {
    name: 'Humidity Sensor',
    description: 'A temperature sensor.',
    type: 'float',
    unit: 'percent',
    value: 35.4,
    frequency: 5000,
    timestamp: '2017-12-30T15:19:04.340Z'
  },
  pir: {
    name: 'Passive Infrared',
    description: 'A passive infrared sensor. When true someone is present.',
    type: 'boolean',
    value: true,
    gpio: 20,
    timestamp: '2015-10-17T12:27:49.914Z'
  }
};
