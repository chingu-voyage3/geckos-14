/** ControlPanel Component:
ControlPanel component is a kind of toolbar of DevicePanel
So far it only display a device adding form.
State is used to allow click detection and to fill the Params Form for Edit or Deletion
TODO: Add other controls like reorder/save
Testing Data:
  Device
    Name: test
    Type: LCD
    Url: http://devices.webofthings.io/pi/actuators/display/
*/

import React, { Component } from 'react';
import Param from './Param';
import Action from './Action';
import * as d from '../../tempData.js';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    // state initialisation for controlled component
    this.state = {
      device: {
        name: '',
        id: ''
      },
      deviceSelected: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // check if selected Item and Item is Device;
    if (Object.keys(nextProps.selected).length > 0 && !nextProps.selected.model) {
      // Check initial state
      if (!this.state.deviceSelected || nextProps.selected.id !== this.state.device.id) {
        this.setState({
          device: nextProps.selected,
          deviceSelected: true
        });
      } else {
        // if is selected and id is same then we unselect and clear Params form
        this.setState({
          device: {
            id: '',
            name: ''
          },
          deviceSelected: false
        });
      }
    }
  }
  // allowing controlled components by catching all change events and updating state
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    // eslint-disable-next-line
    this.setState({ device: { ...this.state.device, [name]: value } });
  };

  // Handles discovery
  handleDiscover = () => {
    this.props.actions.discover(this.state.device.url);
    // this.setState({
    //   selectedDevice: true
    // });
  };
  // TODO: Add handling Updating Device Data
  handleEdit = () => {
    console.log('Edit Item');
  };
  // TODO: Add handling Deleting Device
  handleDel = () => {
    console.log('Del Item');
  };
  // helper function rendering Params
  renderParams = params => {
    return params.map(param => {
      return (
        <Param
          key={param.name}
          {...param}
          value={this.state.device[param.name]}
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
          <div key={action.name} className={this.state.deviceSelected ? 'visible' : 'hidden'}>
            <Action {...action} onclick={onclicks[action.name]} />
          </div>
        );
      }
      return (
        <div key={action.name} className={this.state.deviceSelected ? 'hidden' : 'visible'}>
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
