$(document).ready(function() {
  $("#open").click(function() {
    $("#envelope").removeClass("close").addClass("open");
  });

  $("#reset").click(function() {
    $("#envelope").removeClass("open").addClass("close");
  });
});

// CSS styles manipulation for better effects
$("#envelope").on("transitionend", function() {
  if ($(this).hasClass("open")) {
    $(".letter").fadeIn();
  } else {
    $(".letter").fadeOut();
  }
});
