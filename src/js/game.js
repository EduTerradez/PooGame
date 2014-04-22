(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.bullets;
    this.enemyvelocity;
    this.fireRate;
    this.nextFire = 5;
    
    this.enemys;
    
    this.score;
    this.scoreText = null;
    this.auxiliar;
    this.numEnemys;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      
      this.background = this.game.add.tileSprite(0, 0, 800, 800, 'background');
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      
      this.score = 0;
      this.numEnemys = 5;
      this.fireRate = 350;
      this.enemyvelocity = 50;
      this.auxiliar = 10;
      
      this.posciones = new Array();
      this.position1 = new this.position(100,100);
      this.position2 = new this.position(200,50);
      this.position3 = new this.position(400,0);
      this.position4 = new this.position(600,50);
      this.position5 = new this.position(700,100);
      this.position6 = new this.position(0,200);
      this.position7 = new this.position(800,200);
      this.position8 = new this.position(0,400);
      this.position9 = new this.position(800,400);
      this.position10 = new this.position(100,700);
      this.position11 = new this.position(200,800);
      this.position12 = new this.position(400,800);
      this.position13 = new this.position(700,700);
      
      

      this.bullets = this.game.add.group();
      this.bullets.enableBody = true;
      this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

      this.bullets.createMultiple(1000, 'bullet');
      this.bullets.setAll('checkWorldBounds', true);
      this.bullets.setAll('outOfBoundsKill', true);
      
      this.player = this.game.add.sprite(400, 400, 'player');
      this.player.anchor.set(0.5);

      this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

      this.player.body.allowRotation = false;
      
      this.numEnemys = 3;
      this.enemys = this.game.add.group();
      this.enemys.enableBody = true;
      this.enemys.physicsBodyType = Phaser.Physics.ARCADE;
      this.enemys.createMultiple(this.numEnemys, 'enemy');
      this.enemys.setAll('anchor.x', 0.5);
      this.enemys.setAll('anchor.y', 1);
      this.enemys.setAll('checkWorldBounds', true);
      this.enemys.setAll('outOfBoundsKill', true);
      
      this.scoreText = this.add.text(20, 0, 'SCORE: ', { font: "20px Arial", fill: "#ffffff", align: "left" });
      
    },

    update: function () {
    	if(this.score > this.auxiliar){
    		this.numEnemys += 1;
    		this.enemys.createMultiple(this.numEnemys, 'enemy');
    		this.auxiliar += this.numEnemys+3;
    		this.fireRate -= 30;
    		console.log("hola");
    	}
    	
    	
    	
    	
      this.player.rotation = this.game.physics.arcade.angleToPointer(this.player);

      if (this.game.input.activePointer.isDown){
          this.fire();
      }
      
      
      this.enemy = this.enemys.getFirstExists(false);
      if (this.enemy)
          {
             
              var aux = this.getRandomPosition();
              this.enemy.reset(aux.x, aux.y);
              this.game.physics.arcade.moveToObject(this.enemy,this.player,this.enemyvelocity + (Math.floor(Math.random() * (30 - 1 + 1)) + 1));
              

        }
      
     this.game.physics.arcade.collide(this.bullets, this.enemys, function(bullet, enemys){enemys.kill(); bullet.kill();this.score ++;},null,this);
     this.game.physics.arcade.collide(this.player, this.enemys, function(){window.popo.Global.score = this.score;;this.game.state.start('end');},null,this);
      
     
     this.scoreText.text = 'SCORE: ' + this.score;
     
    },
    position : function(x,y){
    	this.x = x;
    	this.y = y;
    },
    
    getRandomPosition : function(){
    	var pos = Math.floor(Math.random() * (13 - 1 + 1)) + 1;
    	if(pos === 1){
    		return this.position1;
    		
    	}
    	else if(pos === 2){
    		return this.position2;
    		
    	}
    	else if(pos === 3){
    		return this.position3
    		
    	}
    	else if(pos === 4){
    		return this.position4;
    		
    	}
    	else if(pos === 5){
    		return this.position5;
    		
    	}
    	else if(pos === 6){
    		return this.position6;
    		
    	}
    	else if(pos === 7){
    		return this.position7;
    		
    	}
    	else if(pos === 8){
    		return this.position8;
    		
    	}
    	else if(pos === 9){
    		return this.position9;
    		
    	}
    	else if(pos === 10){
    		return this.position10;
    		
    	}
    	else if(pos === 11){
    		return this.position11;
    		
    	}
    	else if(pos === 12){
    		return this.position12;
    		
    	}
    	else if(pos === 13){
    		return this.position13;
    		
    	}
    	
    },
    
    fire : function() {

        if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0){
        	this.nextFire = this.game.time.now + this.fireRate;

            this.bullet = this.bullets.getFirstDead();

            this.bullet.reset(this.player.x - 8, this.player.y - 8);

            this.game.physics.arcade.moveToPointer(this.bullet, 300);
        }

    }


  };

  window['popo'] = window['popo'] || {};
  window['popo'].Game = Game;

}());
