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

    $("#reveal-button").addClass("fa-lock");

    $("#reveal").hover(function() {
        $("#reveal-button").removeClass("fa-lock");
        $("#reveal-button").addClass("fa-unlock-alt");
        $("#reveal-text").animate({
            opacity: 1
        }, 200, function() {
            $("#start-text").animate({
                opacity: 0
            }, 200);
        });
    }, function() {
        $("#reveal-button").removeClass("fa-unlock-alt");
        $("#reveal-button").addClass("fa-lock");
        $("#reveal-text").animate({
            opacity: 0
        }, 200, function(){
            $("#start-text").animate({
                opacity: 1
            }, 200);
        });
    });
});

$(window).bind("beforeunload", function () {
    $(window).scrollTop(0)
});
