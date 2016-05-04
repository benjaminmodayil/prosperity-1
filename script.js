$(document).ready(function() {
    console.log("hello");

    var $one = $('#onePara');
    var $two = $('#twoPara');
    var $three = $('#threePara');
    var $four = $('#fourPara');
    var $five = $('#fiveDiv');

    var $textOne = $one.text();
    var $textTwo = $two.text();
    var $textThree = $three.text();
    var $textFour = $four.text();
    var $htmlfive = $five.html();

    var $htmlOne = $one.html();
    var $htmlTwo = $two.html();

    var $left = $('#left');
    var $right = $('#right');
    var $interested = $('#interested');

    var $oneLi = $('#one');
    var $twoLi = $('#two');
    var $threeLi = $('#three');
    var $fourLi = $('#four');

    if (!$one.hasClass('hidden')) {
            $left.addClass('hidden');
            $right.addClass('hidden');
    };



    $('button#interested').on('click', function(e) {
        var interested = $('#interested');
        e.preventDefault();

        if (interested) {
            $one.fadeTo(200, 0);
            $one.hide(function() {
                $one.toggleClass('hidden');
                $two.fadeTo(200, 1).toggleClass('side').toggleClass('hidden');

            });

            interested.toggleClass('hidden');

            $left.fadeTo(200, 1).removeClass('hidden');
            $right.fadeTo(200, 1).removeClass('hidden');
            if (!$two.hasClass('side')) {
                $two.toggleClass('side');
            };
        }
    });

    $('button#right').on('click', function(e) {
        if (!$two.hasClass('hidden')) {
                $('#two').addClass('green');
                $two.fadeTo(200, 0);
                $two.hide(function() {
                    $two.toggleClass('hidden');
                    if (!$three.hasClass('side')) {
                        $three.addClass('side');
                    };

                    $three.fadeTo(200, 1).toggleClass('side').toggleClass('hidden');
                });
        }
        else if (!$three.hasClass('hidden')) {
                $three.fadeTo(200, 0);
                $three.hide(function() {
                    $three.toggleClass('hidden');
                    if (!$four.hasClass('side')) {
                        $four.addClass('side');
                    };
                $four.fadeTo(200, 1).toggleClass('side').toggleClass('hidden');

                });
        }
        else if (!$four.hasClass('hidden')) {
          $('.errors').text(' ');
          $('#firstname').removeClass("border");
          $('#lastname').removeClass("border");
          $('#email').removeClass("border");
                $four.fadeTo(200, 0);
                $four.hide(function() {
                    $four.toggleClass('hidden');
                    if (!$five.hasClass('side')) {
                        $five.addClass('side');
                    };

                $five.fadeTo('slow', 1).toggleClass('side').toggleClass('hidden');
                $right.fadeTo(200, 0);

                });
        }
        else if (!five.hasClass('hidden')) {
                $five.fadeTo(200, 0);
                $five.hide(function() {
                    $five.toggleClass('hidden');
                    if ($five.hasClass('side')) {
                        $five.toggleClass('side');
                    };
                });
        }

    });

    $('button#left').on('click', function(e) {
        if (!$two.hasClass('hidden')) {
                $two.fadeTo(200, 0);
                $two.hide(function() {
                $two.toggleClass('hidden');
                $one.fadeTo(200, 1).toggleClass('hidden');
                $right.fadeTo(200, 0).addClass('hidden');
                $left.fadeTo(200, 0).addClass('hidden');
                $interested.fadeTo(200, 1).toggleClass('hidden');

                });
        }
        else if (!$three.hasClass('hidden')) {
                $three.fadeTo(200, 0);
                $three.hide(function() {
                $three.toggleClass('hidden');
                $two.fadeTo(200, 1).toggleClass('hidden');
                });
        }
        else if (!$four.hasClass('hidden')) {

                    $four.fadeTo(200, 0);
                    $four.hide(function() {
                    $four.toggleClass('hidden');
                    $three.fadeTo(200, 1).toggleClass('hidden');

                });
        }
        else if (!$five.hasClass('hidden')) {
          $right.fadeTo(200, 1);
                    $five.fadeTo(200, 0);
                    $five.hide(function() {
                        $five.toggleClass('hidden');
                        $four.fadeTo(200, 1).toggleClass('hidden');
                });
        }

    });
    $('#submit').on('click', function(e) {
      var error = false;

      if (!$('#firstname').val() && !$('#lastname').val() && !$('#email').val()) {
        $('#firstname').before('<span class="errors"> Required </span>');
        $('#lastname').before('<span class="errors"> Required </span>');
        $('#email').before('<span class="errors"> Required </span>');
        error = true;
        $('#firstname').addClass("border");
        $('#lastname').addClass("border");
        $('#email').addClass("border");
      }
      else if ($('#firstname').val() && $('#lastname').val() && $('#email').val()) {
        $('form p').text("Thank You!");
        $('form p').addClass('thanks');
        $('#firstname').addClass('hidden');
        $('#lastname').addClass('hidden');
        $('#email').addClass('hidden');
        $('#submit').addClass('hidden');

      }
      e.preventDefault();
    })

});
