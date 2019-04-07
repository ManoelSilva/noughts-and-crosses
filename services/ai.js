/**
 * Jogo da Velha
 * 
 * By: Manoel Silva - manoelps.ti@gmail.com
 * ArtificialInteligence
 */

export default class ArtificialInteligence {

    constructor() {
        this.globals = {
            'human': -1,
            'machine': 1,
        }
    }

    getAiMove(game) {
        let aiMove
        let ai = this
        let state = game.state
        if (state.getCurrentEmptyCells().length == 9) {
            let x = parseInt(Math.random() * 3), y = parseInt(Math.random() * 3)
            if (ai.validateMove(x, y, state.currentState)) {
                aiMove = [x, y]
            } else {
                return ai.getAiMove(game)
            }
        } else {
            aiMove = this.minMax(game, state.currentState, state.getCurrentEmptyCells().length, this.globals[game.player])
            if (!ai.validateMove(aiMove[0], aiMove[1], state.currentState)) {
                return ai.getAiMove(game)
            } 
        }
        return aiMove
    }

    validateMove(x, y, currentState) {
        try {
            if (currentState[x][y] == 0) {
                return true
            } else {
                return false
            }
        } catch (e) {
            return false
        }
    }

    gameOver(state, player) {
        let ai = this
        let endState = [
            [state[0][0], state[0][1], state[0][2]],
            [state[1][0], state[1][1], state[1][2]],
            [state[2][0], state[2][1], state[2][2]],
            [state[0][0], state[1][0], state[2][0]],
            [state[0][1], state[1][1], state[2][1]],
            [state[0][2], state[1][2], state[2][2]],
            [state[0][0], state[1][1], state[2][2]],
            [state[2][0], state[1][1], state[0][2]],
        ]

        for (let i = 0; i < 8; i++) {
            let line = endState[i]
            let filled = 0
            for (let j = 0; j < 3; j++) {
                if (line[j] == ai.globals[player])
                    filled++
            }
            if (filled == 3) {
                return true
            }
        }

        return false
    }

    draw(state) {
        return this.gameOver(state, 'human') || this.gameOver(state, 'machine')
    }

    minMax(game, state, depth, player) {
        let ai = this
        let bestMove

        if (player == ai.globals.machine) {
            bestMove = [-1, -1, -1000]
        } else {
            bestMove = [-1, +1, +1000]
        }

        if (depth == 0 || ai.draw(state)) {
            let score = ai.smarthAgent(state)
            console.log('score', score)
            return [-1, -1, score]
        }

        game.state.getCurrentEmptyCells().forEach((cell) => {
            let x = cell[0]
            let y = cell[1]
            state[x][y] = player

            let score = ai.minMax(game, state, depth - 1, -player)
            state[x][y] = 0
            score[0] = x
            score[1] = y

            if (player == ai.globals.machine) {
                if (score[2] > bestMove[2])
                    bestMove = score
            } else {
                if (score[2] < bestMove[2])
                    bestMove = score
            }
        })

        console.log('getIAMove bestmove', bestMove)
        return bestMove
    }

    smarthAgent(state) {
        var score = 0

        if (this.gameOver(state, 'machine')) {
            score = +1
        }
        else if (this.gameOver(state, 'human')) {
            score = -1
        } else {
            score = 0
        }

        return score
    }

}