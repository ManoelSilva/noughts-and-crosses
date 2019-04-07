/**
 * Jogo da Velha
 * 
 * By: Manoel Silva - manoelps.ti@gmail.com
 * Main Game
 */

import GameController from './controllers/game-controller';

var gameController = {}
var modal = {}

function instantiateVariables() {
    gameController = new GameController()
}


(function () {
    instantiateVariables()

    $(window).on('load', function () {
        gameController.getInitialModal().then(() => {
            gameController.setStartGame()
        })
    })
})()