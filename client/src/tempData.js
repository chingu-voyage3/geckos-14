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

export const things = [
  {
    id: 'http://gateway.webofthings.io/',
    name: 'LondonTemp',
    description: 'Testing Thing',
    properties: {
      prop1: {
        name: 'prop1'
      },
      prop2: {
        name: 'prop2'
      }
    },
    actions: {
      act1: {
        name: 'act1'
      },
      act2: {
        name: 'act2'
      }
    }
  }
];
export const vizs = [
  {
    id: 'viz0',
    name: 'Temperature Sensor',
    thing_id: 'dev0',
    model: 'VictoryLine',
    x: 'date',
    y: 'temp',
    data: lineData,
    selected: false,
    design: 'GrayScale'
  },
  {
    id: 'viz1',
    name: 'Humidity Sensor',
    thing_id: 'dev1',
    model: 'VictoryBar',
    x: 'date',
    y: 'hum',
    data: barData,
    selected: false,
    design: 'Material'
  }
];

export const thingParams = [
  {
    label: 'Name :',
    type: 'input',
    name: 'name',
    options: []
  },
  {
    label: 'Url :',
    type: 'input',
    name: 'id',
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
    label: 'Source Thing:',
    name: 'thing_id',
    type: 'select',
    options: [{ id: 'SD0', value: 'default', display: 'Select Thing Source' }]
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
export const piGateway = {
  data: {
    message: 'testing root url',
    links: {
      properties: {
        temp: {
          name: 'Temperature Sensor',
          description: 'An ambient temperature sensor.',
          values: {
            t: {
              name: 'Temperature sensor',
              description: 'The temperature in celsius',
              unit: 'celsius',
              customFields: {
                gpio: 12
              }
            }
          },
          tags: ['sensor', 'public', 'indoors'],
          data: [
            {
              t: 36,
              timestamp: '2018-01-04T15:44:05.589Z'
            },
            {
              t: 39,
              timestamp: '2018-01-04T15:44:10.593Z'
            }
          ]
        }
      },
      actions: { ledState: 'leds' }
    }
  },
  headers: { Link: '/model' }
};

export const piModel = {
  data: {
    message: 'testing model url',
    links: {
      product: {
        link: 'https://www.raspberrypi.org/products/raspberry-pi-2-model-b/',
        title: 'Product this Web Thing is based on'
      },
      properties: {
        link: '/properties',
        title: 'List of Properties',
        resources: {
          temperature: {
            name: 'Temperature Sensor',
            description: 'An ambient temperature sensor.',
            values: {
              t: {
                name: 'Temperature sensor',
                description: 'The temperature in celsius',
                unit: 'celsius',
                customFields: {
                  gpio: 12
                }
              }
            },
            tags: ['sensor', 'public', 'indoors'],
            data: [
              {
                t: 21,
                timestamp: '2018-01-05T20:07:16.096Z'
              },
              {
                t: 14,
                timestamp: '2018-01-05T20:07:21.102Z'
              }
            ]
          },
          humidity: {
            name: 'Humidity Sensor',
            description: 'An ambient humidity sensor.',
            values: {
              h: {
                name: 'Humidity',
                description: 'Percentage of Humidity',
                unit: '%',
                customFields: {
                  gpio: 12
                }
              }
            },
            tags: ['sensor', 'public'],
            data: [
              {
                h: 24,
                timestamp: '2018-01-05T20:07:16.096Z'
              },
              {
                h: 93,
                timestamp: '2018-01-05T20:07:21.102Z'
              },
              {
                h: 63,
                timestamp: '2018-01-05T20:07:26.108Z'
              }
            ]
          }
        }
      }
    }
  },
  headers: { Link: '/model' }
};

export const modelPrint = ['id', 'name', 'description', 'tags', 'customFields', 'links'];
export const thingPrint = [
  'name',
  'description',
  'type',
  'unit',
  'value',
  'frequency',
  'timestamp'
];
