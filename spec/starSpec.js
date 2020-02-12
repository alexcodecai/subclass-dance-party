describe('star', function() {

    var star, clock;
    var timeBetweenSteps = 100;
  
    beforeEach(function() {
      clock = sinon.useFakeTimers();
      star = new Star(10, 20, timeBetweenSteps);
    });
  
    it('should have a jQuery $node object', function() {
      expect(star.$node).to.be.an.instanceof(jQuery);
    });
  
    it('should have a step function that makes its node blink', function() {
      sinon.spy(star.$node, 'toggle');
      star.step();
      expect(star.$node.fadeToggle.called).to.be.true;
    });
  
    describe('dance', function() {
      it('should call step at least once per second', function() {
        sinon.spy(star, 'step');
        expect(star.step.callCount).to.be.equal(0);
        clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
        clock.tick(timeBetweenSteps);
       // console.log(star.step.callCount);
        expect(star.step.callCount).to.be.equal(1);
  
        clock.tick(timeBetweenSteps);
         expect(star.step.callCount).to.be.equal(2);
      });
    });
  });