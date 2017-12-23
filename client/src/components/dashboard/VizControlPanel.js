/** VizControlPanel Component:
VizControlPanel component is a kind of toolbar of VizPanel
So far it only display a viz adding form
TODO: Move the form to specific Component
TODO: Add other controls like reorder/save

Testing Data:
  Viz
    Name: test
    Model: VictoryLine or VictoryBar
    Device: No need to fill
*/
import React, { Component } from 'react';
import Param from './Param';
import * as d from '../../tempData';

class VizControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viz: {
        id: '',
        name: '',
        vizId: '',
        model: '',
        x: '',
        y: '',
        data: []
      },
      vizSelected: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.selected).length > 0 && nextProps.selected.model) {
      if (!this.state.vizSelected || nextProps.selected.id !== this.state.viz.id) {
        // console.log('viz', nextProps.selected);
        this.setState({
          viz: nextProps.selected,
          vizSelected: true
        });
      } else {
        // console.log('viz', nextProps.selected);
        this.setState({
          viz: {
            id: '',
            name: '',
            deviceId: '',
            model: ''
          },
          vizSelected: false
        });
      }
    }
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    // console.log(event.target.name);
    // eslint-disable-next-line
    this.setState({ viz: { ...this.state.viz, [name]: value } });
  };
  handleAdd = () => {
    this.props.actions.addViz(this.state.viz);
    this.setState({
      viz: {
        id: '',
        name: '',
        vizId: '',
        model: '',
        x: '',
        y: '',
        data: d.testData
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
          value={this.state.viz[param.name]}
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
            className={this.state.vizSelected ? 'hidden' : 'visible'}
            onClick={this.handleAdd}
          >
            Add
          </button>
          <button
            className={this.state.vizSelected ? 'visible' : 'hidden'}
            onClick={this.handleEdit}
          >
            Edit
          </button>
          <button
            className={this.state.vizSelected ? 'visible' : 'hidden'}
            onClick={this.handleDel}
          >
            Del
          </button>
        </div>
      </div>
    );
  }
}

export default VizControlPanel;
