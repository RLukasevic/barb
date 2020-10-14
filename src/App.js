import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import * as actions from './Store/Actions/index';
import { connect } from 'react-redux';
import Main from './Containers/Main/Main';


class App extends Component {

  componentDidMount() {
    this.props.authCheckState();
    this.props.fetchFavorites();
  }

  render() {

    let routes = (
      <Switch>
        <Route path='/item/:id' render={(props) => (<Main {...props} pageMode={'details'} />)}  />
        <Route path='/myfavorites' render={(props) => (<Main {...props} pageMode={'myfavorites'} />)}  />
        <Route path='/discounts' render={(props) => (<Main {...props} pageMode={'discounts'} />)}  />
        <Route path='/ekoirukis' render={(props) => (<Main {...props} pageMode={'ekoirukis'} />)}  />
        <Route path='/new' render={(props) => (<Main {...props} pageMode={'new'} />)}  />
        <Route path='/recipes' render={(props) => (<Main {...props} pageMode={'recipes'} />)}  />
        <Route path='/history' render={(props) => (<Main {...props} pageMode={'history'} />)} />
        <Route path='/account' render={(props) => (<Main {...props} pageMode={'account'} />)} />
        <Route path='/mobcart' render={(props) => (<Main {...props} pageMode={'mobcart'} />)} />
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
    favorited: state.home.favorited,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    authCheckState: () => dispatch(actions.authCheckState()),
    fetchFavorites: () => dispatch(actions.fetchFavorites()),
  };
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
