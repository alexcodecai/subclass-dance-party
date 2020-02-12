$(document).ready(function() {
  window.dancers = [];
  

  $('.addDancerButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // var star1; 
    // if(dancerMakerFunctionName === "star"){

    //  }
    //debugger;
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
      // if(dancerMakerFunctionName === "Star"){
      //     dancers.$node.css('border, 3px red')
      //   }
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width()  * Math.random(),
      Math.random() * 1000
    );
      window.dancers.push(dancer);
   // $(dancer.$node).css('color', random_color);
   // dancer.$node.css('background-color', )
   // $(dancer.$node).addClass('dancer')
     $('body').append(dancer.$node);
    // $(dancer.$node).addClass('dancer');x
    // $('body').append(dancer.$node);
    // window.dancers.push(dancer);
    // dancer.step();
  });

    debugger;
  $('.lineupButton').on('click', function(event) {
    for(var i = 0; i < window.dancers.length; i++){
      if( i % 2 === 0){  
      window.dancers[i].setPosition(i * 30 + 45, window.innerWidth * 0.20);
      } else{
        window.dancers[i].setPosition(i * 30 + 45, window.innerWidth * 0.80);
      }
    }
  })
  

  


 // dancer.setPosition(dancer.top, dancer.left);

  // $('.addStarButton').on('click', function(event) {
  
  //   var dancerStar = $(this).data('dancer-star-function-name');
  //   var starMakerFunction = window[dancerStar];

  //   var star = new starMakerFunction(
  //     $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
  //     Math.random() * 1000
  //   );
    
  //   $('body').append(star.$star);
  // });



});

