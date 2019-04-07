/**
 * Jogo da Velha
 * 
 * By: Manoel Silva - manoelps.ti@gmail.com
 * GameController
 */
import GameConfig from '../config/game-config';
import DOMHelper from '../services/dom-helper';

export default class GameController {

	constructor() {
		this.config = new GameConfig()
		this.helper = new DOMHelper(this.config)
		this.game = {}
	}

	async getInitialModal() {
		return this.helper.openInitialModal()
	}

	setStartGame() {
		this.helper.applyStartFunctionModalButtons()
	}
	
}