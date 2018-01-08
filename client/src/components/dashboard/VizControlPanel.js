/** VizControlPanel Component:
VizControlPanel component is a kind of toolbar of VizPanel
So far it only display a viz adding form
TODO: Add other controls like reorder/save

Testing Data:
  Viz
    Name: test
    Model: VictoryLine or VictoryBar
    Device: No need to fill
*/
import React, { Component } from 'react';
import Param from './Param';
import Action from './Action';
import * as d from '../../tempData';

class VizControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viz: {
        id: '',
        name: '',
        source_id: '',
        model: '',
        x: '',
        y: '',
        data: [],
        design: ''
      },
      vizSelected: false
    };
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //    return this.props.selected !== nextProps.selected;
  // }
  componentWillReceiveProps(nextProps) {
    // console.log('viz', nextProps.selected);
    if (nextProps.selected.parent === 'viz') {
      // check if selected Item and Item is Thing;
      if (this.state.viz.id !== nextProps.selected.item.id) {
        // console.log('diferent vizs');
        if (!this.state.vizSelected) {
          // console.log('move to true viz');
          this.setState({
            viz: nextProps.selected.item,
            vizSelected: true
          });
        } else {
          // if is selected and id is same then we unselect and clear Params form
          // console.log('move to false viz');
          this.clearState();
        }
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
    // Specific to Line or Bar Chart
    // TODO: Add check on Viz Type
    const source = this.getSource(this.state.viz.source_id);
    const axis = this.getAxis(source);

    // TODO: Add Check All required fields are set
    this.props.actions.addViz(
      {
        id: 'viz' + this.props.vizs.length,
        name: this.state.viz.name,
        source_id: this.state.viz.source_id,
        model: this.state.viz.model,
        x: axis.x,
        y: axis.y,
        data: [],
        design: this.state.viz.design
      },
      source
    );
    this.clearState();
  };
  handleEdit = () => {
    console.log('Edit Item');
  };
  handleDel = () => {
    console.log('Del Item');
  };
  getSource = id => {
    let source;
    this.props.things.forEach(thing => {
      Object.keys(thing.properties).forEach(property => {
        if (property === id) {
          source = thing.properties[property];
        }
      });
    });
    return source;
  };
  getAxis = source => {
    return {
      x: 'timestamp',
      y: Object.keys(source.values)[0]
    };
  };
  clearState = () => {
    this.setState({
      viz: {
        id: '',
        name: '',
        source_id: '',
        model: '',
        x: '',
        y: '',
        design: '',
        data: []
      },
      vizSelected: false
    });
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
  renderActions = (actions, onclicks) => {
    return actions.map(action => {
      if (action.onSelect) {
        return (
          <div key={action.name} className={this.state.vizSelected ? 'visible' : 'hidden'}>
            <Action {...action} onclick={onclicks[action.name]} />
          </div>
        );
      }
      return (
        <div key={action.name} className={this.state.vizSelected ? 'hidden' : 'visible'}>
          <Action {...action} onclick={onclicks[action.name]} />
        </div>
      );
    });
  };
  render() {
    const onclicks = { Add: this.handleAdd, Edit: this.handleEdit, Del: this.handleDel };
    return (
      <div className="control-panel">
        <div className="control-panel-actions">
          {this.renderActions(d.vizPanelActions, onclicks)}
        </div>
        <div className="control-panel-params">{this.renderParams(this.props.params)}</div>
      </div>
    );
  }
}

export default VizControlPanel;
