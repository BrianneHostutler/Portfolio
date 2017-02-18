$(document).ready(function(){
console.log ("Hi!");

  $(window).scroll(function(){
      var scrolled= $(document).scrollTop();
      if (scrolled > 50) {
        // $('.navWrapper').css({"background-color":"white"});
        // $('#navigation a').css({"color":"black"});
      $(".navWrapper").addClass("Stage2");
      }
      else if (scrolled < 50) {
       $(".navWrapper").removeClass("Stage2");
      } else {
      }
  });

});
