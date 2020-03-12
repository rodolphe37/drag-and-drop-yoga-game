import React from 'react';
import './Modal.css'

import { GAME_STATE, getTotalScore } from './Timer-test';

const reloadGame = () => {
  window.location.reload(false);
}


const Modal = ({ gameState, startGame, timeLeft, resetGame }) => (
  <div className="modal modal-sm active">
    <div className="modal-overlay" />
    <div className="modal-container">
      <div className="modal-header">
        <div className="modal-title h4"></div>
      </div>
      <div className="modal-body">
        <div className="content h6">
          {' '}
          {gameState === GAME_STATE.READY
            ? `Alignez les positions "asanas" par trois identiques minimum. Attention vous n'avez que 180 secondes (3 minutes), faite-le rapidement pour avoir un meilleur score...`
            : `Votre score - ${getTotalScore( timeLeft)}`}
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="reload"
          onClick={gameState === GAME_STATE.READY ? startGame : resetGame && reloadGame}
        >
          {gameState === GAME_STATE.READY ? 'Commencer le Jeu' : 'Recommencer le Jeu'}
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
