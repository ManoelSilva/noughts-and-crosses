/**
 * Sistema de lead - Unifor
 * 
 * By: Manoel Silva - manoelsilva@unifor.br
 * Game Config
*/

export default class GameConfig {

    constructor() {
        this.text = {
            'getInitialModalTitle': 'Iniciar jogo',
            'getInitialPhrase': 'Selecione o primeiro jogador',
            'getHumanText': 'Homem',
            'getMachineText': 'Máquina',
            'getInitialModalBody': (text) => { return this.getInitialModalBody(text) },
        }
    }

    getInitialModalBody(text) {
        return '<div class="col-md-12 text-center">' + text.getInitialPhrase + '<br> <button type="button" class="btn btn-warning human">'
            + text.getHumanText + '</button>' + '<button type="button" class="btn btn-info machine">' + text.getMachineText + '</button>' + '</div>'
    }

}