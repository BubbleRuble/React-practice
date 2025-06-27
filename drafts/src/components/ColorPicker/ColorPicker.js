import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 1,
  };

  setActiveIdx = (index) => {
    this.setState({activeOptionIdx:index})
  }

  makeOptionsClassName = (index) => {
    const optionClasses = ['ColorPicker__options'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__options--active');
    }

    return optionClasses.join(' ')
  };

  render() {
    const {activeOptionIdx} = this.state
    const { options } = this.props
    const {label} = options[activeOptionIdx]

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">ColorPicker</h2>
        <p>Обраний колір: {label}  </p>
        <div>
          {options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionsClassName(index)

            return (
              <button
                key={label}
                className={optionClassName}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
