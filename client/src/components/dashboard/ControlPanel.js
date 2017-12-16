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
    console.log(event.target.name);

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
