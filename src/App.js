import React, { Fragment } from 'react';
import ServiceAdd from './components/ServiceAdd/ServiceAdd';
import ServiceList from './components/ServiceList/ServiceList';
import ServiceFilter from './components/ServiceFilter/ServiceFilter';

const App = () => {
  return (
    <Fragment>
      <ServiceAdd />
      <ServiceFilter />
      <ServiceList />
    </Fragment>
  );
}

export default App;
