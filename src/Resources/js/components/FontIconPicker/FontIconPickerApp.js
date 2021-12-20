import React from 'react';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import iconSet from "./selection.json";
import { iconList } from "icomoon-react";

class FontIconPickerApp extends React.PureComponent {
  handleInputChange = (value) => {
    this.props.onChange(value);
    this.props.onFinish();
  }
  render() {
    const { value: value } = this.props;

    const finalValue = value !== undefined
      ? value
      : undefined

    const renderSVG = (svg) => (
      <svg style={{ maxWidth: "20px", maxHeight: "20px" }} className={`icon-${svg}`}>
        <use xlinkHref={`#icon-${svg}`} />
      </svg>
    );
    return (
      <div className="icon-container">
        <FontIconPicker
          icons={iconList(iconSet)}
          theme='bluegrey'
          renderUsing='class'
          renderFunc={renderSVG}
          value={finalValue}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default FontIconPickerApp;
