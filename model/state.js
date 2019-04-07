/**
 * Jogo da Velha
 * 
 * By: Manoel Silva - manoelps.ti@gmail.com
 * State
 */

export default class State {

    constructor(currentState) {
        this.currentState = currentState
    }

    getCurrentEmptyCells() {
        var cells = []
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                if (this.currentState[x][y] == 0) {
                    cells.push([x, y])
                }
            }
        }

        return cells
    }

}