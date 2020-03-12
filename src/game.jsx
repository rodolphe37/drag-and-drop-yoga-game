import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import Board from './board';
import './game.css'
import Timer from './Timer-test';
import Animation from './Animation'


class Panel extends React.Component {
  reloadGame() {
    const { reloadGame } = this.props;

    reloadGame();
  }

  render(score) {
    const { state } = this.props;

    return (
      <div className="info">
      <Animation />
        <div className="info-block">
        <Timer />
          <div className="info-item">Score:</div>
          <div className="info-item">{ state.info.score }</div>
        </div>
        <div className="info-block">
          <div className="home">
              <img src={require("./res/home.png")} alt="home"/>
          </div>
        </div>
        <div className="info-block">
          <button className="reload" type="button" onClick={() => this.reloadGame()}>
              Recharger la page
          </button>
        </div>

      </div>
    )
  }
};

Panel = connect((state) => ({state: state}), actions)(Panel);


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Board />
        <Panel />
      </div>
    )
  }
};

export default Game;
