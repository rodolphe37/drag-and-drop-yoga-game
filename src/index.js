import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Game from './game';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>

    <div className="header">
      <img className="App-logo" src={require('./logo.svg')} alt=""/>
      <h1>Match3 Yoga Game</h1>
      <br />
      <p>By Rodolphe Augusto</p>
    </div>
        <Game />
    </Provider>,
    document.getElementById('root')
)
