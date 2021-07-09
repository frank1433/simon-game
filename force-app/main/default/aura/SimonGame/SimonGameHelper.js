({
	nextRound : function(cmp, event) {
		let level=cmp.get("v.level");
        level+=1;
        cmp.set("v.level", level);
        let nextSequence=cmp.get("v.sequence");
        console.log(nextSequence);
        nextSequence.push(this.nextStep(cmp,event));
        console.log(nextSequence);
        cmp.set("v.sequence", nextSequence);
        this.playRound(cmp, event);
         setTimeout(() => {
         this.playerTurn(cmp,event);
       }, level * 600 + 1000);
	},
    nextStep : function(cmp, event) {
        let tiles = ['red', 'green', 'blue', 'yellow'];
        let random = tiles[Math.floor(Math.random() * tiles.length)];
        console.log(random);
        return random;
    },
    playRound : function(cmp, event){
        let sequence=cmp.get("v.sequence");
        console.log(sequence);
        sequence.forEach((color, index) => {
            setTimeout(() => {
            this.activateBtn(cmp, event,color);
        }, (index + 1) * 600);
        });
   },
            
   activateBtn : function(cmp, event, color) {
                const btn=cmp.find(color);
                const sound=cmp.find('sound-'+color);
                $A.util.removeClass(btn, color);
                $A.util.addClass(btn, 'activated');
                var playSound=new Audio(sound);
                playSound.play();
                console.log(color);
                console.log(btn);
                setTimeout(() => {
                    $A.util.removeClass(btn, 'activated');
                }, 300);
  },
  playerTurn: function(cmp, event){
      let btns=cmp.find('container'); 
      $A.util.removeClass(btns, 'unclickable');
      let message=cmp.get('v.level');
      cmp.set('v.headMessage', "It is your turn level: "+ message);
  },
  resetGame : function(cmp, event, text){
        let sequence= []; 
        let playerSequence= []; 
        let level = 0;
        cmp.set('v.levle', level);
        cmp.set('v.sequence', sequence);
        cmp.set('v.playerSequence', playerSequence);
        cmp.set('v.successMessage', text);
   },
   handleColorClick : function(cmp, event, btn){
        var playerSequence=cmp.get('v.playerSequence');
        var sequence=cmp.get('v.sequence');
        const index=playerSequence.push(btn)-1;
       console.log(playerSequence);
       console.log(sequence);
       const remains = sequence.length - playerSequence.length;
       if (playerSequence[index] !== sequence[index]) {
           this.resetGame(cmp, event, 'Game over, you pressed the wrong button.');
           return;
       }
        if (playerSequence.length === sequence.length) {
            if (playerSequence.length === 20) {
                resetGame('Congrats! You finished the game!!');
                return
            }
            playerSequence = [];
            console.log('test');
            cmp.set('v.playerSequence', playerSequence);
            cmp.set('v.successMessage', 'Success!');
            setTimeout(() => {
                this.nextRound(cmp, event);
            }, 1000);
                return;
        }
    }
  
})
