/**
 * Jogo da Velha
 * 
 * By: Manoel Silva - manoelps.ti@gmail.com
 * Game
 */

import ArtificialInteligence from './ai';
import DOMHelper from './dom-helper';

export default class Game {

    constructor(player, state) {
        this.helper = new DOMHelper
        this.ai = new ArtificialInteligence()
        this.state = state
        this.player = player
        this.classNames = 'cross nought blank'
    }

    startNewGame() {
        let game = this

        this.helper.toggleModal()
        this.helper.getCurrentTable().forEach((cel) => {
            $(cel).click(() => {
                game.play($(cel))
            })
        })

        if (game.player == 'machine') {
            let iaMove = game.ai.getAiMove(game)
            return game.play($('#' + String(iaMove[0]) + String(iaMove[1])))
        }
    }

    play(cell) {
        let game = this
        let currentState = game.state.currentState
        let continueGame = game.ai.draw(currentState) == false && game.state.getCurrentEmptyCells().length > 0

        if (continueGame == true) {
            let iaMove
            let x = $(cell).attr('id').split("")[0], y = $(cell).attr('id').split("")[1]
            let validMove = game.ai.validateMove(x, y, currentState)
            if (validMove == true) {
                $(cell).removeClass(this.classNames)
                $(cell).addClass(game.player == 'machine' ? 'nought' : 'cross')

                game.player == 'human' ? game.player = 'machine' : game.player = 'human'
                game.state.currentState = game.helper.getCurrentTableAsState()

                if (game.player == 'machine' && continueGame) {
                    try {
                        iaMove = game.ai.getAiMove(game)
                        return game.play($('#' + String(iaMove[0]) + String(iaMove[1])))
                    } catch (e) {
                        game.setGameOver(game.state.currentState, game.ai.globals.machine)
                    }
                }
            }
        }
        
        if (game.state.getCurrentEmptyCells().length == 0 && game.ai.draw(game.state.currentState) == false) {
            game.helper.configureModal('Fim do jogo!', 'Empate! F5 para recomeçar', false)
            game.helper.toggleModal()
        } else if (game.ai.draw(game.state.currentState) == true || game.state.getCurrentEmptyCells().length == 0) {
            game.helper.configureModal('Fim do jogo!', 'Derrota! F5 para recomeçar', false)
            game.helper.toggleModal()
        }
        game.setGameOver(game.state.currentState, game.ai.globals.machine)
        
    }

    setGameOver(currentState, machine) {
        let game = this

        if (game.ai.gameOver(currentState, machine)) {
            let lines
            let cell

            if (currentState[0][0] == 1 && currentState[0][1] == 1 && currentState[0][2] == 1) {
                lines = [[0, 0], [0, 1], [0, 2]]
            } else if (currentState[1][0] == 1 && currentState[1][1] == 1 && currentState[1][2] == 1) {
                lines = [[1, 0], [1, 1], [1, 2]]
            } else if (bocurrentStateard[2][0] == 1 && currentState[2][1] == 1 && currentState[2][2] == 1) {
                lines = [[2, 0], [2, 1], [2, 2]]
            } else if (currentState[0][0] == 1 && currentState[1][0] == 1 && currentState[2][0] == 1) {
                lines = [[0, 0], [1, 0], [2, 0]]
            } else if (currentState[0][1] == 1 && currentState[1][1] == 1 && currentState[2][1] == 1) {
                lines = [[0, 1], [1, 1], [2, 1]]
            } else if (currentState[0][2] == 1 && currentState[1][2] == 1 && currentState[2][2] == 1) {
                lines = [[0, 2], [1, 2], [2, 2]]
            } else if (currentState[0][0] == 1 && currentState[1][1] == 1 && currentState[2][2] == 1) {
                lines = [[0, 0], [1, 1], [2, 2]]
            } else if (currentState[2][0] == 1 && currentState[1][1] == 1 && currentState[0][2] == 1) {
                lines = [[2, 0], [1, 1], [0, 2]]

                for (var i = 0; i < lines.length; i++) {
                    cell = $("#" + (String(lines[i][0]) + String(lines[i][1])))
                    cell.removeClass(this.classNames)
                    cell.addClass('nought')
                }
                game.helper.configureModal('Fim do jogo!', 'Empate! F5 para recomeçar', false)
                game.helper.toggleModal()
            }
        }
    }

}