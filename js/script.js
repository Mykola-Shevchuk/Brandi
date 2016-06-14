$(document).ready(function() {

    // Navigation toggle

    $("nav a").click(function() {

        $("nav li").removeClass('toggle-nav');

        $(this.parentElement).addClass('toggle-nav');

    });

    // Right dotes


    $(".right-circle-menu div").click(function() {

        $(".right-circle-menu div").removeClass("toggle-right-dotes");

        $(this).addClass('toggle-right-dotes');

    });

    //Bottom Features dotes

    var total_features_html = $(".total-menu1").html();

    $(".total-menu2").append(total_features_html);

    $(".total-menu3").append(total_features_html);

    $(".features-bottom-circle-menu div").click(function() {

        $(".features-bottom-circle-menu div").removeClass("toggle-bottom-dotes");

        $(this).addClass('toggle-bottom-dotes');

        switch ($(this).attr("id")) {

            case "features-circle1":

                $(".over-total-menu").animate({
                    left: "0"
                }, 300)

                break;

            case "features-circle2":

                $(".over-total-menu").animate({
                    left: "-100%"
                }, 300)

                break;

            case "features-circle3":

                $(".over-total-menu").animate({
                    left: "-200%"
                }, 300)

        }

    });

    //Features Muenu

    $(".menu > div > div").mousedown(function() {

        $(this).css('top', '2px');

    });

    $(".menu > div > div").mouseup(function() {

        $(this).css('top', '');

    });

    // Works images hover

    $(".works-photos a").hover(function() {

        $(this.firstElementChild).css('display', 'none');

        $(this.lastElementChild).css('display', 'inline-block');

    }, function() {

        $(this.firstElementChild).css('display', 'inline-block');

        $(this.lastElementChild).css('display', 'none');
    });


    //Bottom Team dotes

    var total_team_html = $(".float-team-photos1").html();

    $(".float-team-photos2").append(total_team_html);

    $(".float-team-photos3").append(total_team_html);

    $(".team-bottom-circle-menu div").click(function() {

        $(".team-bottom-circle-menu div").removeClass("toggle-bottom-dotes");

        $(this).addClass('toggle-bottom-dotes');

        switch ($(this).attr("id")) {
            case "team-circle1":
                $(".over-total-team").animate({
                    left: "0"
                }, 300)
                break;
            case "team-circle2":
                $(".over-total-team").animate({
                    left: "-100%"
                }, 300)
                break;
            case "team-circle3":
                $(".over-total-team").animate({
                    left: "-200%"
                }, 300)
        }
    });

    //Team images hover


    var team_social;

    $(".team-photos figure").hover(function() {
        team_social = '<div class="team-social"><a target="blank" title="Twitter" href="https://twitter.com" id="team-social1"><img src="images/Team-twitter.png"></a><a target="blank" title="Facebook" href="https://www.facebook.com" id="team-social2"><img src="images/Team-facebook.png"></a><a target="blank" title="Google+" href="https://plus.google.com" id="team-social3"><img src="images/Team-Google+.png"></a></div>'
        $(this).append(team_social);
        $(this).find("p").css('color', '#0eb493');
        $(this.firstElementChild.firstElementChild).css('display', 'none');
        $(this.firstElementChild.lastElementChild).css('display', 'inline-block');
    }, function() {
        $(this).find(".team-social").remove();
        $(this).find("p").css('color', '#062033');
        $(this.firstElementChild.firstElementChild).css('display', 'inline-block');
        $(this.firstElementChild.lastElementChild).css('display', 'none');
    });

    // Some Fun facts buttons

    $(".some-fun-facts-buttons > div > div").hover(function() {
        $(this).css('backgroundColor', 'rgba(115, 127, 139, .4)');
    }, function() {
        $(this).css("backgroundColor", "rgba(0, 0, 0, 0)");
    });

    // Search arrow

    var searchBg = $("input[type=search]").css("background");

    $("input[type=search]").focus(function() {

        $(this).css('background', '#1ea78d').addClass('input-box-shadow');
    });

    $("input[type=search]").blur(function() {

        $(this).css('background', searchBg).removeClass('input-box-shadow');
    });

    // Border for Explore

    $(".explore a").hover(function() {
        $(this.parentElement).css({
            backgroundColor: '#B6B6B6',
            borderRadius: '3px'
        });

    }, function() {
        $(this.parentElement).css({
            backgroundColor: '',
            borderRadius: ''
        });

    });

    // Fixed Header

    $(document).scroll(function() {

        if (window.pageYOffset >= 70) {

            $(".nav-fixed").css('display', 'block');

        } else {
            $(".nav-fixed").css('display', 'none');
        }
    });

    $(window).resize(function() {

        if (document.documentElement.clientWidth + 21 < 415) {

            $("nav").removeClass('scroll-header');

        }
    });


    $('.works-menu > div').click(function() {
    	$('.works-menu > div').removeClass('blue-border');
    	console.log($(this));
    	$(this).addClass('blue-border');
        var itemClass = $(this).attr('id');

        if (itemClass === "all") {
            $('.works-photos > div').show(300);
        } else {
            $('.works-photos > div').each(function(index, el) {

			 if (!$(el).hasClass(itemClass)) {
                    $(el).show(300);
                } else {

                    $(el).hide(300);
                }
            });
        }



    });



});
