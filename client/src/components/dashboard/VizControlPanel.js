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
        vizType: '',
        model: '',
        dataType: '',
        source_id: '',
        x: '',
        y: '',
        design: '',
        data: [],
        socket: {}
      },
      vizSelected: false,
      params: props.params
    };
  }
  componentWillReceiveProps(nextProps) {
    // console.log('viz', nextProps.selected);
    if (nextProps.selected.parent === 'viz') {
      // check if selected Item and Item is Thing;
      if (this.state.viz.id !== nextProps.selected.item.id) {
        // console.log('diferent vizs');
        if (!this.state.vizSelected) {
          console.log('move to true viz');
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
    if (name === 'vizType') {
      this.populateParams(value);
    }
    // eslint-disable-next-line
    this.setState({ viz: { ...this.state.viz, [name]: value } });
  };
  handleAdd = () => {
    this.state.viz.vizType === 'property' ? this.handleAddProperty() : this.handleAddController();
    this.clearState();
  };

  handleAddProperty = () => {
    const source = this.getSource(this.state.viz.source_id);
    const axis = this.getAxis(source);

    // TODO: Add Check All required fields are set
    this.props.actions.addViz(
      {
        id: 'viz' + this.props.vizs.length,
        name: this.state.viz.name,
        vizType: this.state.viz.vizType,
        model: this.state.viz.model,
        dataType: this.state.viz.dataType,
        source_id: this.state.viz.source_id,
        x: axis.x,
        y: axis.y,
        design: this.state.viz.design,
        data: [],
        socket: {},
        action: {}
      },
      source
    );
  };
  handleAddController = () => {
    const source = this.getSource(this.state.viz.source_id);
    this.props.actions.addViz(
      {
        id: 'viz' + this.props.vizs.length,
        name: this.state.viz.name,
        vizType: this.state.viz.vizType,
        model: this.state.viz.model,
        dataType: this.state.viz.dataType,
        source_id: this.state.viz.source_id,
        design: this.state.viz.design
      },
      source
    );
  };
  handleDel = () => {
    // console.log('Del Viz');
    this.props.actions.delViz(this.state.viz.id, this.state.viz.socket);
    this.clearState();
  };
  getSource = id => {
    let source;
    this.props.things.forEach(thing => {
      this.state.viz.vizType === ' property '
        ? Object.keys(thing.properties).forEach(property => {
          if (property === id) source = thing.properties[property];
        })
        : Object.keys(thing.actions).forEach(action => {
          if (action === id) source = thing.actions[action];
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
    console.log('Clearing State CVP...');
    this.setState({
      viz: {
        id: '',
        name: '',
        vizType: '',
        model: '',
        dataType: '',
        source_id: '',
        x: '',
        y: '',
        design: '',
        data: [],
        socket: {},
        action: {}
      },
      vizSelected: false
    });
  };
  populateParams = vizType => {
    // console.log('populating params...');
    let newParams = this.state.params;
    // getting the index for source_id
    let index = newParams.findIndex(p => p.name === 'source_id');
    newParams[index].options.splice(1, newParams[index].options.length - 1);

    this.props.things.forEach(thing => {
      if (vizType === 'property') {
        Object.keys(thing.properties).forEach(property => {
          // TODO: Add a check for unique things
          newParams[index].options.push({ id: property, value: property, display: property });
        });
      } else {
        Object.keys(thing.actions).forEach(action => {
          // TODO: Add a check for unique things
          newParams[index].options.push({ id: action, value: action, display: action });
        });
      }
    });
    // console.log('populated params', newParams);
    return newParams;
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
    const onclicks = { Add: this.handleAdd, Del: this.handleDel };
    return (
      <div className="control-panel">
        <div className="control-panel-actions">
          {this.renderActions(d.vizPanelActions, onclicks)}
        </div>
        <div className="viz-control-panel-params">{this.renderParams(this.props.params)}</div>
      </div>
    );
  }
}

export default VizControlPanel;
