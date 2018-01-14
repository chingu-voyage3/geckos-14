/** ControlPanel Component:
ControlPanel component is a kind of toolbar of ThingPanel
So far it only display a thing adding form.
State is used to allow click detection and to fill the Params Form for Edit or Deletion
TODO: Add other controls like reorder/save
Testing Data:
  Thing
    Name: test
    Type: LCD
    Url: http://things.webofthings.io/pi/actuators/display/
*/

import React, { Component } from 'react';
import Param from './Param';
import Action from './Action';
import * as d from '../../../tempData.js';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    // state initialisation for controlled component
    this.state = {
      thing: {
        id: '',
        name: ''
      },
      thingSelected: false
    };
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.selected !== nextProps.selected;
  // }
  componentWillReceiveProps(nextProps) {
    // console.log('Thing nextProps', nextProps);
    if (nextProps.selected.parent === 'thing') {
      // check if selected Item and Item is Thing;
      if (this.state.thing.name !== nextProps.selected.item.name) {
        // console.log('different');
        // Check initial state
        if (!this.state.thingSelected) {
          // console.log('Thing - move to true');
          this.setState({
            thing: nextProps.selected.item,
            thingSelected: true
          });
        } else {
          // if is selected and id is same then we unselect and clear Params form
          // console.log('Thing - move to false');
          this.clearState();
        }
      }
    }
  }
  // allowing controlled components by catching all change events and updating state
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    // eslint-disable-next-line
    this.setState({ thing: { ...this.state.thing, [name]: value } });
  };
  // Handles discovery
  handleDiscover = () => {
    this.props.actions.discover(this.state.thing.id);
    // this.setState({
    //   selectedThing: true
    // });
  };
  // Handles delering
  handleDel = () => {
    // console.log('Del Item');
    this.props.actions.delThing(this.state.thing.id);
    this.clearState();
  };
  // clearing State
  clearState = () => {
    // console.log('Clearing State');
    this.setState({
      thing: {
        id: '',
        name: ''
      },
      thingSelected: false
    });
  };
  // helper function rendering Params
  renderParams = params => {
    return params.map(param => {
      return (
        <Param
          key={param.name}
          {...param}
          value={this.state.thing[param.name]}
          onChange={this.handleChange}
          options={param.options}
        />
      );
    });
  };
  // helper function rendering Actions
  renderActions = (actions, onclicks) => {
    return actions.map(action => {
      if (action.onSelect) {
        return (
          <div key={action.name} className={this.state.thingSelected ? 'visible' : 'hidden'}>
            <Action {...action} onclick={onclicks[action.name]} />
          </div>
        );
      }
      return (
        <div key={action.name} className={this.state.thingSelected ? 'hidden' : 'visible'}>
          <Action {...action} onclick={onclicks[action.name]} />
        </div>
      );
    });
  };

  render() {
    const onclicks = { Discover: this.handleDiscover, Edit: this.handleEdit, Del: this.handleDel };
    return (
      <div className="control-panel">
        <div className="control-panel-actions">
          {this.renderActions(d.devPanelActions, onclicks)}
        </div>
        <div className="control-panel-params">{this.renderParams(this.props.params)}</div>
      </div>
    );
  }
}

export default ControlPanel;
