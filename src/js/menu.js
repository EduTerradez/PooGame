(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
    this.nucleus = null;
    this.enemy = null;
    this.electron = null;
    this.nucleustxt = null;
    this.enemytext = null;
    this.electrontxt = null;
    this.Entertxt = null;
    
    
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      
      
      this.nucleustxt = this.add.text(270, 310, 'Your nucleus!', { font: "20px Arial", fill: "#ffffff", align: "left" });
      this.enemytext = this.add.text(270, 380, 'The enemys', { font: "20px Arial", fill: "#ffffff", align: "left" });
      this.electrontxt = this.add.text(270, 430, 'Your electrons!', { font: "20px Arial", fill: "#ffffff", align: "left" });
      this.Entertxt = this.add.text(270, 500, 'Press Enter to start!', { font: "30px Arial", fill: "#ffffff", align: "left" });
      this.startTxt = this.add.bitmapText(180, 200, 'minecraftia', 'PROTECT THE NUCLEUS');
      this.startTxt.align = 'center';
      this.nucleus = this.game.add.sprite(200, 300, 'player');
      this.enemy = this.game.add.sprite(210, 380, 'enemy');
      this.electron = this.game.add.sprite(210, 440, 'bullet');
    },

    update: function () {
    	if( this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER) ) {
      		this.game.state.start('game');
          }
    },

   
  };

  window['popo'] = window['popo'] || {};
  window['popo'].Menu = Menu;

}());
