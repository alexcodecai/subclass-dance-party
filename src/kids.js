var Kids = function(top, left, timeBetweenSteps) {
    //console.log("Kids k");
    Dancer.call(this,top,left,timeBetweenSteps);
    this.$node.addClass("Kids");
   //n this.$node = $('<span class="Kids"></span>')
   
  //var blinkyDancer = Dancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
    //this.timeBetweenSteps = timeBetweenSteps;
    //var oldStep = blinkyDancer.step;
  //  this.oldStep = BlinkyDancer.step;
  
    var oldStep = this.step;
 // return blinkyDancer;
};

Kids.prototype = Object.create(Dancer.prototype);
Kids.prototype.constructor = Kids;

Kids.prototype.step = function() {
   
    Dancer.prototype.step.call(this);
   // call the old version of step at the beginning of any call to this new version of step
    // oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
   //console.log(this.$node)
  // console.log(this);
   this.$node.fadeToggle();
   
  };