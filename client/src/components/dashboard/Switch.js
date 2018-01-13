import React, { Component } from 'react';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      switches: []
    };
  }
  componentWillMount() {
    // console.log('SwitchList props:', this.props);
    this.setState({
      id: 'switch-' + this.props.source_id,
      name: this.props.name,
      switches: this.getSwitches(this.props)
    });
    // populate initial state using props
  }
  componentWillReceiveProps(nextProps) {
    // check nextProps for change in checked status
    this.setState({
      switches: this.getSwitches(nextProps)
    });
  }
  getSwitches = props => {
    const switches = [];
    Object.keys(props.values).forEach(value => {
      let sw = props.values[value];
      let d = props.data[Object.keys(props.data).length - 1];
      let state = d ? d[value] : 'Awaiting';
      let time = d ? d.timestamp : new Date().toISOString();
      switches.push({
        name: sw.name,
        time: time,
        state: state
      });
    });
    return switches;
  };
  renderSwitchList = () => {
    return this.state.switches.map(sw => {
      return (
        <div key={sw.name} className="switch">
          <div className="switch-name">{sw.name + ' - ' + sw.time}</div>
          <div className="switch-label">
            <label>{sw.state ? 'ON' : 'OFF'}</label>
          </div>
          <div className="switch-time" />
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderSwitchList()}</div>;
  }
}

export default Switch;
