import React from 'react';

const Filter = ({value, onChange}) => (
  <label>
        Фільтр по назві
        <input type="text" value={value} onChange={onChange} />
  </label>
)

export default Filter;
