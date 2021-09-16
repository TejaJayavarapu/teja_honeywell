import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ApiDetail from './components/ApiDetail/ApiDetail';
import ApiList from './components/ApiList/ApiList';

function PageNotFound(props) {
  return (
    <div>
      No such route go to
      <Link to='/'>Home Page</Link>
    </div>
  );
}

const Routes = () => (
  <Switch>
    <Route path="/api/:id" exact component={ApiDetail} />
    <Route path="/" exact component={ApiList} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default Routes;
