import React from 'react';
import Counter from './components/Counter/Counter.js';
import Dropdown from './components/Dropdown/Dropdown.js';
import ColorPicker from './components/ColorPicker/ColorPicker.js';


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D89' },
  { label: 'pink', color: '#E91E64' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => (
  <>
  <h1>Стан компонента</h1>

  <ColorPicker options={colorPickerOptions}/>
  </>
);

export default App;


