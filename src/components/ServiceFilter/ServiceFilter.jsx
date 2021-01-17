import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterService } from '../../actions/actionCreators';

const ServiceFilter = () => {
  const { filterName } = useSelector(({ serviceFilter }) => serviceFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(filterService(value));
  }

  return (
    <form>
      <input onChange={handleChange} value={filterName} />
      filter
    </form>
  );
};

export default ServiceFilter;
