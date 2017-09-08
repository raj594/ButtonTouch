window.onload = function() {
  $("#fixed").click(logic.fixed);
  $("#mixed").click(logic.mixed);
};

var fixed = 0;
var mixed = 0;
var progress = 0;
var fixedDone = false;
var mixedDone = false;

var logic = {

  count: 0,

  fixed: function() {
  	setTimeout(function(){
        logic.reset();
      }, 5000);
  	$('.prize').hide();
  	fixed++;
  },

  reset: function() {
  	logic.count++
  	progress += 5;
  	$('.prize').show();
  	$('.progress-bar').attr('style', 'width:' + progress + '%');
	  	if (logic.count === 20) {
	  		progress = 0;
	  		logic.count = 0;
	  		$('#score').text("");
	  		alert('You are done!');
	  		alert('There were ' + fixed + " fixed choices")
	  		alert('There were ' + mixed + " mixed choices")
	  		$('.progress-bar').attr('style', 'width:' + progress + '%');

	  	}
  	
  },

  mixed: function() {
  	var oneOrTen = Math.random() < 0.5 ? 1 : 10;
  	setTimeout(function(){
        logic.reset();
      }, oneOrTen * 1000);
  	$('.prize').hide();
  	mixed++;
  },

};