$(document).ready(function() {

  var lastImg = parseInt($(".slide img:last-of-type").attr("id"));
  var firstImg = parseInt($(".slide img:first-of-type").attr("id"));
  var myTimeout;

  $(".slide #2, .slide #3, .slide #4, .slide #5").hide();
  $("nav #nav1").css('background-color', '#F1F1F1');

  $("#right").click(function() {
    rightClick();
  });

  $("#left").click(function() {
    leftClick();
  });

  function leftClick() {
    var currentImg = parseInt($(".slide img:visible").attr('id'));
    var currentImgJquery = ".slide img:nth-of-type("+currentImg+")";
    var prevImgJquery = ".slide img:nth-of-type("+ (currentImg - 1) + ")";

    $("#nav"+currentImg).animate({'background-color': '#D3D3D3'}, 600);

    if (currentImg == firstImg) {
      $(currentImgJquery).css('left', 0);

      //move current img offscreen to right
      $(currentImgJquery).animate(
        {"left": "+" + $(".slide").width()},
        {duration: 600, queue: false, complete: function() {
          $(currentImgJquery).hide();
        }}
      );

      //show last img and offset position
      $(".slide img#5").show().css( {
        "left": "-" + $(".slide").width() * 2,
        "display": "inline"
      });

      //move last img onscreen from left
      $(".slide img#5").animate(
        {"left": "-" + $(".slide").width()},
        {duration: 600, queue: false, complete: function() {
          $(".slide img#5").css('left', '0');
        }}
      )

      //fade in next nav button
      $("#nav"+ lastImg).animate(
        {'background-color': '#F1F1F1'},
        {duration: 600, queue: false}
      )
    }

    else {
      $(currentImgJquery).css('left', "-" + $(".slide").width());

      //move current img offscreen to right
      $(currentImgJquery).animate(
        {"left": "0"},
        {duration: 600, queue: false, complete: function() {
          $(currentImgJquery).hide();
        }}
      );

      //show next img and force inline display
      $(prevImgJquery).show().css( {
        'left': "-" + $(".slide").width(),
        "display": "inline"
      });

      //move next img onscreen to right
      $(prevImgJquery).animate(
        {"left": "0"},
        {duration: 600, queue: false, complete: function() {
          $(prevImgJquery).css('left', '0');
        }}
      )

      //fade in next nav button
      $("#nav"+ (currentImg - 1)).animate(
        {'background-color': '#F1F1F1'},
        {duration: 600, queue: false}
      )
    }

    clearTimeout(myTimeout);
    timeOut();
  }

  function rightClick() {
    var currentImg = parseInt($(".slide img:visible").attr('id'));
    var currentImgJquery = ".slide img:nth-of-type("+currentImg+")";
    var nextImgJquery = ".slide img:nth-of-type("+ (currentImg + 1) + ")";

    //fade out current nav button
    $("#nav"+currentImg).animate({'background-color': '#D3D3D3'}, 600);

    if (currentImg == lastImg) {
      $(currentImgJquery).css('left', "-" + $(".slide").width());

      //move current img offscreen to left
      $(currentImgJquery).animate(
        {"left": "-" + $(".slide").width() * 2},
        {duration: 600, queue: false, complete: function() {
          $(currentImgJquery).hide();
        }}
      );

      //show first img and offset position
      $(".slide img#1").show().css( {
        "left": "+" + $(".slide").width(),
        "display": "inline"
      });

      //move first img onscreen to default position
      $(".slide img#1").animate(
        {"left": "0"},
        {duration: 600, queue: false}
      )

      //fade in next nav button
      $("#nav"+ firstImg).animate(
        {'background-color': '#F1F1F1'},
        {duration: 600, queue: false}
      )
    }

    else {
      //move current img offscreen to left
      $(currentImgJquery).animate(
        {"left": "-" + $(".slide").width()},
        {duration: 600, queue: false, complete: function() {
          $(currentImgJquery).hide();
        }}
      );

      //show next img and force inline display
      $(nextImgJquery).show().css( {
        'left': "0",
        "display": "inline"
      });

      //move next img onscreen to left
      $(nextImgJquery).animate(
        {"left": "-" + $(".slide").width()},
        {duration: 600, queue: false, complete: function() {
          $(nextImgJquery).css('left', '0');
        }}
      )

      //fade in next nav button
      $("#nav"+ (currentImg + 1)).animate(
        {'background-color': '#F1F1F1'},
        {duration: 600, queue: false}
      )
    }

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
    var currentImgJquery = ".slide img:nth-of-type("+currentImg+")";
    var nextImgJquery = ".slide img:nth-of-type("+ event.target.id[3] + ")";

    $("#nav"+currentImg).animate({'background-color': '#D3D3D3'}, 600);

    if (event.target.id[3] > currentImg) {
      //move current img offscreen to left
      $(currentImgJquery).animate(
        {"left": "-" + $(".slide").width()},
        {duration: 600, queue: false, complete: function() {
          $(currentImgJquery).hide();
        }}
      );

      //show next img and force inline display
      $(nextImgJquery).show().css( {
        'left': "0",
        "display": "inline"
      });

      //move next img onscreen to left
      $(nextImgJquery).animate(
        {"left": "-" + $(".slide").width()},
        {duration: 600, queue: false, complete: function() {
          $(nextImgJquery).css('left', '0');
        }}
      )
    }

    else if (event.target.id[3] < currentImg) {
      $(currentImgJquery).css('left', "-" + $(".slide").width());

      //move current img offscreen to right
      $(currentImgJquery).animate(
        {"left": "0"},
        {duration: 600, queue: false, complete: function() {
          $(currentImgJquery).hide();
        }}
      );

      //show next img and force inline display
      $(nextImgJquery).show().css( {
        'left': "-" + $(".slide").width(),
        "display": "inline"
      });

      //move next img onscreen to right
      $(nextImgJquery).animate(
        {"left": "0"},
        {duration: 600, queue: false, complete: function() {
          $(nextImgJquery).css('left', '0');
        }}
      )
    }

    switch (event.target.id) {
      case "nav1":
        $("#nav1").animate({'background-color': '#F1F1F1'}, 600);
        break;
      case "nav2":
        $("#nav2").animate({'background-color': '#F1F1F1'}, 600);
        break;
      case "nav3":
        $("#nav3").animate({'background-color': '#F1F1F1'}, 600);
        break;
      case "nav4":
        $("#nav4").animate({'background-color': '#F1F1F1'}, 600);
        break;
      case "nav5":
        $("#nav5").animate({'background-color': '#F1F1F1'}, 600);
        break;
    };

    clearTimeout(myTimeout);
    timeOut();

  });

  $("#left").hover(function() {
    var currentImg = parseInt($(".slide img:visible").attr('id'));

    if (currentImg > 1) {
      $("#left-preview").css({
        "background": "url(carousel-" + (currentImg - 1) + ".jpg)",
        "background-size": "100px 100px"
      });
    }
    else {
      $("#left-preview").css({
        "background": "url(carousel-" + lastImg + ".jpg)",
        "background-size": "100px 100px"
      });
    }

    $("#left-preview").toggleClass('invisible');

  }, function() {
    $("#left-preview").toggleClass('invisible');
  });

  $("#right").hover(function() {
    var currentImg = parseInt($(".slide img:visible").attr('id'));

    if (currentImg < 5) {
      $("#right-preview").css({
        "background": "url(carousel-" + (currentImg + 1) + ".jpg)",
        "background-size": "100px 100px"
      });
    }
    else {
      $("#right-preview").css({
        "background": "url(carousel-" + firstImg + ".jpg)",
        "background-size": "100px 100px"
      });
    }
    $("#right-preview").toggleClass('invisible');

  }, function() {
    $("#right-preview").toggleClass('invisible');
  });

  //start initial timeout
  timeOut();

//end document
});
