(function(){

"use strict";


  // Choosing ul and then li.
  // On click add classes to this li and main and also insert nav to li.
$(".photos")
  .find("li")
      .on("click", function zooming(){
          $(this).toggleClass("zoomed");
          $("main").toggleClass("zooming");
          $(".zoomed").append($("nav"));
      });



// When next button of nav is clicked
// Go up to li and move to next li
  $(".next")
    .on("click", function next(){
      // Moving up to li
      $(this).parent().parent().next("li")
        .toggleClass("zoomed")
        .append($("nav"));
      $("main").removeClass();
    });



// When previous button of nav is clicked
// Go up to li and move to previous li
    $(".previous")
      .on("click", function next(){
        // Moving up to li
        $(this).parent().parent().prev("li")
          .toggleClass("zoomed")
          .append($("nav"));
        $("main").removeClass();
      });


})();
