// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  //var dancer = {};
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top,left);

  
};


Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    //console.log("1" + Dancer.step)
    var dancerstep = this.step;
    setTimeout(dancerstep.bind(this),this.timeBetweenSteps);
   
  };
  
  
  Dancer.prototype.setPosition = function(top,left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    //this.$star.css(styleSettings);

    this.$node.css(styleSettings);
   // this.$star.css(styleSettings);
  };

  // Dancer.prototype._randomColor = function (){
  //   return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  // }
  // Dancer.prototype.setRandomColor = function(){
  //   return var randomColor = Math.floor(Math.random()*16777215).toString(16);
  // }