function identifyBrowser(e, t, n) {
    var r = {
            chrome: [/Chrome\/(\S+)/],
            firefox: [/Firefox\/(\S+)/],
            msie: [/MSIE (\S+);/],
            opera: [/Opera\/.*?Version\/(\S+)/, /Opera\/(\S+)/],
            safari: [/Version\/(\S+).*?Safari\//]
        },
        i, s, o, u;
    if (e === undefined || e === null) e = navigator.userAgent;
    if (t === undefined) t = 2;
    else if (t === 0) t = 1337;
    for (o in r)
        while (i = r[o].shift())
            if (s = e.match(i)) {
                u = s[1].match(new RegExp("[^.]+(?:.[^.]+){0," + --t + "}"))[0];
                if (n) {
                    return o + " " + u
                } else {
                    return o
                }
            }
    return null
}

$(window).on("beforeunload", function () {
    $(window).scrollTop(0)
});
$(document).ready(function () {
    if (window.location.hash) {
        window.location = ""
    }
    var e = "body";
    if (identifyBrowser(null) === "firefox" || identifyBrowser(null) === "msie") {
        e = "html"
    }
    $(".back-to-top a,a[href*=#]:not([href=#])").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var e = this;
            var t = $(this.hash);
            t = t.length ? t : $("[name=" + this.hash.slice(1) + "]");
            if (t.length) {
                var n = -50;
                if (this.hash !== "#hello") {
                    n = t.offset().top - 200;
                }
                var r = Math.abs($(document).scrollTop() - n),
                    i = 500;
                if (r > 2e3) {
                    i = 1e3
                } else if (r > 1e3) {
                    i = 750
                }
                $("html,body").animate({
                    scrollTop: n
                }, i);
                return false
            }
        }
    });
    $("#flag-picker .flag-icon").bind("click", function() {
        var country = $(this).attr("country");
        // if (!$(this).hasClass("grayscale") && $("#flag-picker").hasClass("filtered")) {
        //     $("#flag-picker .flag-icon").each(function() {
        //         $(this).removeClass("grayscale");
        //     });

        //     $("#staff-view .member").each(function(){
        //         if (!$(this).is(":visible")) {
        //             $(this).slideDown(250);
        //         }
        //     });
        //     $("#flag-tip-2").fadeOut(250, function() {
        //         $("#flag-tip-1").fadeIn(250);
        //     });
        //     $("#flag-picker").removeClass("filtered");
        // } else {
        //     $("#flag-picker .flag-icon").each(function() {
        //         if ($(this).attr("country") !== country) {
        //             $(this).addClass("grayscale");
        //         } else {
        //             $(this).removeClass("grayscale");
        //         }
        //     });
        //     $("#staff-view .member:not(." + country + ")").slideUp(250, function(){
        //         $("#staff-view .member." + country).slideDown(250);
        //     });
        //     $("#flag-tip-1").fadeOut(250, function() {
        //         $("#flag-tip-2").fadeIn(250);
        //     });
        //     $("#flag-picker").addClass("filtered");
        // }
    });
});

$(window).bind("load", function() {
    // Loop through elements children to find & set the biggest height
    $(".flip-container .flipper").each(function(){
        var biggestHeight = "0";
        $(this).find(".front,.back").each(function(){
            // If this elements height is bigger than the biggestHeight
            if ($(this).innerHeight() > biggestHeight ) {
                // Set the biggestHeight to this Height
                biggestHeight = $(this).height();
            }
        });
        // Set the container height
        $(this).height(biggestHeight);
        $(this).find(".back .text").height(biggestHeight - 20); // 20 is the padding of text
    });

    var wall = new freewall("#staff-view");
    // wall.fitWidth();

    wall.reset({
        selector: '.member',
        animate: true,
        cellW: 380,
        cellH: 'auto',
        gutterX: 20,
        gutterY: 20,
        onResize: function() {
            wall.fitWidth();
        }
    });
    wall.fitWidth();
        
});