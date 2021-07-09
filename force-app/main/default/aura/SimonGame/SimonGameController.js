({ 
	StartGame : function(component, event, helper) {
        
		let btnClicked = event.getSource();
        component.set("v.footMessage", 'Wait for the computer');
        var cmpTarget = component.find('startGame');
        $A.util.addClass(cmpTarget, 'hidden'); 
        helper.nextRound(component, event, helper);
	},
    handleRedClick : function(cmp, event, helper){
        helper.handleColorClick(cmp, event, 'red');
    },
    handleGreenClick : function(cmp, event,helper){
        helper.handleColorClick(cmp, event, 'green');
    },
    handleBlueClick : function(cmp, event, helper){
        helper.handleColorClick(cmp, event, 'blue');
    },
     handleYellowClick : function(cmp, event, helper){
        helper.handleColorClick(cmp, event, 'yellow');
    },
     
})
