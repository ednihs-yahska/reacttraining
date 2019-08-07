import 'regenerator-runtime/runtime'
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Home from './components/home';

function App(){
    return(
        <Provider store={store}>
            <Router>
                <Switch>
                    {/*<Route path="/login" component={Login} />*/}
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
        </Provider>
    )
}

export default App

