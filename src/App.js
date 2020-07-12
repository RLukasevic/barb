import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import * as actions from './Store/Actions/index';
import { connect } from 'react-redux';
import Main from './Containers/Main/Main';
import Checkout from './Containers/Checkout/Checkout';


class App extends Component {

  componentDidMount() {
    this.props.authCheckState();
  }


  render() {
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
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.authData.idToken !== null,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    authCheckState: () => dispatch(actions.authCheckState()),
  };
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
