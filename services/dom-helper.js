/**
 * Jogo da Velha
 * 
 * By: Manoel Silva - manoelps.ti@gmail.com
 * DOMHelper
 */

import Game from './game';
import State from '../model/state';

export default class DOMHelper {

    constructor(gameConfig) {
        this.gameConfig = gameConfig
    }

    getCurrentTable() {
        return Array.prototype.slice.call(document.getElementById("game-table").getElementsByTagName("li"))
    }

    getCurrentTableAsState() {
        let helper = this
        var tableAsSate = [], i, k;

        for (i = 0, k = -1; i < helper.getCurrentTable().length; i++) {
            let element = -1
            if (i % 3 === 0) {
                k++
                tableAsSate[k] = []
            }
            if ($(helper.getCurrentTable()[i]).attr('class') == "blank") {
                element = 0
            } else if ($(helper.getCurrentTable()[i]).attr('class') == "nought") {
                element = 1
            }

            tableAsSate[k].push(element)
        }

        return tableAsSate
    }

    openInitialModal() {
        this.configureModal(this.gameConfig.text.getInitialModalTitle,
            this.gameConfig.text.getInitialModalBody(this.gameConfig.text), false)
        $('#game-modal').modal({
            backdrop: 'static',
            keyboard: false
        })
    }

    toggleModal() {
        $('#game-modal').modal('toggle')
        return false
    }

    configureModal(title, body, close) {
        $('.title').text(title)
        $('.body').html(body)
        if (close) {
            $('.close').show()
        } else {
            $('.close').hide()
        }
    }

    applyStartFunctionModalButtons() {
        $('.human').on('click', () => {
            return new Game('human', new State(this.getCurrentTableAsState())).startNewGame()
        })

        $('.machine').on('click', async () => {
            return new Game('machine', new State(this.getCurrentTableAsState())).startNewGame()
        })
    }

}