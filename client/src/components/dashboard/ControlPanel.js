import React, { Component } from 'react';
import Param from './Param';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddDevice = this.handleAddDevice.bind(this);
    this.state = {
      name: '',
      type: '',
      url: ''
    };
  }
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    console.log(event.target.name);
    this.setState({
      [name]: value
    });
  }

  handleAddDevice() {
    this.props.actions(this.state);
    this.setState({
      name: '',
      type: '',
      url: ''
    });
  }
  render() {
    return (
      <div className="control-panel">
        <div className="add">
          <Param label="Name :" name="name" value={this.state.name} onChange={this.handleChange} />
          <Param label="Type :" name="type" value={this.state.type} onChange={this.handleChange} />
          <Param label="Url :" name="url" value={this.state.url} onChange={this.handleChange} />
          <button className="add-device" onClick={this.handleAddDevice}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
