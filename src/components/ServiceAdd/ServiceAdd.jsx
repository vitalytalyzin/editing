import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeServiceField,
  addService,
  removeService,
  updateService,
} from '../../actions/actionCreators';

function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const serviceList = useSelector(state => state.serviceList);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isServiceExist = serviceList.some(service => item.id === service.id);

    if (isServiceExist) {
      dispatch(updateService(item.id, item.name, item.price));
    } else {
      dispatch(addService(item.name, item.price));
    }

    handleRemove();
  };

  const handleRemove = () => {
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
    dispatch(changeServiceField('id', ''));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='submit'>Save</button>
      {(item.name !== '' || item.price) && (<button onClick={() => handleRemove()}>Cancel</button>)}
    </form>);
}

export default ServiceAdd;
