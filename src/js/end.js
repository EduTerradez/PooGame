(function() {
  'use strict';

  function End() {
    this.titleTxt = null;
    this.startTxt = null;
    this.scoreText = null;
  }

  End.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      

      this.scoreText = this.add.text(300, 300, 'SCORE: ', { font: "20px Arial", fill: "#ffffff", align: "left" });
      this.startTxt = this.add.bitmapText(x, 200, 'minecraftia', 'YOU LOOSE!');
      this.startTxt.align = 'center';
      this.startTxt.x = this.game.width / 2 - this.startTxt.textWidth / 2;
      this.scoreText.text = 'SCORE: ' + window.popo.Global.score;
      this.Entertxt = this.add.text(270, 500, 'Press Enter to Restart!', { font: "30px Arial", fill: "#ffffff", align: "left" });
      
    },

    update: function () {
    	if( this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER) ) {
      		this.game.state.start('game');
          }
    },

    
  };

  window['popo'] = window['popo'] || {};
  window['popo'].End = End;

}());