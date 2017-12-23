/** ControlPanel Component:
ControlPanel component is a kind of toolbar of DevicePanel
So far it only display a device adding form
TODO: Move the form to specific Component
TODO: Add other controls like reorder/save

Testing Data:
  Device
    Name: test
    Type: LCD
    Url: http://devices.webofthings.io/pi/actuators/display/
*/

import React, { Component } from 'react';
import Param from './Param';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: {
        id: '',
        name: '',
        url: '',
        type: ''
      },
      deviceSelected: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // check if selected Item and Item is Device;
    if (Object.keys(nextProps.selected).length > 0 && !nextProps.selected.model) {
      // Check initial state
      if (!this.state.deviceSelected || nextProps.selected.id !== this.state.device.id) {
        // console.log('select device', nextProps.selected);
        this.setState({
          device: nextProps.selected,
          deviceSelected: true
        });
      } else {
        // console.log('reset device', nextProps.selected);
        this.setState({
          device: {
            id: '',
            name: '',
            url: '',
            type: ''
          },
          deviceSelected: false
        });
      }
    }
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    // console.log(event.target.name);
    // eslint-disable-next-line
    this.setState({ device: { ...this.state.device, [name]: value } });
  };
  handleAdd = () => {
    this.props.actions.addDevice(this.state.device);
    this.setState({
      device: {
        id: '',
        name: '',
        url: '',
        type: ''
      }
    });
  };
  handleEdit = () => {
    console.log('Edit Item');
  };
  handleDel = () => {
    console.log('Del Item');
  };
  renderParams = params => {
    return params.map(param => {
      return (
        <Param
          key={param.name}
          {...param}
          value={this.state.device[param.name]}
          onChange={this.handleChange}
        />
      );
    });
  };
  render() {
    return (
      <div className="control-panel">
        <div className="control-panel-params">
          {this.renderParams(this.props.params)}
          <button
            className={this.state.deviceSelected ? 'hidden' : 'visible'}
            onClick={this.handleAdd}
          >
            Add
          </button>
          <button
            className={this.state.deviceSelected ? 'visible' : 'hidden'}
            onClick={this.handleEdit}
          >
            Edit
          </button>
          <button
            className={this.state.deviceSelected ? 'visible' : 'hidden'}
            onClick={this.handleDel}
          >
            Del
          </button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
