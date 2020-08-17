import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import * as actions from './Store/Actions/index';
import { connect } from 'react-redux';
import Main from './Containers/Main/Main';
import Checkout from './Containers/Checkout/Checkout';
import Favorites from './Components/Favorites/Favorites';
import Discounts from './Components/Discounts/Discounts';
import EkoIrUkis from './Components/EkoIrUkis/EkoIrUkis';
import New from './Components/New/New';
import Recipes from './Components/Recipes/Recipes';


class App extends Component {

  componentDidMount() {
    this.props.authCheckState();
    this.props.fetchFavorites();
  }

  render() {

    let routes = (
      <Switch>
        <Route path='/checkout' component={Checkout} />
        <Route path='/' exact component={Main} />
        <Route path='/item/:id' render={(props) => (<Main {...props} pageMode={'details'} />)}  />
        <Route path='/myfavorites' exact render={(props) => (<Main {...props} pageMode={'myfavorites'} />)}  />
        <Route path='/discounts' exact render={(props) => (<Main {...props} pageMode={'discounts'} />)}  />
        <Route path='/ekoirukis' exact render={(props) => (<Main {...props} pageMode={'ekoirukis'} />)}  />
        <Route path='/new' exact render={(props) => (<Main {...props} pageMode={'new'} />)}  />
        <Route path='/recipes' exact render={(props) => (<Main {...props} pageMode={'recipes'} />)}  />
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
