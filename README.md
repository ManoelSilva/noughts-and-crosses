
Tecnologias utilizadas
•	ES6
•	JQuery
•	Bootstrap
•	Webpack

Classes e suas funções
    •	GameConfig:
        o	Classe de configuração que contém a maioria das frases utilizadas nos componentes visuais do jogo.
    •	State:
        o	Classe modelo que representa o estado atual do jogo.
    •	GameController: 
        o	Classe de controle que abre a modal inicial e seta a função de iniciar o jogo (botão de opção humano instância um novo objeto Game com “human” atribuído para a variável player deste objeto, e Máquina atribui “machine” para a mesma).
    •	ArtificialInteligence:
        o	Classe de serviço que contém as lógicas utilizadas para a realização da jogada da máquina após tomada de decisão, através do algoritmo minMax, verificação dos estados de empate ou fim de jogo e validação do movimento escolhido para a máquina.
    •	DOMHelper:
        o	Classe de serviço que auxilia na manipulação dos elementos HTML, contidos na camada de visão, para estrutura de dados que possa ser trabalhado pela classe IA. Contém também métodos como: abrir/fechar modal, aplicar função de início de jogo nos botões da modal inicial e outros que estão relacionados a manipulação de elementos visuais. 
    •	Game:
        o	Classe de serviço que representa o jogo propriamente dito. Nela possuímos associação com as classes IA, DOMHelper e State. Possui funções com a responsabilidade de iniciar o jogo, realizar uma jogada, independente do jogador, e setar o fim do jogo.
