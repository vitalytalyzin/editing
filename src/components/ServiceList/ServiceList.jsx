import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeServiceField, removeService, clearServiceField } from '../../actions/actionCreators';

const ServiceList = () => {
  const items = useSelector(({ serviceList }) => serviceList);
  const { filterName } = useSelector(({ serviceFilter }) => serviceFilter);
  const dispatch = useDispatch();

  const filteredItems = items.filter(({ name, price }) => {
    const currentName = name.toLowerCase();
    const currentPrice = String(price).toLowerCase();
    const currentFilterName = filterName.toLowerCase();

    return currentName.includes(currentFilterName) || currentPrice.includes(currentFilterName);
  });

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(clearServiceField());
  };

  const handleChange = (name, value, id) => {
    dispatch(changeServiceField('name', name));
    dispatch(changeServiceField('price', value));
    dispatch(changeServiceField('id', id));
  };

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>
          {item.name} {item.price}
          <button onClick={() => handleChange(item.name, item.price, item.id)}>change</button>
          <button onClick={() => handleRemove(item.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
