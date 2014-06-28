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
});

$(window).bind("load", function() {
    setFlippableHeight()

    // Staff Wall
    var staffWall = new freewall("#staff-view");
    var staffCellW = ($("#staff-view").width() - 40)/3;
    staffWall.reset({
        selector: '.member',
        animate: true,
        cellW: staffCellW,
        cellH: 'auto',
        gutterX: 20,
        gutterY: 20,
        onResize: function() {
            staffWall.fitWidth();
        }
    });
    staffWall.fitWidth();

    // Need to correct the height once more
    setFlippableHeight()

    // Activate flag picker
    $("#flag-picker .flag-icon").bind("click", function() {
        var country = $(this).attr("country");
        if (!$(this).hasClass("grayscale") && $("#flag-picker").hasClass("filtered")) {
            $("#flag-picker .flag-icon").each(function() {
                $(this).removeClass("grayscale");
            });
            $("#flag-tip-2").fadeOut(250, function() {
                $("#flag-tip-1").fadeIn(250);
            });
            staffWall.unFilter();
            $("#flag-picker").removeClass("filtered");
        } else {
            $("#flag-picker .flag-icon").each(function() {
                if ($(this).attr("country") !== country) {
                    $(this).addClass("grayscale");
                } else {
                    $(this).removeClass("grayscale");
                }
            });
            staffWall.filter(".member." + country);
            $("#flag-tip-1").fadeOut(250, function() {
                $("#flag-tip-2").fadeIn(250);
            });
            $("#flag-picker").addClass("filtered");
        }
    });

    // Activate flippable info
    $(".flip-container").bind("click", function() {
        if($(this).hasClass("flipped")) {
            $(this).removeClass("flipped")
        } else {
            $(this).addClass("flipped")
        }
    });
});

function setFlippableHeight() {
    // Loop through elements children to find & set the biggest height
    $(".flip-container .flipper").each(function(){
        var biggestHeight = "0";
        $(this).find(".front").each(function(){
            // If this elements height is bigger than the biggestHeight
            if ($(this).innerHeight() > biggestHeight ) {
                // Set the biggestHeight to this Height
                biggestHeight = $(this).innerHeight();
            }
        });
        // Set the container height
        $(this).height(biggestHeight);
        $(this).find(".back .text").height(biggestHeight - 20);
    });
}