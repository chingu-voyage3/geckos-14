/** ControlPanel Component:
ControlPanel component is a kind of toolbar of DevicePanel and VizPanel.
So far it only display a device/viz adding form
TODO: Move the form to specific Component
TODO: Add other controls like reorder/save

Testing Data:
  Device
    Name: test
    Type: LCD
    Url: http://devices.webofthings.io/pi/actuators/display/

  Viz
    Name: test
    Model: VictoryLine or VictoryBar
    Device: No need to fill
*/

import React, { Component } from 'react';
import Param from './Param';
import * as d from '../../tempData';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      device: {
        name: '',
        type: '',
        url: ''
      },
      viz: {
        name: '',
        model: '',
        url: '',
        x: 'date',
        y: 'hum',
        data: d.testData,
        options: []
      }
    };
  }
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    // console.log(event.target.name);
    // eslint-disable-next-line
    this.props.parent === 'device'
      ? this.setState({ device: { ...this.state.device, [name]: value } })
      : this.setState({ viz: { ...this.state.viz, [name]: value } });
  }

  handleAdd() {
    if (this.props.parent === 'device') {
      this.props.actions(this.state.device);
      this.setState({
        device: {
          name: '',
          type: '',
          url: ''
        }
      });
    } else {
      this.props.actions(this.state.viz);
      this.setState({
        viz: {
          name: '',
          model: '',
          data: d.testData,
          x: 'date',
          y: 'hum',
          url: ''
        }
      });
    }
  }
  renderParams(params) {
    return params.map(param => {
      return (
        <Param
          key={param.name}
          {...param}
          value={this.state[param.name]}
          onChange={this.handleChange}
        />
      );
    });
  }
  render() {
    // console.log('params', this.props.params);
    return (
      <div className="control-panel">
        <div className="add">
          {this.renderParams(this.props.params)}
          <button className="add-action" onClick={this.handleAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
