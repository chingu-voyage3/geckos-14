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
    name: 'Temperature Sensor',
    deviceName: 'LondonTemp',
    model: 'VictoryLine',
    x: 'date',
    y: 'temp',
    data: lineData
  },
  {
    name: 'Humidity Sensor',
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
