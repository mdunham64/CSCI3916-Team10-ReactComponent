import React from 'react';
import './App.css';
import Transactionheader from './components/transactionheader';
import AccountPage from './components/accountpage';
import Authentication from './components/authentication';
import Transaction from './components/transaction';
import Signin from './components/login';
import Confirmation from './components/confirmation';
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>
            <div>
              <Transactionheader />
              <Route exact path="/" render={()=><Signin />}/>
              <Route exact path="/account" render={()=><AccountPage />} />
              <Route exact path="/transaction" render={()=><Transaction />} />
              <Route exact path="/confirmation" render={()=><Confirmation />}/>
              <Route path="/signin" render={()=><Authentication />}/>
            </div>
          </HashRouter>
        </Provider>
      </div>
  );
}

export default App;