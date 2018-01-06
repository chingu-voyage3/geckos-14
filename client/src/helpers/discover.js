import axios from 'axios';
import { isEqual } from './utils';
import * as d from '../tempData';

function checkModel(model) {
  // console.log('Model :', Object.keys(model));
  return isEqual(Object.keys(model), d.modelPrint);
}
function getInfo(model) {
  // console.log('getInfo', model);
  return {
    id: model.id,
    name: model.name,
    description: model.description
  };
}
function getProperties(properties) {
  // console.log('getProperties', properties);
  return properties;
}
function getActions(actions) {
  // console.log('getActions', actions);
  return actions;
}
function getModel(url) {
  return axios.get(url + '/model', { headers: { Accept: 'application/json' } }).then(res => {
    return res.data;
  });
}
export default function discover(url) {
  let thing = {};
  // console.log('Discovering URL..');
  // sending GET request
  return getModel(url)
    .then(model => {
      if (!checkModel(model)) {
        // console.log('BAD URL');
        // TODO: implement Error Displaying
      } else {
        // console.log('It is a Thing');
        thing = getInfo(model);
        thing.properties = getProperties(model.links.properties.resources);
        // console.log('after properties', things);
        thing.actions = getActions(model.links.actions.resources);
        // console.log('after actions', things);
        // console.log(thing);
        return thing;
      }
    })
    .catch(err => {
      console.log(err);
    });
}
