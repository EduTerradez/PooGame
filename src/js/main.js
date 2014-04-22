window.onload = function () {
  'use strict';

  var game
    , ns = window['popo'];

  game = new Phaser.Game(800, 800, Phaser.AUTO, 'popo-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);
  game.state.add('end', ns.End);

  game.state.start('boot');
};
