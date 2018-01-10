import React from 'react';
const renderOptions = list => {
  return list.map(item => {
    return <option>{item}</option>;
  });
};
const renderControls = source => {
  return Object.keys(source.values).map(value => {
    console.log(source.values[value]);
    return (
      <div>
        <label htmlFor={'enum-' + value}>{value}</label>
        <select>
          {source.values[value].type === 'enum'
            ? renderOptions(Object.values(source.values[value].enum))
            : renderOptions(['true', 'false'])}
        </select>
      </div>
    );
  });
};
const handleUpdate = () => {
  console.log('Pushing Update to ...');
};
const Controller = props => {
  return (
    <div className="Controller">
      {renderControls(props.action)}
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Controller;
