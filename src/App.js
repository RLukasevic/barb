import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
import Main from './Containers/Main/Main';
import Checkout from './Containers/Checkout/Checkout';
import Header from './Components/Header/header';

const App = props => {

  let routes = (
    <Switch>
      <Route path='/checkout' component={Checkout} />
      <Route path='/' exact component={Main} /> 
      <Redirect to='/' />        
    </Switch>
  );

  return (

    <div>
      {routes}
      <Header/>
    </div>

  );
}

/*const mapStateToProps = state => {
  return {

  };
}

const mapDispatchToProps = dispatch => {
  return {
    
  };
}*/

export default withRouter(App);
//export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
