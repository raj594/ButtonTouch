window.onload = function() {
  $("#fixed").click(logic.fixed);
  $("#variable").click(logic.variable);
};

var fixed = 0;
var mixed = 0;
var progress = 0;

var logic = {

  count: 0,

  fixed: function() {
  	setTimeout(function(){
        logic.reset();
      }, 500);
  	$('.prize').hide();
  	fixed++;
  },

  reset: function() {
  	logic.count++
  	progress += 5;
  	$('.prize').show();
  	$('.progress-bar').attr('style', 'width:' + progress + '%');
  	if (logic.count === 20) {
  		alert('You are done!');
  		logic.score = "";
  		logic.count = 0;
  		$('#score').text("");
  		alert('There were ' + fixed + " fixed choices")
  		alert('There were ' + mixed + " mixed choices")
  	}
  },

  variable: function() {
  	var oneOrTen = Math.random() < 0.5 ? 1 : 10;
  	setTimeout(function(){
        logic.reset();
      }, oneOrTen * 100);
  	$('.prize').hide();
  	mixed++;
  },
  
};