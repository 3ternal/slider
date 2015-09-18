$(document).ready(function() {

  var lastImg = parseInt($(".slide img:last-of-type").attr("id"));
  var firstImg = parseInt($(".slide img:first-of-type").attr("id"));
  var myTimeout;

  $(".slide #2, .slide #3, .slide #4, .slide #5").hide();
  $("nav #nav1").css('background-color', '#F1F1F1');

  $("#left").click(function() {
    var currentImg = parseInt($(".slide img:visible").attr('id'));
    $("#nav"+currentImg).animate({'background-color': '#D3D3D3'}, 300);
    $(".slide img:visible").toggle("slide", {direction: "right"}, function() {
      if (currentImg > 1) {
        $(".slide img:nth-of-type("+ (currentImg - 1) + ")").toggle("slide", "left");
        $("#nav"+ (currentImg - 1)).animate({'background-color': '#F1F1F1'}, 300);
      }
      else {
        $(".slide img:last-of-type").toggle("slide");
        $("#nav"+ lastImg).animate({'background-color': '#F1F1F1'}, 300);
      }
    });

    clearTimeout(myTimeout);
    timeOut();
  });

  $("#right").click(function() {
    rightClick();
  });

  function rightClick() {
    var currentImg = parseInt($(".slide img:visible").attr('id'));
    $("#nav"+currentImg).animate({'background-color': '#D3D3D3'}, 300);
    $(".slide img:visible").fadeOut(300, function() {
      if (currentImg == lastImg) {
        $(".slide img:first-of-type").fadeIn(300);
        $("#nav"+ firstImg).animate({'background-color': '#F1F1F1'}, 300);
      }
      else {
        $(".slide img:nth-of-type("+ (currentImg + 1) + ")").fadeIn(300);
        $("#nav"+ (currentImg + 1)).animate({'background-color': '#F1F1F1'}, 300);
      }
    });

    clearTimeout(myTimeout);
    timeOut();
  }

  function timeOut() {
    myTimeout = setInterval(function() {
      rightClick();
    }, 5000);
  }

  $("#nav1, #nav2, #nav3, #nav4, #nav5").click(function(event) {
    var currentImg = parseInt($(".slide img:visible").attr('id'));
    $("#nav"+currentImg).animate({'background-color': '#D3D3D3'}, 300);

    $(".slide img:visible").fadeOut(300, function() {
      switch (event.target.id) {
        case "nav1":
          $(".slide img:nth-of-type(1)").fadeIn(300);
          $("#nav1").animate({'background-color': '#F1F1F1'}, 300);
          break;
        case "nav2":
          $(".slide img:nth-of-type(2)").fadeIn(300);
          $("#nav2").animate({'background-color': '#F1F1F1'}, 300);
          break;
        case "nav3":
          $(".slide img:nth-of-type(3)").fadeIn(300);
          $("#nav3").animate({'background-color': '#F1F1F1'}, 300);
          break;
        case "nav4":
          $(".slide img:nth-of-type(4)").fadeIn(300);
          $("#nav4").animate({'background-color': '#F1F1F1'}, 300);
          break;
        case "nav5":
          $(".slide img:nth-of-type(5)").fadeIn(300);
          $("#nav5").animate({'background-color': '#F1F1F1'}, 300);
          break;
      };
    });

    clearTimeout(myTimeout);
    timeOut();

  });

  timeOut();

});
