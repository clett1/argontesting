function ARProjection(leftArrow, rightArrow) {
    
    this.numViews = 0;
    this.currentView = null;
    this.views = [];
    this.startX = null;
    this.movingX = null;
    this.endX = null;
    this.xDifference = null;
    this.swipeDirection = null;
    
    leftArrow.addEventListener('touchstart', this.leftArrowClicked.bind(this));
    
    rightArrow.addEventListener('touchstart', this.rightArrowClicked.bind(this));
}

ARProjection.prototype.addView = function(view) {
    this.views.push(view);
    view.parent = this;
}
/*
ARProjection.prototype.handleTouchStart = function(event) {
    
}

ARProjection.prototype.handleTouchMove = function(event) {
    
    if(event.targetTouches.length == 1){
        //trigger target touches
        this.movingX = event.touches[0].clientX;

    } else if(event.targetTouches.length == 2){
        //Potentially add two-finger swipe event to skip through music  
    }
    
    //makeTransition
}

ARProjection.prototype.handleTouchEnd = function(event) {
    
    this.endX = this.movingX;
    this.xDifference = this.endX - this.startX;
    
    
    if(this.xDifference > 100) {
        //right swipe
        this.swipedRight(this.xDifference);
        
    } else if(this.xDifference < -100){
        //left swipe
        this.swipedLeft(this.xDifference);
        
    } else {
        //xDifference = 0
    }
}
*/
ARProjection.prototype.setFSM = function(startState, fsm) {
    this.states = fsm;
    this.currentState = fsm[startState];
}

ARProjection.prototype.rightArrowClicked = function(event) {
    
    this.swipeDirection = "right"; 
    
    //current view position
    var viewPos = this.views.indexOf(this.currentView);
        
    if(this.currentView == this.views[0]) {
        //nothing can happen
    } else {
        //switch current views
        this.views[viewPos].isVisible = "false";
        
        viewPos--;
        var newPos = viewPos;
        this.currentView = this.views[newPos];
        
        this.views[newPos].isVisible = "true";
        this.views[newPos].play();
        this.currentView.transitionAnimation(newPos, this.swipeDirection);    
    }
}

ARProjection.prototype.leftArrowClicked = function(event) {
    
    this.swipeDirection = "left";
    
    //current view position
    var viewPos = this.views.indexOf(this.currentView);
    
    if(this.currentView == this.views[3]) {
        //nothing can happen
    } else {
        //switch current views
        this.views[viewPos].isVisible = "false";

        viewPos++;
        var newPos = viewPos;
        this.currentView = this.views[newPos];        
        this.views[newPos].isVisible = "true";
        this.views[newPos].play();
        this.currentView.transitionAnimation(newPos, this.swipeDirection);     
    }
}

ARProjection.prototype.makeTransition = function() {
    //
}
