var BlinkyDancer = function(top,left,timeBetweenSteps) {
   //console.log("BlinkDancer k");
   //debugger;
    Dancer.call(this,top,left,timeBetweenSteps);
    this.$node.addClass("blink")
    //removeClass("dancer");
    // this.$node.removeClass("dancer");
     //this.$node.prepend('<img class="LBJ" src="image/a51.jpg" />');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
    //this.timeBetweenSteps = timeBetweenSteps;
    var oldStep = this.step;
  //  this.oldStep = BlinkyDancer.step;
  

 // return blinkyDancer;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
   
    Dancer.prototype.step.call(this);
   // call the old version of step at the beginning of any call to this new version of step
    // oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
   //console.log(this.$node)
   
   
   
   this.$node.toggle().delay(800);
   
  };


//   BlinkyDancer.prototype.lineUp = function(top, left) {
//     this.setPosition(top, left);
//     this.$node.css('border-color', this._randomColor());
//  };