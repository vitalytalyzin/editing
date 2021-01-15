import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeServiceField, removeService } from '../../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
    dispatch(changeServiceField('id', ''));
  };

  const handleChange = (name, value, id) => {
    dispatch(changeServiceField('name', name));
    dispatch(changeServiceField('price', value));
    dispatch(changeServiceField('id', id));
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} {item.price}
          <button onClick={() => handleChange(item.name, item.price, item.id)}>change</button>
          <button onClick={() => handleRemove(item.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
