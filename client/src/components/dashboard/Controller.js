import React, { Component } from 'react';
import axios from 'axios';
class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      url: props.actionUrl
    };
  }
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    // eslint-disable-next-line
    this.setState({ data: { ...this.state.data, [name]: value } });
  };
  renderOptions = list => {
    return list.map(item => {
      return <option key={item}>{item}</option>;
    });
  };
  renderControls = action => {
    return Object.keys(action).map(value => {
      // console.log(action[value]);
      return (
        <div key={action.id}>
          <label htmlFor={'enum-' + value}>{value}</label>
          <select name={value} value={this.state.data[value]} onChange={this.handleChange}>
            {action[value].type === 'enum'
              ? this.renderOptions(Object.values(action[value].enum))
              : this.renderOptions(['true', 'false'])}
          </select>
        </div>
      );
    });
  };
  updateControl = () => {
    // console.log('Sending Action...');
    axios.post(this.state.url, this.state.data);
  };
  render = () => {
    return (
      <div className="Controller">
        {this.renderControls(this.props.action)}
        <button onClick={this.updateControl}>Update</button>
      </div>
    );
  };
}

export default Controller;
