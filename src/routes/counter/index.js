import React from 'react';
import Bundle from '../../components/Bundle';
import Loading from '../../components/Loading';
// Import LoaderCounter when is used
import LoadCounter from 'bundle-loader?lazy&name=[name]!./containers/Counter.js';


export default () =>
  <Bundle load={LoadCounter}>
    {Counter => Counter ? <Counter /> : <Loading /> }
  </Bundle>;
